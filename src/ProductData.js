const ProductData = () => {

  const productsdata = [
    {
      productName: "Thinkpad",
      productImage: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS1AfhchuZhxT2k_9MFi8ta9CGiHSExFWfgub4THJiLohcjFtJ7LAR9dcYh-cE6Ks3D2CXplgpO6yU&usqp=CAc",
      description: "A solid choice for your computer needs, the Thinkpad is the klutz's saviour for a long lasting solution! Buy now!",
      seller: {
        id: 1,
        name: "Lenovo Seller"
      },
      price: 2000,
      cost: 1500,
      amount: 50,
      tags: ["electronics", "laptops", "lenovo"]
    },
    {
      productName: "Dell Laptop",
      productImage: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSxiHjCQP5cwBbx6wRrde5E9ixbUyly2Gt_fk8eRK4XliCegJkEShGXdXGAndXhaCeuQBz3RThPZQ&usqp=CAc",
      description: "The Vostro 3491 is your best friend in affordable high spec computing. Get one now today!",
      seller: {
        id: 2,
        name: "Dell Seller"
      },
      price: 1500,
      cost: 1200,
      amount: 30,
      tags: ["electronics", "laptops", "dell"]
    },
    {
      productName: "Yoga C740",
      productImage: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT1ltaGZvXZe7sDGVl5bkoHoxZxzKB7vdQemJM5l6SN8a3FwozO7saMed-OZ_uHJyGJDfXeR4YsJIQ&usqp=CAc",
      description: "The top of the line gaming solution! This monster can handle the highest of graphics!",
      seller: {
        id: 1,
        name: "Lenovo Seller"
      },
      price: 4500,
      cost: 3000,
      amount: 70,
      tags: ["electronics", "laptops", "lenovo", "gaming"]
    },
    {
      productName: "Dumbbells set",
      productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgpJgWHwT0pfB8OrtE0h8fgPjRriylj9Z06Q&usqp=CAU",
      description: "A set of dumbbells for beginner to advanced level to help build up those muscles.",
      seller: {
        id: 3,
        name: "Healthy Solutions"
      },
      price: 800,
      cost: 600,
      amount: 45,
      tags: ["exercise", "health"]
    },
    {
      productName: "Kettle bell",
      productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvuP9zLRPz6Kjz77NCEfahhTK-AjBqLprhgg&usqp=CAU",
      description: "A kettlebell to help maintain a healthy lifestyle via exercise!",
      seller: {
        id: 3,
        name: "Healthy Solutions"
      },
      price: 200,
      cost: 50,
      amount: 25,
      tags: ["exercise", "health"]
    },
    {
      productName: "Wok",
      productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQNyOd4EqyrDqTIC5rIl_6q7e7AvL-e-OM1aQ&usqp=CAU",
      description: "The multipurpose wok for your cooking needs! Stainless steel, high heat conductivity and durable!",
      seller: {
        id: 4,
        name: "Zwiling"
      },
      price: 350,
      cost: 200,
      amount: 35,
      tags: ["cooking", "household"]
    },
    {
      productName: "Knives",
      productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOuV03CO3aQLumicW3a11y87lYKyfsj2xaRQ&usqp=CAU",
      description: "A set of knives for just about anything you need, be it peeling fruits, filetting fish, chopping meat, there's a knife for everything!",
      seller: {
        id: 4,
        name: ""
      },
      price: 550,
      cost: 300,
      amount: 60,
      tags: ["cooking", "household"]
    },
    {
      productName: "Zwiling Cooking Set",
      productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTkP8YZ0189LYHzMoW9_MpOUTSl_WtpkZaDbw&usqp=CAU",
      description: "Best buy deals!!! A set of pots for your stewing/cooking needs!",
      seller: {
        id: 4,
        name: "Zwiling"
      },
      price: 2000,
      cost: 1500,
      amount: 77,
      tags: ["bestbuy", "cooking", "household"]
    },
    {
      productName: "Blue Mountain Coffee Beans",
      productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6rOoJ0j07nYSMmQNjKnqHXUlf66wShqFp5A&usqp=CAU",
      description: "High quality coffee beans to brew the best kind of coffee that money can buy",
      seller: {
        id: 5,
        name: "Coffee Time"
      },
      price: 888,
      cost: 200,
      amount: 88,
      tags: ["coffee"]
    },
    {
      productName: "Fruit Bundle",
      productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT5A9TLhEExPr72qY2yBfZmj55Y7Czt3EF5Mw&usqp=CAU",
      description: "Selling fresh fruits since 1950, this is our popular fruit care bundle!",
      seller: {
        id: 6,
        name: "We Sell Fresh Fruits"
      },
      price: 999,
      cost: 111,
      amount: 99,
      tags: ["perishables", "fruit"]
    }
  ];
  return productsdata;
}

export default ProductData;