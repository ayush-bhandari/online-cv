import ToolbarController from './toolbar.controller';
import toolBar from './toolbar.directive';

const MODULE_NAME = 'toolbar';

    angular
        .module(MODULE_NAME, [])
        .controller('ToolbarController',ToolbarController)
        .directive('toolBar',toolBar)
        .config(config);

    /** @ngInject */
    function config($translatePartialLoaderProvider)
    {
        $translatePartialLoaderProvider.addPart('app/toolbar');
    }
export default MODULE_NAME;