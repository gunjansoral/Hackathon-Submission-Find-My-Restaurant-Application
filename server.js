const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const { PORT, DB_URL } = process.env;
const app = express();

app.use(express.json())

// database connection
mongoose.connect(DB_URL)
const db = mongoose.connection;
db.on('error', err => {
  console.log(err)
})

db.once('open', () => [
  console.log('db connected')
])

// routes
require('./routes/restaurant.routes')(app);

app.listen(PORT, () => {
  console.log('listening on port : ' + PORT);
});
