export default function ContactController(api,$mdToast,$scope)
    {
        var vm = this;

        // Data
        vm.data = {};
        vm.form ={};

        // Methods
        vm.init = init;
        vm.sendForm = sendForm;

        init();
        
        function init(){

        	api.contact.query({}, (response) => {
                    vm.data = response.social;
                },(err) => {   

                }
            );

        }

        function sendForm(){
            // console.log(vm.form);
            $mdToast.show(
              $mdToast.simple()
                .textContent('Your message has been sent sucessfully.')
                .position('bottom right')
                .hideDelay(4000)
            );
            vm.form = {};
            $scope.getInTouchForm.$setUntouched();
        }
    }