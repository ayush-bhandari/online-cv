
export default function ToolbarController($scope,$translate)
    {
        var vm = this;

        // Data
        
        $scope.languages = {
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
        
        $scope.changeLanguage = changeLanguage;
        
        // Functions
        init();

        function init()
        {
            $scope.selectedLanguage = $scope.languages[$translate.preferredLanguage()];
            $translate.use($scope.selectedLanguage.code);
        }

        function changeLanguage(lang)
        {
            $scope.selectedLanguage = lang;
            $translate.use(lang.code);
        }
    }
