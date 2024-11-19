const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Initialize the Express app
const app = express();

// Set up middleware to parse incoming form data
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection setup
const MONGO_URI = process.env.MONGO_URI; // Mongo URI from .env file
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Define a User model (adjusted for the "instint_data" collection in the "test" database)
const User = mongoose.model('User', new mongoose.Schema({
  firstName: String,
  middleName: String,
  lastName: String,
  mobile: String,
  gmail: String,
  address: String,
  workArea: String,
  area: [String],
  shopName: String,
}), 'instint_data'); // Specify collection name as "instint_data"

// Corrected the route for serving the register page
app.get('/register', (req, res) => {
  res.sendFile(__dirname + '/public/register.html'); // Fixed the path
});

// Handle form submission for registration
app.post('/register', (req, res) => {
  const { firstName, middleName, lastName, mobile, gmail, address, workArea, area, shopName } = req.body;

  // Create a new user object
  const newUser = new User({
    firstName,
    middleName,
    lastName,
    mobile,
    gmail,
    address,
    workArea,
    area: area || [], // Handle if 'area' is empty or not provided
    shopName,
  });

  // Save the user to the MongoDB database
  newUser.save()
    .then(() => {
      res.send('<h2>Registration Successful!</h2><p>Your registration has been completed successfully.</p><a href="/">Go to Home</a>');
    })
    .catch((error) => {
      console.error('Error saving user:', error);
      res.status(500).send('<h2>Error!</h2><p>Something went wrong. Please try again later.</p>');
    });
});

// Serve static files (index.html, about.html, etc.)
app.use(express.static('public'));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
