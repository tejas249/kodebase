var express = require('express');
const { signup, login, createProj, saveProject } = require('../controllers/userControllers');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
 router.post("/signup",signup)
 router.post("/login",login)
router.post("/createProj",createProj)
router.post("/saveProject", saveProject);
module.exports = router;
