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
     * Render page Home.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    renderHome = async (req, res) => {
        this.renderPage(res, req, 'home/main', this.getHomeStrings);        
    }

    /**
     * Lang strings for page Home.
     * 
     * @param {*} res 
     * @param {*} req 
     */
    getHomeStrings = (req) => {
        const strings = this.getStrings(req);
        return {
            ...strings,
            active: 'home', 
            title:  req.t('home')
        };
    }

    /**
    * Render page Skills.
    * 
    * @param {*} req 
    * @param {*} res 
    */
    renderSkills = async (req, res) => {
        this.renderPage(res, req, 'skills/main', this.getSkillsStrings);        
    }
    /**
     * Lang strings for page Skills.
     * 
     * @param {*} res 
     * @param {*} req 
     */
    getSkillsStrings = (req) => {
        const strings = this.getStrings(req);
        return {
            ...strings,
            active: 'skills', 
            title:  req.t('skills')
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
        const strings = this.getStrings(req);
        return {
            ...strings,
            active: 'portfolio', 
            title:  req.t('portfolio')
        };
    }

     /**
    * Render page Talks.
    * 
    * @param {*} req 
    * @param {*} res 
    */
    renderTalks = async (req, res) => {
        this.renderPage(res, req, 'talks/main', this.getTalksStrings);        
    }

    /**
     * Lang strings for page Talks.
     * 
     * @param {*} res 
     * @param {*} req 
     */
    getTalksStrings = (req) => {
        const strings = this.getStrings(req);
        return {
            ...strings,
            active: 'talks', 
            title:  req.t('talks')
        };        
    }

    
    /**
    * Render page Trema.
    * 
    * @param {*} req 
    * @param {*} res 
    */
     renderTrema = async (req, res) => {
        this.renderPage(res, req, 'trema/main', this.getTremaStrings);        
    }

    /**
     * Lang strings for page Trema.
     * 
     * @param {*} res 
     * @param {*} req 
     */
    getTremaStrings = (req) => {
        const strings = this.getStrings(req);
        return {
            ...strings,
            active: 'trema', 
            title:  req.t('trema')
        };  
    }

    /**
     * Render Contact page.
     * 
     * @param {*} req 
     * @param {*} res 
     */
     renderContact = async (req, res) => {
        this.renderPage(res, req, 'contact/main', this.getContactStrings);        
    }

    /**
     * Return strings of page Contact.
     * 
     * @param {*} req 
     * @returns 
     */
    getContactStrings = (req) => {
        const strings = getStrings(req);
        return {
            ...strings,
            active: 'contact', 
            title:  req.t('contact')
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

    /**
     * All comom strings.
     * 
     * @param {*} req 
     * @returns 
     */
    getStrings = (req) => {
        return {
            aboutme: req.t('aboutme'),
            bio:     req.t('bio'),   
            cite:    req.t('cite'),
            contact: req.t('contact'),
            donate:  req.t('donate'),
            english: req.t('english'),
            footerdesc: req.t('footerdesc'),
            footertitle: req.t('footertitle'),
            htmldesc: req.t('htmldesc'),
            javascriptdesc: req.t('javascriptdesc'),
            jobs: req.t('jobs'),
            mainrole:   req.t('mainrole'),
            others:     req.t('others'),   
            ownbussiness: req.t('ownbussiness'),
            ownbussinesslink: req.t('ownbussinesslink'),
            phpdesc: req.t('phpdesc'),
            portfolio:  req.t('portfolio'),
            portuguese: req.t('portuguese'),
            purplemode: req.t('purplemode'),
            resume:     req.t('resume'),
            roledescription: req.t('roledescription'),
            services:   req.t('services'),
            sitelanguage: req.t('sitelanguage'),
            skills: req.t('skills'),
            skillsdescription: req.t('skillsdescription'),
            sourcecode: req.t('sourcecode'),
            sqldesc: req.t('sqldesc'),
            talk1: req.t('talk1'),
            talk2: req.t('talk2'),
            talk3: req.t('talk3'),
            talk4: req.t('talk4'),
            talks: req.t('talks'),
            talksdesc: req.t('talksdesc'),
            themetrema: req.t('themetrema'),
            trema: req.t('trema'),
            tremadesc: req.t('tremadesc'),
            tremadownloads: req.t('tremadownloads'),
            tremasites: req.t('tremasites'),
            welcome: req.t('welcome'),
            whatidid: req.t('whatidid'),
            whatididdesc: req.t('whatididdesc'),
        };
    }
 }

 module.exports = new HomeController();