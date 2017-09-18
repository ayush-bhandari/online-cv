export default function apiService($resource,$rootScope)
    {
        var vm = this;

        // Data
        var api = {};
        api.baseUrl = 'app/data/';
    
        // Methods
        vm.init = init;

        // Functions
        init();
      
    function init(){
        api.home = $resource(api.baseUrl+'home/home.json', {}, {
               query: {
                  method: 'GET', 
                  headers: {
                    
                  }
            }
        });
        api.ability = $resource(api.baseUrl+'ability/ability.json', {}, {
               query: {
                  method: 'GET', 
                  headers: {
                    
                  }
            }
        });

        api.footer = $resource(api.baseUrl+'footer/footer.json', {}, {
            query: {
              method: 'GET', 
              headers: {
              }
            }
        });
      }

        return api;
    }
