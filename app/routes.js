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

module.exports = router;