import HomeController from './home.controller';

const MODULE_NAME = 'home';

angular
        .module(MODULE_NAME,[])
        .controller('HomeController',HomeController)
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider)
    {
        var homeState = {
            name: 'home',
            url: '/home',
            template: require('./home.html')
        }

        $stateProvider.state(homeState);

        $translatePartialLoaderProvider.addPart('home');

    }
export default MODULE_NAME;