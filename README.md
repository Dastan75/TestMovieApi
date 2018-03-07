# APImovie

a [Sails](http://sailsjs.org) application

Install : npm install

Run : sails lift (Option 1: migrate by hand, 2: auto-migrate, 3 delete everything)

App running on port 1337 (http://localhost:1337)

To get all list of movies : http://localhost:1337/movie

Pagination : http://localhost:1337/movie/page?page=2&limit=10
  with page the page we want and limit the number of movies on each pages.
Or : http://localhost:1337/movie?limit=10&skip=10
  with limit the number of movies we want and skip the number of previous movies skipped.
  
Database run on https://www.elephantsql.com/

Config file /ApiTest/config/connections.js
Pour configurer la base de donne ou la changer
