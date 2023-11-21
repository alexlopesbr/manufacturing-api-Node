const express = require('express');
const bodyParser = require('body-parser');
const { connectDB } = require('../db');
const companyRoutes = require('./routes/companyRoutes');

const app = express();

connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/companies', companyRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
