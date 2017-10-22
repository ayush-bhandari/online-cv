export default function httpRequestInterceptor($q, $location)
    {
      return {
          'responseError': function(rejection) {
              // do something on error
              if(rejection.status === 404){
                  $location.path('home');                    
              }
              return $q.reject(rejection);
           }
       };
    }
