import WorksController from './works.controller';
import './works.scss';
const MODULE_NAME = 'works';

angular
        .module(MODULE_NAME,[])
        .controller('WorksController',WorksController)
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider)
    {
        var worksState = {
            name: 'works',
            url: '/works',
            template: require('./works.html')
        }

        $stateProvider.state(worksState);

        $translatePartialLoaderProvider.addPart('works');

    }
export default MODULE_NAME;