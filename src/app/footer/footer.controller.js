export default function FooterController(api)
    {
        var vm = this;

        // Data
        vm.social = null;

        // Methods
        vm.init = init;

        // Functions
        init();

        function init()
        {
            api.footer.query({},
                function (response)
                {
                    vm.social = response.data;
                },
                function (error)
                {

                }
            );
        }

    }
