var langoptions = {
    // order and from where user language should be detected
    order: ['querystring', 'cookie', 'header'],
    // keys or params to lookup language from
    lookupQuerystring: 'lang',
    lookupCookie:      'i18next',
    lookupHeader:      'accept-language',
    lookupHeaderRegex: /(([a-z]{2})-?([A-Z]{2})?)\s*;?\s*(q=([0-9.]+))?/gi,
    lookupSession:     'lang',
    lookupPath:        'lang',
    lookupFromPathIndex: 0,
  
    // cache user language
    caches: ['cookie'], // 
  
    ignoreCase: true, // ignore case of detected language
};

module.exports = langoptions;