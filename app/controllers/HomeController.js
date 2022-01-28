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
     * Render page home.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    renderHome = async (req, res) => {
        this.renderPage(res, req, 'home/main', this.getHomeStrings);        
    }

    /**
     * Lang strings for page home.
     * 
     * @param {*} res 
     * @param {*} req 
     */
    getHomeStrings = (req) => {
        return {
            active:  'home', 
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
            talk1: req.t('talk1'),
            talk2: req.t('talk2'),
            talksdesc: req.t('talksdesc'),
            phpdesc: req.t('phpdesc'),
            javascriptdesc: req.t('javascriptdesc'),
            htmldesc: req.t('htmldesc'),
            sqldesc: req.t('sqldesc'),
            trema: req.t('trema'),
            tremadesc: req.t('tremadesc'),
            footertitle: req.t('footertitle'),
            footerdesc: req.t('footerdesc'),
            tremasites: req.t('tremasites'),
            tremadownloads: req.t('tremadownloads'),
            tremalikes: req.t('tremalikes'),
            sourcecode: req.t('sourcecode'),
            donate: req.t('donate'),
        };
    }

    /**
     * Render page portfolio.
     * 
     * @param {*} req 
     * @param {*} res 
     */
     renderPortfolio = async (req, res) => {        
        this.renderPage(res, req, 'portfolio/main', this.getPortfolioStrings);  
    }

    /**
     * Lang strings for page portfolio.
     * 
     * @param {*} res 
     * @param {*} req 
     */
     getPortfolioStrings = (req) => {
        return { 
            active:       'portfolio', 
            title:        req.t('portfolio'),
            bio:          req.t('bio'),   
            welcome:      req.t('welcome'),
            sitelanguage: req.t('sitelanguage'),
            aboutme:      req.t('aboutme'),
            portfolio:    req.t('portfolio'),
            services:     req.t('services'),
            resume:       req.t('resume'),
            contact:      req.t('contact'),
            themetrema:   req.t('themetrema'),
            purplemode:   req.t('purplemode'),
            skills:       req.t('skills'),          
            tremadesc:    req.t('tremadesc'),
            footertitle:  req.t('footertitle'),
            footerdesc:   req.t('footerdesc'),
            roledescription:   req.t('roledescription'),
            skillsdescription: req.t('skillsdescription'),  
        };
    }

    /**
     * Render page services.
     * 
     * @param {*} req 
     * @param {*} res 
     */
     renderServices = async (req, res) => {
        this.renderPage(res, req, 'services/main', this.getServicesStrings);
    }

    /**
     * Lang strings for page services.
     * 
     * @param {*} res 
     * @param {*} req 
     */
     getServicesStrings = (req) => {
        return {             
            active:  'services', 
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
        };
    }

    /**
     * Render page CV.
     * 
     * @param {*} req 
     * @param {*} res 
     */
     renderCV = async (req, res) => {
        this.renderPage(res, req, 'cv/main', this.getCVStrings);
    }

    /**
     * Lang strings for page CV.
     * 
     * @param {*} res 
     * @param {*} req 
     */
     getCVStrings = (req) => {
        return {              
            active:  'cv', 
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
        };
    }

    /**
     * Render CV page.
     * 
     * @param {*} req 
     * @param {*} res 
     */
     renderContact = async (req, res) => {
        this.renderPage(res, req, 'contact/main', this.getContactStrings);        
    }

    /**
     * Return strings of page Contact.
     * @param {*} req 
     * @returns 
     */
    getContactStrings = (req) => {
        return {
            active:       'contact', 
            title:        req.t('contact'),
            bio:          req.t('bio'),   
            welcome:      req.t('welcome'),
            sitelanguage: req.t('sitelanguage'),
            aboutme:      req.t('aboutme'),
            portfolio:    req.t('portfolio'),
            services:     req.t('services'),
            resume:       req.t('resume'),
            contact:      req.t('contact'),
            themetrema:   req.t('themetrema'),
            purplemode:   req.t('purplemode'),
            skills:       req.t('skills'),            
            tremadesc:    req.t('tremadesc'),
            footertitle:  req.t('footertitle'),
            footerdesc:   req.t('footerdesc'),
            roledescription:   req.t('roledescription'),
            skillsdescription: req.t('skillsdescription'),
        };
    }
    /**
     * Render page with strings.
     * 
     * @param {*} res 
     * @param {*} req 
     */
     renderPage = async (res, req, page, strFunction) => {          
        try {    
            res.render(page, strFunction(req));
        } catch (e) {
            console.log(e);
            res.status(500).send(e.message);
        }
    }
 }

 module.exports = new HomeController();