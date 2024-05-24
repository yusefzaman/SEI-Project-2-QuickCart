require("dotenv").config()
require("./config/database")

const Category = require("./models/category") //this is now a mongoose object and can now take mongoose prompts.

// Define an async function to create the planet in the database
const createCategories = async () => {
  try {
    const doc = await Category.create({
      categoryName: "Pluto",
      categoryImg: "empty for now",
    })

    console.log("Done creating categories", doc)
  } catch (err) {
    console.error(err)
  }
}

createCategories()
