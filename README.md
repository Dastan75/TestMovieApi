# APImovie

a [Sails](http://sailsjs.org) application

Install : npm install

Run : sails lift (Option 3 to delete everything)

App running on port 1337 (http://localhost:1337)

To get all list of movies : http://localhost:1337/movie

Pagination : http://localhost:1337/movie/page?page=2&limit=10
  with page the page we want and limit the number of movies on each pages.
Or : http://localhost:1337/movie?limit=10&skip=10
  with limit the number of movies we want and skip the number of previous movies skipped.
  
Database run on https://api.elephantsql.com/console/b4a7fd8a-2022-4e92-b0cf-73c64f255479/details?
