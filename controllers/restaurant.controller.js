// POST

const Restaurant = require("../models/restaurant.model");

exports.addRestaurant = async (req, res) => {
  try {
    // This API will collect new restaurant data and add it to the database.
    const { name, description, category, imageURL, location, phone, rating } = req.body;
    const newRestaurant = new Restaurant({
      name,
      description,
      category,
      imageURL,
      location,
      phone,
      rating,
    });

    await newRestaurant.save();

    res.status(200).send(newRestaurant);
  } catch (error) {
    res.status(500).send({
      message: "Some error occurred while creating the Restaurant."
    });
  }
}

// GET

exports.getRestaurants = async (req, res) => {
  try {
    // This API returns details of all the restaurants present in the database.
    const restaurant = await Restaurant.find({})
    res.status(200).send(restaurant);
  } catch (error) {
    res.status(500).send({
      message: "Some error occured while fetching the Restaurants."
    });
  }
}

exports.getRestaurantCategories = async (req, res) => {
  try {
    // This API returns the list of all the categories of restaurants present.
    const categories = await Restaurant.distinct("category");

    res.status(200).send(categories);
  } catch (error) {
    res.status(500).send({
      message: "Some error occured while fetching Categories."
    });
  }
}

exports.getRestaurantsByCategoryName = async (req, res) => {
  try {
    // This API returns details of all the restaurants of a particular category in the database.
    const { category } = req.params;
    const restuarants = await Restaurant.find({ category });
    res.status(200).send(restuarants);
  } catch (error) {
    res.status(500).send({
      message: "Some error occured while fetching the Restaurant."
    });
  }
}

exports.getRestaurantById = async (req, res) => {
  try {
    // This API returns details of the restaurant with a particular id.
    const { id } = req.params;
    const restuarant = await Restaurant.findById(id);
    res.status(200).send(restuarant);
  } catch (error) {
    console.log(error)
    res.status(500).send({
      message: "Some error occured while fetching the Restaurant."
    });
  }
}

exports.getRestaurantsByRating = async (req, res) => {
  try {
    // This API returns details of all the restaurants with ratings greater than equal to the given rating.
    const { rating } = req.params;
    const restaurants = await Restaurant.find({ rating: { $gte: parseFloat(rating) } });

    res.status(200).send(restaurants);
  } catch (error) {
    res.status(500).send({
      message: "Some error occured while fetching the Restaurant."
    });
  }
}

// PUT

exports.updateRestaurant = async (req, res) => {
  try {
    // This API updates existing details of the restaurant with a particular id.
    if (!req.body) return res.status(400).send({ message: "Restaurant Data is required" });

    const { id } = req.params;
    const restaurant = await Restaurant.findByIdAndUpdate(id, req.body);
    if (!restaurant) return res.status(200).send({ message: "No Restaurant found for given ID" });

    res.status(200).send({ message: "Restaurant updated successfully." })
  } catch (error) {
    res.status(500).send({
      message: "Some error occured while fetching the Restaurant."
    });
  }
}

// DELETE

exports.deleteRestaurant = async (req, res) => {
  try {
    // This API updates existing details of the restaurant with a particular id.
    const { id } = req.params;
    const restaurant = await Restaurant.findByIdAndDelete(id);

    res.status(200).send({
      restaurant,
      message: "Restaurant deleted successfully."
    })
  } catch (error) {
    res.status(500).send({
      message: "Some error occured while deleting the Restaurant."
    });
  }
}

exports.deleteRestaurants = async (req, res) => {
  try {
    // This API updates existing details of the restaurant with a particular id.
    const deletionResult = await Restaurant.deleteMany({}); // Delete all restaurants

    if (deletionResult.deletedCount === 0) {
      return res.status(200).send({ restaurants: null, message: "No restaurants deleted." });
    }

    res.status(200).send({
      restaurants: {
        acknowledged: deletionResult.acknowledged,
        deletedCount: deletionResult.deletedCount,
      },
      message: "Restaurants deleted successfully.",
    });
  } catch (error) {
    res.status(500).send({
      message: "Some error occured while deleting the Restaurant."
    });
  }
}