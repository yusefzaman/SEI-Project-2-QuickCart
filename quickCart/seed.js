require("dotenv").config()
require("./config/database")

const Category = require("./models/category")

// Define an async function to create the planet in the database
const createCategories = async () => {
  try {
    const doc = await Category.create(
      {
        categoryName: "Clothes",
        categoryImg: "https://cdn-icons-png.flaticon.com/512/130/130302.png",
      },
      {
        categoryName: "Furniture",
        categoryImg: "https://cdn-icons-png.flaticon.com/512/5029/5029075.png",
      },
      {
        categoryName: "Electronics",
        categoryImg: "empty for now",
      }
    )

    console.log("Done creating categories", doc)
  } catch (err) {
    console.error(err)
  }
}

// Call the async function
createCategories()
