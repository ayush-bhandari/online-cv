export default function toolBar() {
    var directive = {
        restrict: 'E',
        template: require('./toolbar.html'),
        controller: 'ToolbarController',
        controllerAs: 'vm',
        bindToController: true
    };
    return directive;
}