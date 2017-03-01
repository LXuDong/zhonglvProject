angular.module( "lotour.app").controller("questionCtrl",function( $scope,$http,httpServer ){

	httpServer.get("Question/GetQuestionCategory",{
		user_id:2
	},function(data){
		console.log(data)
	},function(err){
		console.log(err)
	})
})