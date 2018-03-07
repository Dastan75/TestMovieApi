/**
 * Movie.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 module.exports = {
  autoUpdatedAt: false,
  autoCreatedAt: false,
 	attributes: {
 		title: { type: 'STRING', required: true },
 		release_year: { type: 'INTEGER', required: true },
 		creation_date: { type: 'DATETIME', defaultsTo: new Date().toLocaleString()},
 		genres: { type: 'ARRAY', required: true },
 		for_kids: { type: 'BOOLEAN', required: true },
 		rating: { type: 'INTEGER', required: true },
 } };
