export default function AbilityController(api,$scope)
    {
        var vm = this;

        // Data
        $scope.$parent.seo = { 
            pageTitle : 'Ability', 
            pageDescripton: 'Welcome to ability page of Ayush Bhandari portfolio website based on angularjs.' 
        };
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