// POST

exports.addRestaurant = (req, res) => {
  try {
    // This API will collect new restaurant data and add it to the database.
  } catch (error) {
    res.status(500).send({
      message: "Some error occurred while creating the Restaurant."
    });
  }
}

// GET

exports.getRestaurants = (req, res) => {
  try {
    // This API returns details of all the restaurants present in the database.
  } catch (error) {
    res.status(500).send({
      message: "Some error occured while fetching the Restaurants."
    });
  }
}

exports.getRestaurantCategories = (req, res) => {
  try {
    // This API returns the list of all the categories of restaurants present.
  } catch (error) {
    res.status(500).send({
      message: "Some error occured while fetching Categories."
    });
  }
}

exports.getRestaurantsByCategoryName = (req, res) => {
  try {
    // This API returns details of all the restaurants of a particular category in the database.
  } catch (error) {
    res.status(500).send({
      message: "Some error occured while fetching the Restaurant."
    });
  }
}

exports.getRestaurantById = (req, res) => {
  try {
    // This API returns details of the restaurant with a particular id.
  } catch (error) {
    res.status(500).send({
      message: "Some error occured while fetching the Restaurant."
    });
  }
}

exports.getRestaurantsByRating = (req, res) => {
  try {
    // This API returns details of all the restaurants with ratings greater than equal to the given rating.

  } catch (error) {
    res.status(500).send({
      message: "Some error occured while fetching the Restaurant."
    });
  }
}

// PUT

exports.updateRestaurant = (req, res) => {
  try {
    // This API updates existing details of the restaurant with a particular id.
  } catch (error) {
    res.status(500).send({
      message: "Some error occured while fetching the Restaurant."
    });
  }
}

// DELETE

exports.deleteRestaurant = (req, res) => {
  try {
    // This API updates existing details of the restaurant with a particular id.
  } catch (error) {
    res.status(500).send({
      message: "Some error occured while deleting the Restaurant."
    });
  }
}

exports.deleteRestaurants = (req, res) => {
  try {
    // This API updates existing details of the restaurant with a particular id.
  } catch (error) {
    res.status(500).send({
      message: "Some error occured while deleting the Restaurant."
    });
  }
}