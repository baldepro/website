var express 			= require('express');
var router 				= express.Router();
const {Client} 			= require('pg');
const path 				= require('path');
const connectionString 	= process.env.DATABASE_URL || 'postgresql://postgres:jamil2018@https://services.emi.u-bordeaux.fr/dbserver:5432/tbalde';

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  //res.sendFile('index.html');
  res.sendFile(path.join(__dirname,'..','..','client','views','index.html'))
});

router.get('/about/studies', function(req, res, next){
	const results = [];
	const client = new Client({connectionString: connectionString,});
	client.connect();
	query_studies = client.query('SELECT * FROM study ORDER BY id ASC;');
	query_studies.on('row', (row) => {results.push(row);});
	query_studies.on('end', () => { return res.json(results); });
});

router.get('/about/experiences', function(req, res, next){
	const results = [];
	const client = new Client({connectionString: connectionString,});
	client.connect();
	query_experiences = client.query('SELECT * FROM experiences ORDER BY id ASC;');
	query_experiences.on('row', (row) => {results.push(row);});
	query_experiences.on('end', () => { return res.json(results); });
});

router.get('/about/skills', function(req, res, next){
	const results = [];
	const client = new Client({connectionString: connectionString,});
	client.connect();
	query_skills = client.query('SELECT * FROM skills ORDER BY id ASC;');
	query_skills.on('row', (row) => {results.push(row);});
	query_skills.on('end', () => { return res.json(results); });
});

router.get('/projects', function(req, res, next){
	const results = [];
	const client = new Client({connectionString: connectionString,});
	client.connect();
	query_projects = client.query('SELECT * FROM projects ORDER BY id ASC;');
	query_projects.on('row', (row) => {results.push(row);});
	query_projects.on('end', () => { return res.json(results); });
});
module.exports = router;
