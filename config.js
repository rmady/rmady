var config = {
    // list of supported locales
    locales:['en', 'pt'],

    // locale chosen if the requested locales was not found in the 'locales' array
    defaultLocale: 'en',

    // A custom cookie name which may contain the locale to use
    cookieName: 'lang',

    // location of all the locale json files on disk
    messages: __dirname + '/locales',
    // Set this to true if running in development mode. This will delete cache before every access for localized string
    devMode: false
};

module.exports = config;