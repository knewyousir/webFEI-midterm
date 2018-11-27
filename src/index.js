import angular from 'angular';
import ngRoute from 'angular-route';
import ngAnimate from 'angular-animate';

const app = angular.module('app', ['ngRoute', 'ngAnimate']);

// // This actually worked
// app.component('recipeList', {
//     template: `<div class="wrap"><h1>{{ name }} component</h1></div>`,
//     controller: function RecipeListController($scope) {
//       $scope.name = 'Recipe List'
//     }
//   });
// //

app.config(function config($locationProvider, $routeProvider){
    $routeProvider.when('/', {
      template: '<user-list><</user-list>'
    })
    .when('/api/users', {
      template: '<user-list><</user-list>'
    })
    .when('/api/users/:id', {
      // Delete users
    })
    $locationProvider.html5Mode(true);
})
  
app.component('userList', {
    templateUrl: '/templates/users.html',
    controller: function UserListController($scope, $http) {
        $http.get('api/users').then( res => {
            $scope.users = res.data;
        })
        $scope.deleteUser = (index, userId) => {
            $http.delete('api/users/' + userId)
            .then( () => $scope.users.splice(index, 1))
            };
        $scope.addUser = function(data){
            $http.post('api/users', data)
            .then( () => {
                $scope.users.push(res.data)
                $scope.user = {}
                })
            }
          }
      });
