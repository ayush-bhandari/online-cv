export default function config($translateProvider,$mdThemingProvider,$httpProgressOpsProvider)
{
    $mdThemingProvider.theme('default')
        .primaryPalette('brown')
        .accentPalette('green');

    $httpProgressOpsProvider.setOps({
        background: 'yellow',
        startAt : 30,
        autoPauseAt : 90,
        http : true
    });

    $translateProvider.useLoader('$translatePartialLoader', {
        urlTemplate: '/{part}/i18n/{lang}.json'
    });
    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy('sanitize');
}