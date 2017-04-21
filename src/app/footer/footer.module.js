import FooterController from './footer.controller';
import fooTer from './footer.directive';

const MODULE_NAME = 'footer';

    angular
        .module(MODULE_NAME, [])
        .controller('FooterController',FooterController)
        .directive('fooTer',fooTer)
        .config(config);

    /** @ngInject */
    function config($translatePartialLoaderProvider)
    {
        $translatePartialLoaderProvider.addPart('app/footer');
    }
export default MODULE_NAME;