require('dotenv').config() // Necessary if connection string is in a .env file
require('./config/database') // Execute the code to connect to the db

const Item = require('./models/item') //this is now a mongoose object and can now take mongoose prompts.
// Define an async function to create the planet in the database
const createCategories = async () => {
  try {
    const doc = await Item.create({
      name: 'Pluto',
      climate: 'Arctic',
      population: 5
      
    })

    console.log('Done creating categories', doc)
  } catch (err) {
    console.error(err)
  }
}

// Call the async function
createCategories()
