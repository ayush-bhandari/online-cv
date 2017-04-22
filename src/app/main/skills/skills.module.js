import SkillsController from './skills.controller';

const MODULE_NAME = 'skills';

angular
        .module(MODULE_NAME,[])
        .controller('SkillsController',SkillsController)
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider)
    {
        var skillsState = {
            name: 'skills',
            url: '/skills',
            template: require('./skills.html')
        }

        $stateProvider.state(skillsState);

        $translatePartialLoaderProvider.addPart('app/main/skills');

    }
export default MODULE_NAME;