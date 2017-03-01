angular.module( "lotour.app").controller("questionCtrl",function( $scope,httpServer){

	httpServer.get("Question/GetQuestionCategory",{
		user_id:1
	},function(data){
		console.log(data)
	},function(err){
		console.log(err)
	})
})