var app = angular.module("app", []);

app.controller("headercontroller", function($scope){

});

app.controller("aboutcontroller", function($scope, $http){

	$scope.studies 		= {};
	$scope.experiences 	= {};
	$scope.skills		= {};
	
	$http.get('/about/studies')
	.success((data) => {
		$scope.studies = data;
		console.log(data);
	})
	.error((error) => {
		console.log(error);
	});

	$http.get('/about/experiences')
	.success((data) => {
		$scope.experiences = data;
		console.log(data);
	})
	.error((error) => {
		console.log(error);
	});

	$http.get('/about/skills')
	.success((data) => {
		$scope.skills = data;
		console.log(data);
	})
	.error((error) => {
		console.log(error);
	});
	
	$scope.add_studie = function(){
		$scope.year;
		$scope.diplome;
		$scope.school;
		$scope.country;

		studie = {year : $scope.year, diplome: $scope.diplome, school: $scope.school, country: $scope.country};
		$scope.studies.push(studie);
	}

	$scope.add_experience = function(){
		$scope.date;
		$scope.company;
		$scope.description;

		experience = {date: $scope.date, company: $scope.company, description: $scope.description};
		$scope.experiences.push(experience);
	}

	$scope.add_hobbie = function(){
		$scope.hobbie;
		hobbie = {description: $scope.hobbie};
		$scope.hobbies.push(hobbie);
		console.log($scope.hobbies);
	}
});

app.controller("projectcontroller", function($scope){
	$scope.projects		= {};
	
	$http.get('/projects')
	.success((data) => {
		$scope.projects = data;
		console.log(data);
	})
	.error((error) => {
		console.log(error);
	});

	$scope.projects = [
		{theme : "application de gestion de reservation dans un restaurant", technologies: "Appache Cordova, HTML5, AngularJs, NodeJs, CSS, Bootstrap", description: "C'est une application qui permet aux clients d'un restaurant d'effectuer une réservation de place, de consulter les menus présentés ..."},
		{theme : "site web personnel", technologies: "AngularJs, NodeJS, HTML5, CSS3", description: "C'est un site web permettant de me présenter et de décrire l'ensemble des projets personnels sur lesquels j'ai travaillé."},
		{theme : "site web présentant le sénégal", technologies: "AngularJs, HTML5, Bootstrap, CSS3, NodeJS", description: "Ce site web a pour but de présenter mon pays d'origine et ses sites touristiques ainsi qu'une nouvelle vision de ce pays en voie de développement."},
		{theme : "application mobile de pilotage d'un drone", technologies: "Java, android studio", description: "Ce projet est un projet de classe réalisé en groupe. Cette application mobile permet de piloter un drone à partir des données géographiques de celui-ci en utilisant l'ensemble des capteurs du périphériques mobiles."},
		{theme : "application web de partage de notes de cours", technologies: "HTML5, CSS3, BOOTSTRAP, JQUERY, PHP", description: "Ce projet est un projet de classe réalisé en solo. Cette application web permet aux étudiants d'une même formation de partager des notes de cours ainsi que d'autres applications"},
		{theme : "application web de gestion d'un tournoi de Foot", technologies: "HTML5, PHP, CSS3", description: "C'est application web qui permet de gérer un tournoi de football en organisant les rencontres et en diffusant les résultats."}
	];
});

app.controller("contactcontroller", function($scope){
	$scope.name = "";
	$scope.mail = "";
	$scope.message = "";
	$scope.sendmessage = function(){
		/* send message */
	};
});