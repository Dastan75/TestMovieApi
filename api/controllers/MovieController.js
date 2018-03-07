/**
* MovieController
*
* @description :: Server-side logic for managing Movies
* @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
*/
var util = require('util');

module.exports = {

	page: function (req, res) {
    
		Movie.find().paginate({page: req.query.page, limit: req.query.limit}).exec(function (err, pageMovies){
  if (err) {
    return res.serverError(err);
  }
  return res.json(pageMovies);
});

  }

};
