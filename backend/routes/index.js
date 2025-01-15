var express = require('express');
const { signup, login, createProj, saveProject, getProjects, getProject, deleteProject, editProject } = require('../controllers/userControllers');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
 router.post("/signup",signup)
 router.post("/login",login)
router.post("/createProj",createProj)
router.post("/saveProject", saveProject);
router.post("/getProjects",getProjects)
router.post("/getProject",getProject);
router.post("/editProject",editProject)
router.post("/deleteProject",deleteProject);
module.exports = router;
