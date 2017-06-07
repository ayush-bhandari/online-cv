import FooterController from './footer.controller';
import fooTer from './footer.directive';
import './footer.scss';

const MODULE_NAME = 'footer';

    angular
        .module(MODULE_NAME, ['pascalprecht.translate'])
        .controller('FooterController',FooterController)
        .directive('fooTer',fooTer)
        .config(config);

    /** @ngInject */
    function config($translatePartialLoaderProvider)
    {
        $translatePartialLoaderProvider.addPart('footer');
    }
export default MODULE_NAME;