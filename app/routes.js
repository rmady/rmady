/**
 * RMady website index.
 * 
 * @author  Rodrigo Mady @rmady
 * @project rmady.com
 */

const express = require('express');
const router  = express.Router();
const path    = require('path');

const HomeController = require(path.join(__dirname, "/controllers/HomeController"));

router.get('/', HomeController.renderHome);
router.get('/portfolio', HomeController.renderPortfolio);
router.get('/services', HomeController.renderServices);
router.get('/cv', HomeController.renderCV);
router.get('/contact', HomeController.renderContact);

module.exports = router;