/**
 * RMady home page Controller.
 * 
 * @author  Rodrigo Mady @rmady
 * @project rmady.com
 */
 
 /**
  * Class Home Controller.
  */
 class HomeController {
    /**
     * Render home page.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    renderHome = async (req, res) => {
        const i18next = require('i18next');
        const lang    = req.query.lang;
        try {
            if (lang) {
                i18next
                .changeLanguage(lang)
                .then( t => {
                    req.t = t;
                    this.renderHomeStrings(res, req);
                });
            } else {
                this.renderHomeStrings(res, req);
            }          
            
        } catch (e) {
            console.log(e);
            res.status(500).send(e.message);
        }
    }

    /**
     * Lang strings for page home.
     * 
     * @param {*} res 
     * @param {*} req 
     */
    renderHomeStrings= async (res, req) => {
        res.render("home/main", { 
            title:   req.t('home'),
            bio:     req.t('bio'),   
            welcome: req.t('welcome'),
            sitelanguage: req.t('sitelanguage'),
            aboutme:    req.t('aboutme'),
            portfolio:  req.t('portfolio'),
            services:   req.t('services'),
            resume:     req.t('resume'),
            contact:    req.t('contact'),
            themetrema: req.t('themetrema'),
            purplemode: req.t('purplemode'),
            mainrole:   req.t('mainrole'),
            others:     req.t('others'),
            roledescription: req.t('roledescription'),
            skills: req.t('skills'),
            skillsdescription: req.t('skillsdescription'),
            jobs: req.t('jobs'),
            whatidid: req.t('whatidid'),
            whatididdesc: req.t('whatididdesc'),
            ownbussiness: req.t('ownbussiness'),
            ownbussinesslink: req.t('ownbussinesslink'),
            cite: req.t('cite'),
            talks: req.t('talks'),
            talksdesc: req.t('talksdesc'),
            phpdesc: req.t('phpdesc'),
            javascriptdesc: req.t('javascriptdesc'),
            htmldesc: req.t('htmldesc'),
            sqldesc: req.t('sqldesc'),
            trema: req.t('trema'),
            tremadesc: req.t('tremadesc'),
            footertitle: req.t('footertitle'),
            footerdesc: req.t('footerdesc'),
        });
    }

    /**
     * Render CV page.
     * 
     * @param {*} req 
     * @param {*} res 
     */
     renderPortfolio = async (req, res) => {
        const i18next = require('i18next');
        const lang    = req.query.lang;
        try {
            if (lang) {
                i18next
                .changeLanguage(lang)
                .then( t => {
                    req.t = t;
                    this.renderPortfolioStrings(res, req);
                });
            } else {
                this.renderPortfolioStrings(res, req);
            }          
            
        } catch (e) {
            console.log(e);
            res.status(500).send(e.message);
        }
    }

    /**
     * Lang strings for page CV.
     * 
     * @param {*} res 
     * @param {*} req 
     */
     renderPortfolioStrings = async (res, req) => {
        res.render("portfolio/main", { 
            title:   req.t('portfolio'),
            bio:     req.t('bio'),   
            welcome: req.t('welcome'),
            sitelanguage: req.t('sitelanguage'),
            aboutme:    req.t('aboutme'),
            portfolio:  req.t('portfolio'),
            services:   req.t('services'),
            resume:     req.t('resume'),
            contact:    req.t('contact'),
            themetrema: req.t('themetrema'),
            purplemode: req.t('purplemode'),
            roledescription: req.t('roledescription'),
            skills: req.t('skills'),
            skillsdescription: req.t('skillsdescription'),
            
            tremadesc: req.t('tremadesc'),
            footertitle: req.t('footertitle'),
            footerdesc: req.t('footerdesc'),
        });
    }

    /**
     * Render CV page.
     * 
     * @param {*} req 
     * @param {*} res 
     */
     renderServices = async (req, res) => {
        const i18next = require('i18next');
        const lang    = req.query.lang;
        try {
            if (lang) {
                i18next
                .changeLanguage(lang)
                .then( t => {
                    req.t = t;
                    this.renderServicesStrings(res, req);
                });
            } else {
                this.renderServicesStrings(res, req);
            }          
            
        } catch (e) {
            console.log(e);
            res.status(500).send(e.message);
        }
    }

    /**
     * Lang strings for page CV.
     * 
     * @param {*} res 
     * @param {*} req 
     */
     renderServicesStrings = async (res, req) => {
        res.render("services/main", { 
            title:   req.t('services'),
            bio:     req.t('bio'),   
            welcome: req.t('welcome'),
            sitelanguage: req.t('sitelanguage'),
            aboutme:    req.t('aboutme'),
            portfolio:  req.t('portfolio'),
            services:   req.t('services'),
            resume:     req.t('resume'),
            contact:    req.t('contact'),
            themetrema: req.t('themetrema'),
            purplemode: req.t('purplemode'),
            roledescription: req.t('roledescription'),
            skills: req.t('skills'),
            skillsdescription: req.t('skillsdescription'),
            
            tremadesc: req.t('tremadesc'),
            footertitle: req.t('footertitle'),
            footerdesc: req.t('footerdesc'),
        });
    }

    /**
     * Render CV page.
     * 
     * @param {*} req 
     * @param {*} res 
     */
     renderCV = async (req, res) => {
        const i18next = require('i18next');
        const lang    = req.query.lang;
        try {
            if (lang) {
                i18next
                .changeLanguage(lang)
                .then( t => {
                    req.t = t;
                    this.renderCVStrings(res, req);
                });
            } else {
                this.renderCVStrings(res, req);
            }          
            
        } catch (e) {
            console.log(e);
            res.status(500).send(e.message);
        }
    }

    /**
     * Lang strings for page CV.
     * 
     * @param {*} res 
     * @param {*} req 
     */
     renderCVStrings = async (res, req) => {
        res.render("cv/main", { 
            title:   req.t('cv'),
            bio:     req.t('bio'),   
            welcome: req.t('welcome'),
            sitelanguage: req.t('sitelanguage'),
            aboutme:    req.t('aboutme'),
            portfolio:  req.t('portfolio'),
            services:   req.t('services'),
            resume:     req.t('resume'),
            contact:    req.t('contact'),
            themetrema: req.t('themetrema'),
            purplemode: req.t('purplemode'),
            roledescription: req.t('roledescription'),
            skills: req.t('skills'),
            skillsdescription: req.t('skillsdescription'),
            
            tremadesc: req.t('tremadesc'),
            footertitle: req.t('footertitle'),
            footerdesc: req.t('footerdesc'),
        });
    }

    /**
     * Render CV page.
     * 
     * @param {*} req 
     * @param {*} res 
     */
     renderContact = async (req, res) => {
        const i18next = require('i18next');
        const lang    = req.query.lang;
        try {
            if (lang) {
                i18next
                .changeLanguage(lang)
                .then( t => {
                    req.t = t;
                    this.renderContactStrings(res, req);
                });
            } else {
                this.renderContactStrings(res, req);
            }          
            
        } catch (e) {
            console.log(e);
            res.status(500).send(e.message);
        }
    }

    /**
     * Lang strings for page CV.
     * 
     * @param {*} res 
     * @param {*} req 
     */
     renderContactStrings = async (res, req) => {
        res.render("contact/main", { 
            title:   req.t('contact'),
            bio:     req.t('bio'),   
            welcome: req.t('welcome'),
            sitelanguage: req.t('sitelanguage'),
            aboutme:    req.t('aboutme'),
            portfolio:  req.t('portfolio'),
            services:   req.t('services'),
            resume:     req.t('resume'),
            contact:    req.t('contact'),
            themetrema: req.t('themetrema'),
            purplemode: req.t('purplemode'),
            roledescription: req.t('roledescription'),
            skills: req.t('skills'),
            skillsdescription: req.t('skillsdescription'),
            
            tremadesc: req.t('tremadesc'),
            footertitle: req.t('footertitle'),
            footerdesc: req.t('footerdesc'),
        });
    }
 }

 module.exports = new HomeController();