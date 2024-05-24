require("dotenv").config()
require("./config/database")

const Category = require("./models/category") //this is now a mongoose object and can now take mongoose prompts.

// Define an async function to create the planet in the database
const createCategories = async () => {
  try {
    const doc = await Category.create({
      name: "Pluto",
      climate: "Arctic",
      population: 5,
    })

    console.log("Done creating categories", doc)
  } catch (err) {
    console.error(err)
  }
}

// Call the async function
createCategories()
