angular.module('storeAngular').factory('ApiService',['$http', function($http) {

	var ApiService = {
        var paginationLimit = 10;
        getItems: function(limit) {
        	if (typeof limit === "number") {
        		paginationLimit = limit;
        	}
        	var url = '/api/items?limit=' + paginationLimit;
        	var promise = $http({ method: 'GET', url: url})
        	    .success(function(data, status, headers, config) {
                    return data;
        	    });
        	return promise;
        },
        getCart: function() {
        	var url = '/api/cart';
        	var promise = $http({ method: 'GET', url:url})
        	    .success(function(data, status, headers, config) {
        	    	return data;
        	    });
        	return promise;
        },
        getUser: function() {
        	var url = '/api/user';
        	var promise = $http({ method: 'GET', url:url})
        	    .success(function(data, status, headers, config) {
        	    	return data;
        	    });
        	return promise;
        },
        updateUser: function(user, cb) {
        	var url = '/api/user';
        	$http({ method: 'POST', url:url})
        	    .success(function(data, status, headers, config) {
                    return cb(null, data);
        	    })
        	    .error(function(data, status, headers, config) {
        	    	return cb(data, null);
        	    });
        }

	};

	return ApiService;
}]);