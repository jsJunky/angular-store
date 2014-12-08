angular.module('catalog', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('catalog').config(function($stateProvider) {

    /* Add New States Above */
    $stateProvider.state('catalog', {
    	templateUrl: '/partials/catalog/index',
    	controller: 'CatalogController',
    	resolve: {
    		items: function(ApiService) {
    			return ApiService.getItems();
    		}
    	}
    });

});

app.module('catalog').controller('CatalogController', 
	['items', function(items) {
        $scope.items = items;
	}]);