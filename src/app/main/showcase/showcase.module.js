import ShowcaseController from './showcase.controller';
import './showcase.scss';
const MODULE_NAME = 'showcase';

angular
        .module(MODULE_NAME,[])
        .controller('ShowcaseController',ShowcaseController)
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider)
    {
        var showcaseState = {
            name: 'showcase',
            url: '/showcase',
            template: require('./showcase.html'),
            controller: ShowcaseController,
            controllerAs: 'vm'
        }

        $stateProvider.state(showcaseState);

        $translatePartialLoaderProvider.addPart('showcase');

    }
export default MODULE_NAME;