angular.module( "lotour.app").controller("questionCtrl",function( $scope,httpServer,$ionicSlideBoxDelegate){
	$scope.oneTitle={};
	$scope.twoTitle={};
	httpServer.get("Question/GetQuestionCategory",{
		user_id:1
	},function(data){
		$scope.oneTitle=data.data.RetValue;
		$ionicSlideBoxDelegate.update();
		(function twTitle(i){
			if(i<$scope.oneTitle.length){
				$scope.oneId=$scope.oneTitle[i].id;
				httpServer.get("Question/GetQuestionCategory",{
					parent_id:$scope.oneId,
					user_id:1
				},function(data){
					$scope.oneTitle[i].two=data.data.RetValue;
					twTitle(i+1);
				},function(err){
					console.log(err)
				})
			}else{
				$scope.getId(0)
			}
			
		})(0)
	},function(err){
		console.log(err)
	})

	$scope.getId=function(index){
		var subjectList=document.querySelectorAll(".subjectList a");
		id=subjectList[index].getAttribute("data-id");

		for(var j=0;j<subjectList.length;j++){
			subjectList[j].className="";
		}
		subjectList[index].className="on";

		httpServer.get("Question/GetQuestionCategoryList",{
			parent_id:id,
			user_id:1
		},function(data){
			$scope.questionList=data.data.RetValue;
		},function(err){
			console.log(err)
		})

	}
	
})