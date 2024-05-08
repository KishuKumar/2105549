const express = require('express');
const mongoose = require('mongoose');
const { Schema } = mongoose;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a schema for products
const productSchema = new Schema({
  productName: String,
  price: Number,
  rating: Number,
  discount: Number,
  availability: String,
});

// Create a model for products
const Product = mongoose.model('Product', productSchema);

const app = express();
const PORT = process.env.PORT || 3000;

// First Rest Api to retrieve top products within a category
app.get('/categories/:categoryName/products', async (req, res) => {
  try {
    const { categoryName } = req.params;
    const { n, page, sortBy, sortOrder } = req.query;
    const limit = parseInt(n) || 10;
    const skip = parseInt(page) ? (parseInt(page) - 1) * limit : 0;

    let query = Product.find({}); // Find all products
    query = query.limit(limit).skip(skip); // Limit and skip for pagination

    if (sortBy && sortOrder) {
      const sortOptions = {};
      sortOptions[sortBy] = sortOrder === 'asc' ? 1 : -1;
      query = query.sort(sortOptions); // Sorting options
    }

    const products = await query.exec();
    res.json({ products });
  } catch (error) {
    console.error('Error fetching top products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Second Rest Api to fetch the product 
app.get('/categories/:categoryName/products/:productId', async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findById(productId).exec();
    res.json({ product });
  } catch (error) {
    console.error('Error fetching product details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
