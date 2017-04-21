export default function IndexController($rootScope,fuseTheming,$location,$timeout)
    {
        var vm = this;

        // Data
        vm.themes = fuseTheming.themes;
        
        // Methods
        vm.init = init;

        // Functions
        init();
        function init(){
            setTimeout(console.log.bind(console, "%cSTOP!!! This website is a personal portfolio site of Ayush Bhandari", "background: red; color: yellow; font-size: xx-large"));
            
            
        }

    }