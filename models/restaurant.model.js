const { Schema, model } = require('mongoose');

const restuarantSchema = new Schema({
  name: String,
  description: String,
  category: String,
  imageURL: String,
  location: String,
  phone: String,
  rating: Number,
})