
   export default function routeConfig($stateProvider, $urlRouterProvider, $locationProvider)
    {
        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('home');
        // $stateProvider
        //     .state('app', {
        //         abstract: true,
        //         views   : {
        //             'main@'         : {
        //                 templateUrl: 'app/core/layouts/vertical-navigation.html',
        //                 controller : 'MainController as vm'
        //             },
        //             'toolbar@app'   : {
        //                 template: require('app/toolbar/toolbar.html'),
        //                 controller : 'ToolbarController as vm'
        //             },
        //             'navigation@app': {
        //                 templateUrl: 'app/navigation/layouts/vertical-navigation/navigation.html',
        //                 controller : 'NavigationController as vm'
        //             }
        //         }
        //     });
    }

