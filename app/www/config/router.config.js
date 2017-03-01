<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> f33eadea1ac9751dc05dc2b2847dd747487459c0
angular.module( "lotour.app").config(function( $stateProvider,$urlRouterProvider ){

	$stateProvider
	.state( "home",{
		url : "/home",
		templateUrl : "controllers/home/home.html",
		controller : "homeCtrl"
	} )
	.state( "question",{
		url : "/question",
		templateUrl : "controllers/question/question.html",
		controller : "questionCtrl"
	} )
	.state( "zhs",{
		url : "/zhs",
		templateUrl : "controllers/zhs/zhs.html",
		controller : "zhsCtrl"
	} )
	.state( "conctent",{
		url : "/conts",
		templateUrl : "controllers/conts/conts.html",
		controller : "contsCtrl"
	} )
<<<<<<< HEAD
=======

	

	$urlRouterProvider.otherwise( "/home" );


=======
angular.module( "lotour.app").config(function( $stateProvider,$urlRouterProvider ){

	$stateProvider
	.state( "home",{
		url : "/home",
		templateUrl : "controllers/home/home.html",
		controller : "homeCtrl"
	} )
	.state( "question",{
		url : "/question",
		templateUrl : "controllers/question/question.html",
		controller : "questionCtrl"
	} )
>>>>>>> f33eadea1ac9751dc05dc2b2847dd747487459c0
	.state( "ledge",{
		url : "/ledge",
		templateUrl : "controllers/ledge/ledge.html",
		controller : "ledgeCtrl"
	} )

	

	$urlRouterProvider.otherwise( "/home" );


<<<<<<< HEAD
=======
>>>>>>> 9b70700e3a2837e746759dd4f0b775fac5fbecc5
})
>>>>>>> f33eadea1ac9751dc05dc2b2847dd747487459c0
