export default function config($translateProvider,$mdThemingProvider)
{
    $mdThemingProvider.theme('default')
        .primaryPalette('brown')
        .accentPalette('green');

    $translateProvider.useLoader('$translatePartialLoader', {
        urlTemplate: '{part}/i18n/{lang}.json'
    });
    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy('sanitize');
}