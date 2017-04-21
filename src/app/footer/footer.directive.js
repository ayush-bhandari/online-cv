export default function fooTer() {
    var directive = {
        template: require('./footer.html'),
        restrict: 'EA',
        controller: 'FooterController',
        controllerAs: 'vm',
        bindToController: true
    };
    return directive;
}