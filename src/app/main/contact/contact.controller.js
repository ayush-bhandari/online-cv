export default function ContactController(api)
    {
        var vm = this;

        // Data
        vm.data = {};

        // Methods
        vm.init = init;

        init();
        
        function init(){

        	api.contact.query({}, (response) => {
                    vm.data = response.social;
                },(err) => {   

                }
            );

        }
    }