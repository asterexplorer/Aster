const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');
const path = require('path');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
// import removed
const nodemailer = require('nodemailer');

const app = express();
const port = 8005;

// Configure the email transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'asterexplorer@gmail.com',
        pass: 'YOUR_GMAIL_APP_PASSWORD' // Configure your App Password here
    }
});

// --- Enterprise Security Middlewares ---
// 1. Set Security HTTP Headers (Helmet)
app.use(helmet({
    contentSecurityPolicy: false, // Disabled for local development of embedded images/scripts
    crossOriginEmbedderPolicy: false
}));

// 2. Prevent XSS Attacks (Removed due to Express 5 compatibility issues)
// app.use(xss());

// 3. Prevent HTTP Parameter Pollution
app.use(hpp());

// 4. API Rate Limiting (Prevents DDoS and Brute Force)
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 mins
    max: 100, // Limit each IP to 100 requests per window
    message: { error: "Too many requests from this IP, please try again in 15 minutes." }
});
app.use('/api/', limiter);
// ----------------------------------------

// Configure CORS
app.use(cors({
    origin: '*',
    credentials: true,
    methods: ['*'],
    allowedHeaders: ['*']
}));

// Parse JSON payload
app.use(express.json());

// Initialize database connection
let db;
(async () => {
    db = await open({
        filename: path.join(__dirname, '../aster.db'),
        driver: sqlite3.Database
    });
    console.log("Connected to SQLite database at ../aster.db");

    // Create tables if not exist (same as FastAPI models.Base.metadata.create_all)
    await db.exec(`
        CREATE TABLE IF NOT EXISTS jobs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            description TEXT,
            budget REAL,
            skills TEXT,
            client_name TEXT,
            status TEXT DEFAULT 'Open',
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );
        CREATE TABLE IF NOT EXISTS proposals (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            job_id INTEGER,
            freelancer_name TEXT,
            cover_letter TEXT,
            bid_amount REAL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY(job_id) REFERENCES jobs(id)
        );
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );
    `);

    // Create a default admin user if none exists
    const adminExists = await db.get(`SELECT * FROM users WHERE email = 'asterexplorer@gmail.com'`);
    if (!adminExists) {
        await db.run(`INSERT INTO users (email, password) VALUES (?, ?)`, ['asterexplorer@gmail.com', 'admin123']);
        console.log("Created default admin user: asterexplorer@gmail.com / admin123");
    }
})();

app.get('/', (req, res) => {
    res.json({ message: "Welcome to AsterExplorer API", status: "online" });
});

app.get('/api/info', (req, res) => {
    res.json({
        company: "AsterExplorer",
        industry: ["Freelance", "Platform", "Jobs"],
        mission: "Connecting top freelance talent with incredible projects worldwide."
    });
});

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.json({ success: false, detail: "Email and password are required." });
    }

    try {
        const user = await db.get(`SELECT * FROM users WHERE email = ?`, [email]);
        if (user && user.password === password) {
            // Success
            return res.json({ success: true, detail: "Logged in successfully", email: user.email });
        } else {
            return res.json({ success: false, detail: "Invalid email or password." });
        }
    } catch (e) {
        return res.status(500).json({ success: false, detail: "Database error." });
    }
});

app.post('/api/signup', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.json({ success: false, detail: "Email and password are required." });
    }

    try {
        const existing = await db.get(`SELECT * FROM users WHERE email = ?`, [email]);
        if (existing) {
            return res.json({ success: false, detail: "Email already in use." });
        }

        const result = await db.run(`INSERT INTO users (email, password) VALUES (?, ?)`, [email, password]);
        if (result.lastID) {
            return res.json({ success: true, detail: "Account created successfully", email });
        }
    } catch (e) {
        return res.status(500).json({ success: false, detail: "Failed to create account." });
    }
});

app.post('/api/jobs', async (req, res) => {
    const { title, description, budget, skills, client_name } = req.body;
    try {
        const result = await db.run(
            `INSERT INTO jobs (title, description, budget, skills, client_name) VALUES (?, ?, ?, ?, ?)`,
            [title, description, budget, skills, client_name]
        );
        const newJob = await db.get(`SELECT * FROM jobs WHERE id = ?`, [result.lastID]);

        // --- Send Email Notification to Admin ---
        try {
            await transporter.sendMail({
                from: 'asterexplorer@gmail.com',
                to: 'asterexplorer@gmail.com',
                subject: `New Job Posted on AsterExplorer: ${title}`,
                html: `
                    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
                        <h2 style="color: #14a800;">New Job Posting!</h2>
                        <p>A new client has just posted a project on AsterExplorer.</p>
                        <div style="background-color: #f2f7f2; padding: 15px; border-left: 4px solid #14a800; margin: 20px 0;">
                            <p style="margin: 0 0 10px 0;"><strong>Project Title:</strong> ${title}</p>
                            <p style="margin: 0 0 10px 0;"><strong>Client Name:</strong> ${client_name}</p>
                            <p style="margin: 0 0 10px 0;"><strong>Estimated Budget:</strong> $${budget}</p>
                            <p style="margin: 0 0 10px 0;"><strong>Required Skills:</strong> ${skills}</p>
                            <p style="margin: 0;"><strong>Description:</strong></p>
                            <p style="white-space: pre-wrap; margin-top: 5px;">${description}</p>
                        </div>
                        <p style="font-size: 0.9em; color: #555;">Log in to the admin dashboard to review this posting.</p>
                    </div>
                `
            });
            console.log(`Sent email notification for new job posting: ${title}`);
        } catch (emailError) {
            console.error("Failed to send job posting email notification:", emailError.message);
        }

        res.json({ ...newJob, proposals: [] });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.get('/api/jobs', async (req, res) => {
    const skip = parseInt(req.query.skip) || 0;
    const limit = parseInt(req.query.limit) || 100;
    const query = req.query.q ? `%${req.query.q}%` : null;

    try {
        let jobs;
        if (query) {
            jobs = await db.all(
                `SELECT * FROM jobs WHERE title LIKE ? OR description LIKE ? OR skills LIKE ? LIMIT ? OFFSET ?`,
                [query, query, query, limit, skip]
            );
        } else {
            jobs = await db.all(`SELECT * FROM jobs LIMIT ? OFFSET ?`, [limit, skip]);
        }

        // FastAPI code returned jobs with their proposals attached. Let's attach them manually since no ORM.
        const jobIds = jobs.map(j => j.id);
        if (jobIds.length === 0) {
            return res.json([]);
        }

        const placeholders = jobIds.map(() => '?').join(',');
        const proposals = await db.all(`SELECT * FROM proposals WHERE job_id IN (${placeholders})`, jobIds);

        const jobsWithProposals = jobs.map(job => {
            return {
                ...job,
                proposals: proposals.filter(p => p.job_id === job.id)
            };
        });

        res.json(jobsWithProposals);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.post('/api/jobs/:job_id/proposals', async (req, res) => {
    const jobId = req.params.job_id;
    const { freelancer_name, cover_letter, bid_amount } = req.body;

    try {
        const job = await db.get(`SELECT id FROM jobs WHERE id = ?`, [jobId]);
        if (!job) {
            return res.status(404).json({ detail: "Job not found" });
        }

        const result = await db.run(
            `INSERT INTO proposals (job_id, freelancer_name, cover_letter, bid_amount) VALUES (?, ?, ?, ?)`,
            [jobId, freelancer_name, cover_letter, bid_amount]
        );

        const newProposal = await db.get(`SELECT * FROM proposals WHERE id = ?`, [result.lastID]);

        // --- Send Email Notification to Admin ---
        try {
            await transporter.sendMail({
                from: 'asterexplorer@gmail.com',
                to: 'asterexplorer@gmail.com',
                subject: `New Proposal Submitted on AsterExplorer (Job ID: ${jobId})`,
                html: `
                    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
                        <h2 style="color: #14a800;">New Proposal Received!</h2>
                        <p>A freelancer has just submitted a proposal for a project on AsterExplorer.</p>
                        <div style="background-color: #f2f7f2; padding: 15px; border-left: 4px solid #14a800; margin: 20px 0;">
                            <p style="margin: 0 0 10px 0;"><strong>Freelancer Name:</strong> ${freelancer_name}</p>
                            <p style="margin: 0 0 10px 0;"><strong>Proposed Bid Amount:</strong> $${bid_amount}</p>
                            <p style="margin: 0;"><strong>Cover Letter:</strong></p>
                            <p style="white-space: pre-wrap; margin-top: 5px;">${cover_letter}</p>
                        </div>
                        <p style="font-size: 0.9em; color: #555;">Please log into your dashboard to review this candidate.</p>
                    </div>
                `
            });
            console.log(`Sent email notification for proposal from ${freelancer_name}`);
        } catch (emailError) {
            console.error("Failed to send proposal email notification:", emailError.message);
        }

        res.json(newProposal);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.post('/api/ai/chat', (req, res) => {
    const message = (req.body.message || "").toLowerCase();

    if (message.includes("predict") || message.includes("prediction") || message.includes("forecast") || message.includes("future")) {
        return res.json({
            reply: "Based on market analytics, remote work and freelance jobs will increase by 24% next month. Specific demand is rising in AI development, UX/UI design, and Content Strategy.",
            prediction_data: {
                label: "Freelance Market Demand",
                data: [120, 135, 148, 160, 155, 175, 190],
                dates: ["Feb 24", "Feb 25", "Feb 26", "Feb 27", "Feb 28", "Mar 01", "Mar 02"],
                insight: "Tech freelance demand is predicted to peak in early March."
            }
        });
    }

    let response = "";
    if (message.includes("job") || message.includes("freelance") || message.includes("work")) {
        response = "AsterExplorer offers thousands of freelance opportunities. Whether you're a designer, developer, or writer, you can find projects that match your skills.";
    } else if (message.includes("hire") || message.includes("client") || message.includes("post")) {
        response = "As a client, you can post a job on AsterExplorer and receive competitive proposals from vetted professionals around the globe.";
    } else if (message.includes("hello") || message.includes("hi")) {
        response = "Welcome to AsterExplorer. I am your AI assistant here to help you navigate our freelance platform.";
    } else if (message.includes("price") || message.includes("fee") || message.includes("cost")) {
        response = "AsterExplorer takes a transparent, industry-low 5% fee on completed contracts. Posting a job and bidding is completely free.";
    } else if (message.includes("voice") || message.includes("talk") || message.includes("who are you")) {
        response = "I am the AsterExplorer Voice AI. I'm here to provide guidance on using our freelance marketplace and finding the right work or talent.";
    } else {
        response = "I'm the AsterExplorer AI. I can help you find jobs, post projects, or check market trends. What do you need help with?";
    }

    res.json({ reply: response });
});

// Serve frontend static files
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Catch-all route to serve the React app for non-API requests
app.use((req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Node.js API server running at http://0.0.0.0:${port}`);
    console.log(`Serving frontend from ../frontend/dist`);
});
