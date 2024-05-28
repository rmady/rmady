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
router.get('/skills', HomeController.renderSkills);
router.get('/portfolio', HomeController.renderPortfolio);
router.get('/talks', HomeController.renderTalks);
router.get('/trema', HomeController.renderTrema);
router.get('/contact', HomeController.renderContact);

module.exports = router;