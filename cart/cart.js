angular.module('cart', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('cart').config(function($stateProvider) {
    $stateProvider.state('cart', {
    	templateUrl: '/partials/cart/index',
    	controller: 'CartController',
    	resolve: {
    		items: function(ApiService) {
    			return ApiService.getCart();
    		}
    	  /*shipping: function(ApiService) {
           *    return ApiService.getShipping();
    	  }*/
    	}
    });
    /* Add New States Above */

});

angular.module('cart').controller('CartController',
	['$scope','items', function($scope, items){
        $scope.items = items;
    
	}]);

