export default function config($translateProvider,$mdThemingProvider)
{
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('pink');

    $translateProvider.useLoader('$translatePartialLoader', {
        urlTemplate: '{part}/i18n/{lang}.json'
    });
    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy('sanitize');
}