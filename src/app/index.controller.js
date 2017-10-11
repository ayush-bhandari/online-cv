export default function IndexController($rootScope,$location,$timeout)
    {
        var vm = this;

        // Data
        
        // Methods
        vm.init = init;

        // Functions
        init();
        function init(){
            setTimeout(console.log.bind(console, "%cSTOP!!! This is a browser feature intended for developers.", "color: red; font-size: x-large"));
            setTimeout(console.log.bind(console, "%c Copyright © Ayush Bhandari, 2017. All Rights Reserved.", "background: red; color: yellow; font-size: x-large"));
            setTimeout(console.log.bind(console, "%c Any tampering with this site or its content will be taken as a serious threat.", "background: red; color: yellow; font-size: x-large"));
            
            
        }

    }