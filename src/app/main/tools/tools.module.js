import ToolsController from './tools.controller';

const MODULE_NAME = 'tools';

angular
        .module(MODULE_NAME,[])
        .controller('ToolsController',ToolsController)
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider)
    {
        var toolsState = {
            name: 'tools',
            url: '/tools',
            template: require('./tools.html')
        }

        $stateProvider.state(toolsState);

        $translatePartialLoaderProvider.addPart('tools');

    }
export default MODULE_NAME;