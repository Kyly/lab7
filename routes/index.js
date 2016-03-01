var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
	var random_num = Math.random();

	if (random_num >= 0) {
		projects['grid'] = false;
		res.render('index', projects);
	} else {
		res.redirect('/grid');
	}
};

exports.viewGrid = function (request, response) {
	projects['grid'] = true;
	response.render('index', projects);
};