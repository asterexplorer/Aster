// This file acts as an entrypoint for Vercel Serverless Functions.
// Vercel automatically maps the /api folder to this entrypoint.
// It simply re-exports the main backend Express app.

const app = require('../backend/index.js');
module.exports = app;
