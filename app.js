angular.module('storeAngular', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'catalog', 'user', 'cart']);

angular.module('storeAngular').config(function($stateProvider, $urlRouterProvider) {

    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');

});

angular.module('storeAngular').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

    $rootScope.$on('$stateChangeStart', function(e, curr, prev) { 
        if (curr.$$state && curr.$$state.resolve) {
            // Show a loading message until promises are not resolved
            $root.loadingView = true;
        }
    });
    $rootScope.$on('$stateChangeSuccess', function(e, curr, prev) { 
        // Hide loading message
        $root.loadingView = false;
    });
    $rootScope.$on('$stateChangeError', function(event, cur, prev, rejection) {
        // you could look at rejection and do something depending on the status code.
        $state.go(prev);
    });

});
