export default function ShowcaseController(api,$scope)
    {
        var vm = this;

        // Data
        vm.data = {};
        $scope.$parent.seo = { 
            pageTitle : 'Showcase', 
            pageDescripton: 'Welcome to showcase page of Ayush Bhandari portfolio website based on angularjs.' 
        };
        // Methods
        vm.init = init;

        init();
        
        function init(){

        	api.showcase.query({}, (response) => {
                    vm.data = response.showcase;
                },(err) => {   

                }
            );

        }

    }