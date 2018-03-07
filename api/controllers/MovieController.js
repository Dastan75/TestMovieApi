/**
* MovieController
*
* @description :: Server-side logic for managing Movies
* @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
*/
var util = require('util');

module.exports = {

	page: function (req, res) {
    // return res.send(Movie.find().paginate({page: req.query.page, limit: req.query.limit}));
		Movie.find().paginate({page: req.query.page, limit: req.query.limit}).exec(function (err, pageMovies){
  if (err) {
    return res.serverError(err);
  }
  return res.json(pageMovies);
});
		// console.log(movies);
		// var test = util.inspect(myMovies);
		// return res.send(test);
  }

};
