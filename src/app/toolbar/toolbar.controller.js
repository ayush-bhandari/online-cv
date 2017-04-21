
export default function ToolbarController($location,$rootScope, $q, $state, $timeout, $mdSidenav, $translate, $mdToast)
    {
        var vm = this;

        // Data
        
        vm.languages = {
            en: {
                'title'      : 'English',
                'translation': 'TOOLBAR.ENGLISH',
                'code'       : 'en',
                'flag'       : 'us'
            },
            np: {
                'title'      : 'Nepalese',
                'translation': 'TOOLBAR.NEPALESE',
                'code'       : 'np',
                'flag'       : 'np'
            }
        };

        // Methods
        
        vm.changeLanguage = changeLanguage;
        
        // Functions
        init();

        function init()
        {
            vm.selectedLanguage = vm.languages[$translate.preferredLanguage()];
            $translate.use(vm.selectedLanguage.code);
        }

        function changeLanguage(lang)
        {
            vm.selectedLanguage = lang;
            $translate.use(lang.code);
        }
    }
