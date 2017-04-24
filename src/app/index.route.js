
   export default function routeConfig($stateProvider, $urlRouterProvider, $locationProvider)
    {
        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('home');
       
    }

