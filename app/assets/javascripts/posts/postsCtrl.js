angular.module('rrvApp')
.controller('PostsCtrl', ['$scope', '$stateParams', 'posts',
	function($scope, $stateParams, posts){
		$scope.posts.push({
			title: $scope.title,
			link: $scope.link,
			upvotes: 0,
			comments: [
				{author: 'Raghu', body: 'Cool post!', upvotes: 0},
				{author: 'Varma', body: 'Great idea but everything is wrong!', upvotes: 0}
			]
		});
		$scope.post = posts.posts[$stateParams.id];
		$scope.addComment = function(){
			if($scope.body === '') { return; }
			$scope.post.comments.push({
				body: $scope.body,
				author: 'user',
				upvotes: 0
			});
			$scope.body = '';
		};
	}
]);