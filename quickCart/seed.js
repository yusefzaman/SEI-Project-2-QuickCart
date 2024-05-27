require("dotenv").config()
require("./config/database")

const Item = require("./models/item")
const Category = require("./models/category")

const createCategories = async () => {
  try {
    const items = await Item.create([
      {
        itemName: "T-Shirt",
        itemImg: "https://cdn-sprites.flaticon.com/families/4_subhome_card.jpg",
        itemPrice: 15,
        itemDescription:
          "Show your Bahraini spirit! This locally-crafted t-shirt boasts comfortable, breathable fabric and eye-catching Bahraini designs, making it a unique addition to your collection.",
        itemType: "Clothes",
      },
      {
        itemName: "Hoodie",
        itemImg: "https://cdn-sprites.flaticon.com/families/4_subhome_card.jpg",
        itemPrice: 20,
        itemDescription:
          "Crafted with Bahraini pride, this cozy hoodie is perfect for everyday comfort. Rep your local style with unique designs that celebrate island life.",
        itemType: "Clothes",
      },
      {
        itemName: "Trainers",
        itemImg: "https://cdn-sprites.flaticon.com/families/4_subhome_card.jpg",
        itemPrice: 25,
        itemDescription:
          "These trainers will last you a lifetime, made by the local artisans of Manama, they boast excellent quality and durability.",
        itemType: "Clothes",
      },
      {
        itemName: "Gaming Table",
        itemImg: "https://cdn-sprites.flaticon.com/families/4_subhome_card.jpg",
        itemPrice: 100,
        itemDescription:
          "Level up your gameplay with this ergonomic gaming table! Ample space for multiple monitors, cup holder, and cable management keep your battlestation organized for victory.",
        itemType: "Furniture",
      },
      {
        itemName: "Gaming Chair",
        itemImg: "https://cdn-sprites.flaticon.com/families/4_subhome_card.jpg",
        itemPrice: 70,
        itemDescription:
          "Dominate your game in comfort! This Bahrain-made gaming chair features ergonomic support and all the bells and whistles for marathon sessions. Upgrade your setup and rep local with this stylish throne.",
        itemType: "Furniture",
      },
      {
        itemName: "Gaming Bed",
        itemImg: "https://cdn-sprites.flaticon.com/families/4_subhome_card.jpg",
        itemPrice: 300,
        itemDescription:
          "Level up your sleep and slay dragons all day! This Bahrain-made gaming bed combines ultimate comfort with a built-in desk and storage for the ultimate gaming oasis. Conquer your quests and catch some Zzzs in style.",
        itemType: "Furniture",
      },
      {
        itemName: "TV",
        itemImg: "https://cdn-sprites.flaticon.com/families/4_subhome_card.jpg",
        itemPrice: 350,
        itemDescription:
          "Immerse yourself in the action! This TV boasts stunning visuals and smooth refresh rate for gamers, vibrant HDR for movie lovers for an unforgettable entertainment experience. Upgrade your home cinema and enjoy everything you love in incredible detail.",
        itemType: "Electronics",
      },
      {
        itemName: "Gaming Desktop",
        itemImg: "https://cdn-sprites.flaticon.com/families/4_subhome_card.jpg",
        itemPrice: 400,
        itemDescription:
          "Unleash epic performance! This gaming desktop packs a punch with a powerful graphics card and processor, letting you conquer demanding games at high settings. Dominate the competition with smooth gameplay and breathtaking visuals.",
        itemType: "Electronics",
      },
      {
        itemName: "Gaming Laptop",
        itemImg: "https://cdn-sprites.flaticon.com/families/4_subhome_card.jpg",
        itemPrice: 450,
        itemDescription:
          "Gear up for portable power! This gaming laptop features the latest NVIDIA RTX graphics for smooth gameplay on the go. Take your adventures anywhere and dominate the competition with desktop-grade performance.",
        itemType: "Electronics",
      },
    ])

    const clothesItems = items
      .filter((item) => item.itemType === "Clothes")
      .map((item) => item._id)
    const furnitureItems = items
      .filter((item) => item.itemType === "Furniture")
      .map((item) => item._id)
    const electronicsItems = items
      .filter((item) => item.itemType === "Electronics")
      .map((item) => item._id)

    const clothesCategory = await Category.create({
      categoryName: "Clothes",
      categoryImg: "https://cdn-icons-png.flaticon.com/512/130/130302.png",
      items: clothesItems,
    })

    const furnitureCategory = await Category.create({
      categoryName: "Furniture",
      categoryImg: "https://cdn-icons-png.flaticon.com/512/5029/5029075.png",
      items: furnitureItems,
    })

    const electronicsCategory = await Category.create({
      categoryName: "Electronics",
      categoryImg: "",
      items: electronicsItems,
    })

    console.log(
      "Done creating categories",
      clothesCategory,
      furnitureCategory,
      electronicsCategory
    )
  } catch (err) {
    console.error(err)
  }
}

// Call the async function
createCategories()
