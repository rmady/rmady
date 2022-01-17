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
        res.render("home", { 
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
            cite: req.t('cite'),
            talks: req.t('talks'),
            talksdesc: req.t('talksdesc'),
            phpdesc: req.t('phpdesc'),
            javascriptdesc: req.t('javascriptdesc'),
            htmldesc: req.t('htmldesc'),
            sqldesc: req.t('sqldesc'),
        });
    }
 }

 module.exports = new HomeController();