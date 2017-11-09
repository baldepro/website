CREATE TABLE study( id SERIAL PRIMARY KEY, year VARCHAR(40) not null, name VARCHAR(100) not null, school VARCHAR(100) not null, city VARCHAR(100) not null);

CREATE TABLE experiences(id SERIAL PRIMARY KEY, period VARCHAR(50) not null, company VARCHAR(100) not null, project VARCHAR(100) not null, description VARCHAR(1000) not null);

CREATE TABLE skills( id SERIAL PRIMARY KEY, category VARCHAR(50) not null, name VARCHAR(100) not null);

CREATE TABLE projects(id SERIAL PRIMARY KEY, title VARCHAR(100) not null, skills VARCHAR(200) not null, description VARCHAR(2000) not null);
﻿
insert into study(year, name, school, city) values ('2011-2012', 'BAC', 'Lycée Seydina Limamou Laye', 'Dakar(SENEGAL)');
insert into study(year, name, school, city) values ('2012-2014', 'DUT Informatique', 'Ecole Supérieure Polytechnique de Dakar', 'Dakar(SENEGAL)');
insert into study(year, name, school, city) values ('2014-2015', 'LICENCE 2 Informatique', 'Université de La Rochelle', 'LA ROCHELLE');
insert into study(year, name, school, city) values ('2015-2016', 'LICENCE 3 Informatique', 'Université de La Rochelle', 'LA ROCHELLE');
insert into study(year, name, school, city) values ('2016-2017', 'MASTER 1 Informatique spécialité GENIE LOGICIEL', 'Université de Bordeaux', 'BORDEAUX');
insert into study(year, name, school, city) values ('2017-2018', 'MASTER 2 Informatique spécialité GENIE LOGICIEL', 'Université de Bordeaux', 'BORDEAUX');


insert into experiences(period, company, project, description) values ('2013 october-november', 'Polytechnic High School of Dakar', 'Sponsorship web application',
'it is a project in which we realized a web application allowing to automate the sponsorship between new and old students. this application was realized with technologies HTML5, CSS3, JAVASCRIPT and PHP5. in this project I worked rather in the backend part');
insert into experiences(period, company, project, description) values ('2014 july-august', 'EMC2-GROUP', 'Geolocation with image web mobile application',
'During this experiment, I realized a mobile web application of gelocalisation with image capture. This application allows the precision of the location in a vast space. this application has been realized with the following technologies: HTML5, CSS3, JAVASCRIPT, APACHE CORDOVA');
insert into experiences(period, company, project, description) values ('2016 april-july', 'PANGA', 'billing module for an API for management of the energertic consumption of a building',
'This project is part of my internship at the end of the course in computer licensing. This project consisted in realizing a billing module for an energy consumption management api of a building. The technologies used are Nodejs, expressJS, mongoDB, Elasticsearch');


insert into skills(category, name) values('web','HTML5, CSS3, PHP, JAVASCRIPT, NODEJS, EXPRESSJS, BOOTSTRAP, ANGULARJS');
insert into skills(category, name) values('Programing Languages','JAVA, C++, C, C#');
insert into skills(category, name) values('Data Base','MYSQL, POSTGESQL, MONGODB, ELASTICSEARCH');
insert into skills(category, name) values('Network','DHCP, DNS');
insert into skills(category, name) values('Hobbies','FOOTBALL, CINE, VIDEO GAME');


insert into projects(title, skills, description) values('Personnal web site','HTML5, BOOTSTARP, CSS3, ANGULARJS, NODEJS, EXPRESSJS, POSTGRESQL','');
insert into projects(title, skills, description) values('','','');
insert into projects(title, skills, description) values('','','');
insert into projects(title, skills, description) values('','','');
insert into projects(title, skills, description) values('','','');
insert into projects(title, skills, description) values('','','');
