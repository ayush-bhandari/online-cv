export default function ShowcaseController(api)
    {
        var vm = this;

        // Data
        vm.data = {};

        // Methods
        vm.init = init;

        init();
        
        function init(){

        	api.showcase.query({}, (response) => {
                    vm.data = response.showcase;
                    console.log(vm.data);
                },(err) => {   

                }
            );

        }

    }