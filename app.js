angular.module('rrvApp', [])
.controller('MainCtrl', ['$scope',
function($scope){
  $scope.appHeading = 'Welcome to RRV Application';
  $scope.posts = [
  {title: 'post 1', upvotes: 5},
  {title: 'post 2', upvotes: 2},
  {title: 'post 3', upvotes: 15},
  {title: 'post 4', upvotes: 9},
  {title: 'post 5', upvotes: 4}
];
}]);