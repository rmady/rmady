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
                title: req.Globalize.formatMessage('home/title'),
                bio:   req.Globalize.formatMessage('home/bio'),   
                welcome:   req.Globalize.formatMessage('home/welcome'),   
            });
        } catch (e) {
            console.log(e);
            res.status(500).send(e.message);
        }
    }
 }

 module.exports = new HomeController();