import AbilityController from './ability.controller';
import './ability.scss';
const MODULE_NAME = 'ability';

angular
        .module(MODULE_NAME,[])
        .controller('AbilityController',AbilityController)
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider)
    {
        var abilityState = {
            name: 'ability',
            url: '/ability',
            template: require('./ability.html')
        }

        $stateProvider.state(abilityState);

        $translatePartialLoaderProvider.addPart('ability');

    }
export default MODULE_NAME;