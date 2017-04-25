export default function fooTer() {
    var directive = {
        restrict: 'EA',
        template: require('./footer.html'),
        controller: 'FooterController',
        controllerAs: 'vm',
        bindToController: true
    };
    return directive;
}