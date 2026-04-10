// Vercel Serverless Entry Point
// Vercel calls this file for every request. It just re-exports the Express app.
const app = require('../server');

module.exports = app;
