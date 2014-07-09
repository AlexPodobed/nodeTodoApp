angular.module('todoController', [])

.controller('mainController', function($scope, $http, Todos) {
    $scope.formData = {};

    // when landing on the page, get all todos and show them
    Todos.get()
        .success(function(data) {
            $scope.todos = data;
        })
    // when submitting the add form, send the text to the node API
    $scope.createTodo = function() {
        if (!$.isEmptyObject($scope.formData)) {
            Todos.create($scope.formData)
                .success(function(data) {
                $scope.formData = {};
                    $scope.todos = data;
                });
        }
    };

    // delete a todo after checking it
    $scope.deleteTodo = function(id) {
        Todos.delete(id)
            .success(function(data) {
                $scope.todos = data;
            })
    };

});