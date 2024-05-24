require('dotenv').config()
require('./config/database')

const Item = require('./models/item')

const createItem = async () => {
  try {
    const doc = await Item.create(
      {
        itemName: 'T-Shirt',
        itemImg: 'String',
        itemPrice: 15,
        itemDescription:
          'Show your Bahraini spirit! This locally-crafted t-shirt boasts comfortable, breathable fabric and eye-catching Bahraini designs, making it a unique addition to your collection.'
      },
      {
        itemName: 'Hoodie',
        itemImg: 'String',
        itemPrice: 20,
        itemDescription:
          'Crafted with Bahraini pride, this cozy hoodie is perfect for everyday comfort. Rep your local style with unique designs that celebrate island life. '
      },
      {
        itemName: 'Trainers',
        itemImg: 'String',
        itemPrice: 25,
        itemDescription:
          'These trainers will last you a lifetime, made by the local artisans of manama, they boast exelent quality and duaribitiy'
      },
      {
        itemName: 'Gaming Table',
        itemImg: 'String',
        itemPrice: 100,
        itemDescription:
          'Level up your gameplay with this ergonomic gaming table!  Ample space for multiple monitors,  cup holder, and cable management keep your battlestation organized for victory.'
      },
      {
        itemName: 'Gaming Chair',
        itemImg: 'String',
        itemPrice: 70,
        itemDescription:
          'Dominate your game in comfort! This Bahrain-made gaming chair features ergonomic support and all the bells and whistles for marathon sessions. Upgrade your setup and rep local with this stylish throne.'
      },
      {
        itemName: 'Gaming Bed',
        itemImg: 'String',
        itemPrice: 300,
        itemDescription:
          'Level up your sleep and slay dragons all day! This Bahrain-made gaming bed combines ultimate comfort with a built-in desk and storage for the ultimate gaming oasis. Conquer your quests and catch some Zzzs in style.'
      },
      {
        itemName: 'TV',
        itemImg: 'String',
        itemPrice: 350,
        itemDescription:
          'Immerse yourself in the action! This TV boasts stunning visuals and [mention a key feature, e.g., smooth refresh rate for gamers, vibrant HDR for movie lovers] for an unforgettable entertainment experience. Upgrade your home cinema and enjoy everything you love in incredible detail. '
      },
      {
        itemName: 'Gaming Desktop',
        itemImg: 'String',
        itemPrice: 400,
        itemDescription:
          'Unleash epic performance! This gaming desktop packs a punch with a powerful graphics card and processor, letting you conquer demanding games at high settings. Dominate the competition with smooth gameplay and breathtaking visuals.'
      },
      {
        itemName: 'Gaming Laptop',
        itemImg: 'String',
        itemPrice: 450,
        itemDescription:
          'Gear up for portable power! This gaming laptop features [mention a key strength, e.g., the latest NVIDIA RTX graphics] for smooth gameplay on the go. Take your adventures anywhere and dominate the competition with desktop-grade performance.'
      }
    )
    console.log('Done creating item', doc)
  } catch (err) {
    console.error(err)
  }
}

createItem()
