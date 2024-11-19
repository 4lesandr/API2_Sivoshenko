const express = require('express');
const githubRoutes = require('./routes/githubRoutes');

const app = express();

// Middleware
app.use(express.json());

// Use GitHub API routes
app.use('/api/github', githubRoutes);

module.exports = app;