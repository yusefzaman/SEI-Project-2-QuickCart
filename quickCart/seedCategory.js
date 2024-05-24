require('dotenv').config() // Necessary if connection string is in a .env file
require('./config/database') // Execute the code to connect to the db

const Category = require('./models/category') //this is now a mongoose object and can now take mongoose prompts.

// Define an async function to create the planet in the database
const createCategories = async () => {
  try {
    const doc = await Category.create(
      {
        categoryName: 'Clothes',
        categoryImg: 'https://cdn-icons-png.flaticon.com/512/130/130302.png'
      },
      {
        categoryName: 'Furniture',
        categoryImg: 'https://cdn-icons-png.flaticon.com/512/5029/5029075.png'
      },
      {
        categoryName: 'Electronics',
        categoryImg:
          'data:image/png;base64,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'
      }
    )

    console.log('Done creating categories', doc)
  } catch (err) {
    console.error(err)
  }
}

// Call the async function
createCategories()
