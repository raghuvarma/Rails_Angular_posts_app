angular.module('rrvApp', ['ui.router', 'templates'])
.config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('home');
		$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'home/_home.html',
			controller: 'MainCtrl'
		})
		.state('posts', {
			url: '/posts/{id}',
			templateUrl: 'posts/_posts.html',
			controller: 'PostsCtrl'
		});
	}
])
  
// .factory('posts', [ function(){
//   var o = {
//     posts: []
//   };
//   return o;
// }])
// .controller('MainCtrl', ['$scope', 'posts',
// 	function($scope, posts){
// 		$scope.appHeading = 'Welcome to RRV Application';
// 		$scope.posts = posts.posts;
// 		// $scope.posts = [
// 		// 	{title: 'post 1', upvotes: 5},
// 		// 	{title: 'post 2', upvotes: 2},
// 		// 	{title: 'post 3', upvotes: 15},
// 		// 	{title: 'post 4', upvotes: 9},
// 		// 	{title: 'post 5', upvotes: 4}
// 		// ];
// 		$scope.addPost = function(){
// 			if(!$scope.title || $scope.title === '') { return; }
// 			$scope.posts.push({
// 				title: $scope.title,
// 				link: $scope.link,
// 				upvotes: 0
// 			});
// 			$scope.title = '';
// 			$scope.link = '';
// 		};
// 		$scope.incrementUpvotes = function(post) {
// 			post.upvotes += 1;
// 		};
// 	}
// ])
// .controller('PostsCtrl', ['$scope', '$stateParams', 'posts',
// 	function($scope, $stateParams, posts){
// 		$scope.posts.push({
// 			title: $scope.title,
// 			link: $scope.link,
// 			upvotes: 0,
// 			comments: [
// 				{author: 'Raghu', body: 'Cool post!', upvotes: 0},
// 				{author: 'Varma', body: 'Great idea but everything is wrong!', upvotes: 0}
// 			]
// 		});
// 		$scope.post = posts.posts[$stateParams.id];
// 		$scope.addComment = function(){
// 			if($scope.body === '') { return; }
// 			$scope.post.comments.push({
// 				body: $scope.body,
// 				author: 'user',
// 				upvotes: 0
// 			});
// 			$scope.body = '';
// 		};
// 	}
// ]);