export default function config($translateProvider,$mdThemingProvider,$httpProgressOpsProvider)
{
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('pink');

    $httpProgressOpsProvider.setOps({
        background: 'yellow',
        startAt : 30,
        autoPauseAt : 90,
        http : true
    });

    $translateProvider.useLoader('$translatePartialLoader', {
        urlTemplate: 'app/i18n/{part}/{lang}.json'
    });
    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy('sanitize');
}