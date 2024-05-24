require('dotenv').config() // Necessary if connection string is in a .env file
require('./config/database') // Execute the code to connect to the db

const Item = require('./models/item') //this is now a mongoose object and can now take mongoose prompts.
// Define an async function to create the planet in the database
const createItem = async () => {
  try {
    const doc = await Item.create({
      itemName: 'T-Shirt',
      itemImg: 'String',
      itemPrice: 15,
      itemDescription: 'String',
      review: [{ type: Schema.Types.ObjectId, ref: 'review' }]
    })

    console.log('Done creating item', doc)
  } catch (err) {
    console.error(err)
  }
}

// Call the async function
createCategories()
