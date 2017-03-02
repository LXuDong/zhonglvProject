
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
	.state('kecheng',{
      url: '/kecheng',
      templateUrl: 'controllers/kecheng/kecheng.html',
      controller: 'kechengCtrl'
    })
    .state('kecheng.kc1',{
    	url: 'kecheng/kc1',
    	templateUrl: 'controllers/kecheng/kecheng/kc1.html',
    	controller: 'kechengCtrl'
    })
    .state('kecheng.kc2',{
    	url: 'kecheng/kc2',
    	templateUrl: 'controllers/kecheng/kecheng/kc2.html',
    	controller: 'kechengCtrl'
    })
    .state('kecheng.kc3',{
    	url: 'kecheng/kc3',
    	templateUrl: 'controllers/kecheng/kecheng/kc3.html',
    	controller: 'kechengCtrl'
    })
    .state('kecheng.kc4',{
    	url: 'kecheng/kc4',
    	templateUrl: 'controllers/kecheng/kecheng/kc4.html',
    	controller: 'kechengCtrl'
    })
    .state('kc_detail',{
        url: '/kc_detail',
        templateUrl: 'controllers/kc_detail/kc_detail.html',
        controller: 'kechengCtrl'
    })

	

	$urlRouterProvider.otherwise( "/home" );


})

