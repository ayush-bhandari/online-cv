export default function AbilityController(api)
    {
        var vm = this;

        // Data
        vm.data = {};

        // Methods
        vm.init = init;

        init();
        
        function init(){

        	api.ability.query({}, (response) => {
                    vm.data = response.ability;
                },(err) => {   

                }
            );

        }

    }