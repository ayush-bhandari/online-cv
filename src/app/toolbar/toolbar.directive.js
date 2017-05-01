export default function toolBar() {
    var directive = {
        restrict: 'EA',
        template: require('./toolbar.html'),
        controller: 'ToolbarController',
        controllerAs: 'vm',
        bindToController: true
    };
    return directive;
}