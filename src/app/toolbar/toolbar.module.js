import ToolbarController from './toolbar.controller';
import toolBar from './toolbar.directive';
import './toolbar.scss';
const MODULE_NAME = 'toolbar';

    angular
        .module(MODULE_NAME, [])
        .config(config)
        .controller('ToolbarController',ToolbarController)
        .directive('toolBar',toolBar);      

    /** @ngInject */
    function config($stateProvider,$translatePartialLoaderProvider)
    {	
        $translatePartialLoaderProvider.addPart('toolbar');
    }
export default MODULE_NAME;