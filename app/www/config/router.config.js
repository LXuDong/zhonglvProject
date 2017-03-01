
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
	.state( "ledge",{
		url : "/ledge",
		templateUrl : "controllers/ledge/ledge.html",
		controller : "ledgeCtrl"
	} )
	.state( "zhs",{
		url : "/ledge/zhs",
		templateUrl : "controllers/ledge/zhs/zhs.html",
		controller : "zhsCtrl"
	} )
	.state( "conctent",{
		url : "/ledge/zhs/conts",
		templateUrl : "controllers/ledge/zhs/conts/conts.html",
		controller : "contsCtrl"
	} )
	


	

	$urlRouterProvider.otherwise( "/home" );


})

