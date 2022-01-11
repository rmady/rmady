/**
 * RMady home page Controller.
 * 
 * @author  Rodrigo Mady @rmady
 * @project rmady.com
 */
 
// Load modules
var globalizeExpress = require('globalize-express'),
    cookieParser     = require('cookie-parser');

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
        try {
            res.render("home", { 
                title:   req.Globalize.formatMessage('home/title'),
                bio:     req.Globalize.formatMessage('home/bio'),   
                welcome: req.Globalize.formatMessage('home/welcome'),
                sitelanguage: req.Globalize.formatMessage('home/sitelanguage'),
                aboutme:   req.Globalize.formatMessage('home/aboutme'),
                portfolio: req.Globalize.formatMessage('home/portfolio'),
                services:  req.Globalize.formatMessage('home/services'),
                resume:    req.Globalize.formatMessage('home/resume'),
                contact:    req.Globalize.formatMessage('home/contact'),
                themetrema: req.Globalize.formatMessage('home/themetrema'),
                purplemode: req.Globalize.formatMessage('home/purplemode'),
                mainrole:   req.Globalize.formatMessage('home/mainrole'),
                others:     req.Globalize.formatMessage('home/others'),
                roledescription: req.Globalize.formatMessage('home/roledescription'),
                skills: req.Globalize.formatMessage('home/skills'),
                skillsdescription: req.Globalize.formatMessage('home/skillsdescription'),
                jobs: req.Globalize.formatMessage('home/jobs'),
                whatidid: req.Globalize.formatMessage('home/whatidid'),
                ownbussiness: req.Globalize.formatMessage('home/ownbussiness'),
            });
        } catch (e) {
            console.log(e);
            res.status(500).send(e.message);
        }
    }
 }

 module.exports = new HomeController();