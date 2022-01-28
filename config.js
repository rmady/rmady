var config = {
    // order and from where user language should be detected
    order: [/*'path', 'session', */ 'querystring', 'cookie', 'header'],
  
    // keys or params to lookup language from
    lookupQuerystring: 'lng',
    lookupCookie:      'i18next',
    lookupHeader:      'accept-language',
    lookupHeaderRegex: /(([a-z]{2})-?([A-Z]{2})?)\s*;?\s*(q=([0-9.]+))?/gi,
    lookupSession:     'lng',
    lookupPath:        'lng',
    lookupFromPathIndex: 0,
  
    // cache user language
    caches: false, // ['cookie']
  
    ignoreCase: true, // ignore case of detected language
  
    // optional expire and domain for set cookie
    cookieExpirationDate: new Date(),
    cookieDomain: 'rmady.com.br',
    cookiePath: '/public/cookies',
    cookieSecure: true, // if need secure cookie
    cookieSameSite: 'strict' // 'strict', 'lax' or 'none'
};

module.exports = config;