import AbilityController from './ability.controller';
import './ability.scss';
const MODULE_NAME = 'ability';

angular
        .module(MODULE_NAME,[])
        .config(config)
        .controller('AbilityController',AbilityController);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider)
    {
        var abilityState = {
            name: 'ability',
            url: '/ability',
            template: require('./ability.html'),
            controller: AbilityController,
            controllerAs: 'vm'
        }

        $stateProvider.state(abilityState);

        $translatePartialLoaderProvider.addPart('ability');

    }
export default MODULE_NAME;