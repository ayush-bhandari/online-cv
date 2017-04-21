export default function toolBar() {
    var directive = {
        template: require('./toolbar.html'),
        restrict: 'EA',
        controller: 'ToolbarController',
        controllerAs: 'vm',
        bindToController: true
    };
    return directive;
}