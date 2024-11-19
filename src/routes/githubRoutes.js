const express = require('express');
const router = express.Router();
const { getFollowers, getRepos, getUser } = require('../controllers/githubController');

// Endpoint to get a list of followers for a given GitHub username
router.get('/followers/:username', getFollowers);

// Endpoint to get a list of repositories for a given GitHub username
router.get('/repos/:username', getRepos);

// Endpoint to get information of a given GitHub username
router.get('/user/:username', getUser);

module.exports = router;