require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());  // To allow requests from your HTML page

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define a schema for the data
const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const FormData = mongoose.model('FormData', formSchema);

// Endpoint to handle form submissions
app.post('/submit-form', async (req, res) => {
  try {
    const formData = new FormData(req.body);
    await formData.save();
    res.status(200).send('Form data saved successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error saving form data');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
