/**
 * Module dependencies
 */
var express = require('express');
var authController = require('./controllers/auth');
var beerController = require('./controllers/beer');
var userController = require('./controllers/user');

module.exports = function(app) {
    var router = express.Router();

    router.route('/beers')
        .get(authController.isAuthenticated, beerController.getBeers)
        .post(authController.isAuthenticated, beerController.postBeers);

    router.route('/beers/:beer_id')
        .get(authController.isAuthenticated, beerController.getBeer)
        .patch(authController.isAuthenticated, beerController.patchBeer)
        .delete(authController.isAuthenticated, beerController.deleteBeer);

    router.route('/user')
        .post(authController.isAuthenticated, userController.postUser);

    router.route('/users')
        .get(authController.isAuthenticated, userController.getUsers);

    app.use('/api', router);
}
   
