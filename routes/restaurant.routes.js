const { addRestaurant, getRestaurants, getRestaurantCategories, getRestaurantsByCategoryName, getRestaurantById, getRestaurantsByRating, updateRestaurant, deleteRestaurant, deleteRestaurants } = require('../controllers/restaurant.controller');

module.exports = (app) => {
  app.post('/api/restaurant/add', addRestaurant);
  app.get('/api/restaurant', getRestaurants);
  app.get('/api/restaurant/categories', getRestaurantCategories);
  app.get('/api/restaurant/categories/categoryName', getRestaurantsByCategoryName);
  app.get('/api/restaurant/id', getRestaurantById);
  app.get('/api/restaurant/rating/ratingValue', getRestaurantsByRating);
  app.put('/api/restaurant/id', updateRestaurant);
  app.delete('/api/restaurant/id', deleteRestaurant);
  app.delete('/api/restaurant/', deleteRestaurants);
}