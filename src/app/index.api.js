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
        api.showcase = $resource(api.baseUrl+'showcase/showcase.json', {}, {
               query: {
                  method: 'GET', 
                  headers: {
                    
                  }
            }
        });
        api.contact = $resource(api.baseUrl+'contact/contact.json', {}, {
               query: {
                  method: 'GET', 
                  headers: {
                    
                  }
            }
        });
        
      }

        return api;
    }
