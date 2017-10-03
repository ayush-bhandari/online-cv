import ContactController from './contact.controller';
import './contact.scss';
const MODULE_NAME = 'contact';

angular
        .module(MODULE_NAME,[])
        .controller('ContactController',ContactController)
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider)
    {
        var contactState = {
            name: 'contact',
            url: '/contact',
            template: require('./contact.html'),
            controller: ContactController,
            controllerAs: 'vm'
        }

        $stateProvider.state(contactState);

        $translatePartialLoaderProvider.addPart('contact');

    }
export default MODULE_NAME;