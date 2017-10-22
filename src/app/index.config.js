export default function config($httpProvider,$translateProvider,$mdThemingProvider,$httpProgressOpsProvider)
{
    $httpProvider.interceptors.push('httpRequestInterceptor');
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