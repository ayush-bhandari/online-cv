(function ()
{
    'use strict';

    angular
        .module('app.toolbar')
        .controller('ToolbarController', ToolbarController);

    /** @ngInject */
    function ToolbarController($location,$rootScope, $q, $state, $timeout, $mdSidenav, $translate, $mdToast, msNavigationService)
    {
        var vm = this;

        // Data
        vm.userName = localStorage.user_name;
        $rootScope.global = {
            search: ''
        };

        vm.bodyEl = angular.element('body');
        vm.userStatusOptions = [
            {
                'title': 'Online',
                'icon' : 'icon-checkbox-marked-circle',
                'color': '#4CAF50'
            }
        ];
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
        vm.toggleSidenav = toggleSidenav;
        vm.logout = logout;
        vm.changeLanguage = changeLanguage;
        vm.setUserStatus = setUserStatus;
        vm.toggleHorizontalMobileMenu = toggleHorizontalMobileMenu;
        vm.toggleMsNavigationFolded = toggleMsNavigationFolded;

        // Functions
        init();

        function init()
        {
            vm.userStatus = vm.userStatusOptions[0];
            vm.selectedLanguage = vm.languages[$translate.preferredLanguage()];
             $translate.use(vm.selectedLanguage.code);
        }


        function toggleSidenav(sidenavId)
        {
            $mdSidenav(sidenavId).toggle();
        }

        function setUserStatus(status)
        {
            vm.userStatus = status;
        }

        function logout()
        {
            localStorage.mis_token = '';
            $rootScope.$emit('tokenChange',{});
            localStorage.removeItem("user_name");
            localStorage.removeItem("mis_token");
            $location.path('login');
        }

        function changeLanguage(lang)
        {
            vm.selectedLanguage = lang;
            $translate.use(lang.code);
        }

        function toggleHorizontalMobileMenu()
        {
            vm.bodyEl.toggleClass('ms-navigation-horizontal-mobile-menu-active');
        }

        function toggleMsNavigationFolded()
        {
            msNavigationService.toggleFolded();
        }
    }

})();