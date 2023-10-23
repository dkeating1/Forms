const express = require('express');
const router = express.Router();

// GET route to show the bird creation form
router.get('/create', (req, res) => {
  res.render('birds/create');
});

// POST route to handle form submission
router.post('/create', (req, res) => {
  const { species, nickname, status } = req.body;
  const bird = { species, nickname, status };
  console.log('Bird created:', bird);
  res.render('birds/confirmation', { bird });
});

module.exports = router;
