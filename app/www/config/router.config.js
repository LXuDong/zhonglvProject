
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
	
	.state( "personal",{
		url : "/personal",
		templateUrl : "controllers/personal/personal.html",
		controller : "personalCtrl"
	} )
	.state( "account",{
		url : "/personal/account",
		templateUrl : "controllers/personal/account/account.html",
		controller : "accountCtrl"
	} )
	.state( "mynotes",{
		url : "/personal/mynotes",
		templateUrl : "controllers/personal/mynotes/mynotes.html",
		controller : "mynotesCtrl"
	} )
	.state( "order",{
		url : "/personal/order",
		templateUrl : "controllers/personal/order/order.html",
		controller : "orderCtrl"
	} )
	.state( "comment",{
		url : "/personal/comment",
		templateUrl : "controllers/personal/comment/comment.html",
		controller : "commentCtrl"
	} )
	.state( "concrete",{
		url : "/personal/concrete",
		templateUrl : "controllers/personal/concrete/concrete.html",
		controller : "concreteCtrl"
	} )
	
	.state( "concretes",{
		url : "/personal/concrete/concretes",
		templateUrl : "controllers/personal/concrete/concretes/concretes.html",
		controller : "concretesCtrl"
	} )

	

	$urlRouterProvider.otherwise( "/home" );


})

