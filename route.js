/**
 * Module dependencies
 */
var express = require('express');
var beerController = require('./controllers/beer');
var userController = require('./controllers/user');

module.exports = function(app) {
    var router = express.Router();

    router.route('/beers')
        .get(beerController.getBeers)
        .post(beerController.postBeers);

    router.route('/beers/:beer_id')
        .get(beerController.getBeer)
        .patch(beerController.patchBeer)
        .delete(beerController.deleteBeer);

    router.route('/user')
        .post(userController.postUser);

    router.route('/users')
        .get(userController.getUsers);

    app.use('/api', router);
}
   
