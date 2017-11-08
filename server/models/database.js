const {Client} 			= require('pg');
const path 				= require('path');
const connectionString 	= process.env.DATABASE_URL || 'postgresql://postgres:jamil2009@localhost:5432/BALDEPRO';

const client = new Client({connectionString: connectionString,});
client.connect();

/*const create_study_table = client.query(
	'CREATE TABLE study( id SERIAL PRIMARY KEY, year VARCHAR(40) not null, name VARCHAR(100) not null, school VARCHAR(100) not null, city VARCHAR(100) not null)');
*/
const create_experience_table = client.query(
	'CREATE TABLE experiences(id SERIAL PRIMARY KEY, period VARCHAR(50) not null, company VARCHAR(100) not null, project VARCHAR(100) not null, description VARCHAR(1000) not null)');
const create_skills_table = client.query(
	'CREATE TABLE skills( id SERIAL PRIMARY KEY, category VARCHAR(50) not null, name VARCHAR(100) not null)');
const create_projects_table = client.query(
	'CREATE TABLE projects(id SERIAL PRIMARY KEY, title VARCHAR(100) not null, skills VARCHAR(200) not null, description VARCHAR(2000) not null)');
create_experience_table.on('end', () => {});
create_skills_table.on('end', () => {});
create_projects_table.on('end', ()=> { client.end(); });
//create_study_table.on('end', ()=> { client.end(); });