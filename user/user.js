angular.module('user', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('user').config(function($stateProvider) {
    
    $stateProvider.state('account', {
    	templateUrl: '/partials/user/index',
    	controller: 'UserController',
    	resolve: {
    		user: function(ApiService) {
    			return ApiService.getUser();
    		}
    	}
    });
    /* Add New States Above */
});

angular.module('user').controller('UserController', 
	['user', function(user) {
        $scope.user = user;
        $scope.errorMessage = {
        	hasError : false,
        	message: ''
        };
        //Functions visible to view.
        $scope.updateUser = function(user) {
        	ApiService.updateUser(user, function(err, results) {
        		if (err) {
        			setError(err.error);
        		}else if (results) {
        			$scope.updateSuccess = true;
        		}
                
        	});
        };
        $scope.removeError() {
        	$scope.errorMessage.hasError = false;
        	$scope.message = '';
        };

        //Private functions
        function setError(message) {
        	$scope.errorMessage.hasError = true;
        	$scope.message = message;
        };
	}]);