const products = [
  
  {
    name: "Slim Fit Dress Shirt",
    image: "/images/products/f6.jpg",
    description:
      "a mans shirt worn for semiformal evening dress, usually having French cuffs and a stiff or pleated front to be fastened with studs",
    price: 49.9,
    brand: "Kiabi",
  },

  {
    name: " Original Pro Sponge",
    image: "/images/products/beautyblender2.jpg",
    description:
      "A Makeup blender sponge lets the foundation blend in the skin perfectly making it look natural with an even finish.",
    price: 24.9,
    brand: "sephora",
    status: "in stock",
    rate: "0.5",
  },

  {
    image: "../data/images/products/f2.jpg",
    name: "Men's colorful shirt",
    price: 39.9,
    brand: "Pull & Bear",
    description:
      "Broadly speaking, summer shirt fabrics need to be light, breathable and quick drying. ",
    status: "in stock",
    rate: "0.2",
  },

  {
    image: "../data/images/products/nikeee.jpeg",
    name: "Pegasus 40",
    price: 160.9,
    brand: "Nike",
    description:
      "The Pegasus 40 offers a solid, stable and comfortably cushioned ride, and it&#39;s a shoe that can take a lot of mileage and a lot of pounding on the tarmac.",
    status: "in stock",
    rate: "0.3",
  },

  {
    image: "../data/images/products/coffeemug2.jpeg",
    name: "Modern coffee cups",
    price: 49.9,
    brand: "Saga",
    description:
      "The coffee mug feels so good wrapped in both your hands, sending its warmth right into your blood",
    status: "in stock",
    rate: "0.6",
  },

  {
    image: "../data/images/products/bott.jpg",
    name: "Modern Water Bottle",
    price: 10.9,
    brand: "GymShark",
    description:
      "Water Bottle with Time Marker, Carry Strap, Leak-Proof Tritan BPA-Free, Ensure You Drink Enough Water for Fitness, Gym, Camping, Outdoor Sports",
    status: "in stock",
    rate: "0.2",
  },

  {
    image: "../data/images/products/phonecase4.jpeg",
    name: "Simple phonecase",
    price: 39.5,
    brand: "Puma",
    description:
      "Slim Liquid Silicone 3 Layers Full Covered Soft Gel Rubber Case Cover 6.1 inch-Chalk white",
    status: "in stock",
    rate: "0.5",
  },

  {
    image: "../data/images/products/foundation.jpeg",
    name: "Makeup Foundation",
    price: 29.5,
    brand: "makeup forever",
    description:
      "Flawless Finish Foundation, Improves Uneven Skin Tone, Lightweight, Medium Coverage & Semi-Matte,",
  },

  {
    image: "../data/images/products/headp.jpeg",
    name: "black headphone",
    price: 49.9,
    brand: "Bonzo",
    description:
      "Headphones with Microphone, Lightweight Folding Stereo Bass Headphones with 1.5M No-Tangle Cord, Portable Wired Headphones for Smartphone Tablet Computer",
  },

  {
    image: "../data/images/products/watch3.avif",
    name: "Black smartwatch",
    price: 24.9,
    brand: "Casio",
    description:
      "GPS Smartwatch with Bright Touchscreen Display, Up to 6 Days of Battery Life, Slate Aluminum Bezel with Shadow Gray Case and Slate Silicone Band",
  },

  {
    image: "../data/images/products/bottle8.jpeg",
    name: "Gym bottle",
    price: 39.9,
    brand: "Adidas",
    description:
      "FLASK Sports Water Bottle - 22 Oz 3 Lids (Straw Lid), Leak Proof - Stainless Steel Gym & Sport Bottles for Men, Women & Kids",
  },

  {
    image: "../data/images/products/brushoffer.avif",
    name: "Brush set",
    price: 49.9,
    brand: "Rare",
    description:
      "Makeup Brush, BESTOPE PRO Premium Synthetic Foundation Concealers Eye Shadows",
  },

  {
    image: "../data/images/products/watch2.avif",
    name: "Men's Smartwatch",
    price: 49.9,
    brand: "Under Armour",
    description:
      "Smart Watch for Men with Bluetooth Call, Alexa Built-in1.8 DIY Dial with Blood Oxygen Heart Rate Sleep Fitness Tracker Notification Weather 100 Sport Modes Smartwatch for Android iOS Phone",
  },

  {
    image: "../data/images/products/dress1.jpeg",
    name: "Women's summer dress",
    price: 19.9,
    brand: "H&M",
    description:
      "Womens Deep V Neck Short Sleeve Long Dresses Pleated High Waist Slit Club Party Evening Maxi Dress",
  },

  {
    image: "../data/images/products/shoes2.jpeg",
    name: "Men's Sportwear shoes",
    price: 39.5,
    brand: "Puma",
    description:
      "Mens Basketball Shoes for Men Sneakers Men&#39;s High Top Running Trail Air Sports Athletic Male",
  },

  {
    image: "../data/images/products/brushes3.avif",
    name: "Makeup brushes",
    price: 29.5,
    brand: "Sephora",
    description:
      "Makeup Brush Set Premium Synthetic Powder Foundation Contour Blush Concealer Eye Shadow Blending Liner",
  },

  {
    image: "../data/images/products/img1.png",
    name: "Slim Fit T-Shirt",
    price: 49.9,
    brand: "Calvin Klein",
    description:
      "Oversized T Shirts Tees Distorted Portrait Print Crew Neck Cotton Tops Streetwear Casual Shirt",
    status: "in stock",
  },

  {
    image: "../data/images/products/massage.avif",
    name: "Beauty Fcaial Roller",
    price: 40.9,
    brand: "Elle",
    description:
      "Jade Roller & Gua Sha Facial Tools Face Roller and Gua Sha Set for Skin Care Routine and Puffiness - Green",
    status: "in stock",
  },

  {
    image: "../data/images/products/n6.jpg",
    name: "Men's Dri-FIT Short",
    price: 24.9,
    brand: "mango",
    description: 'Essentials Mens Slim-Fit 9" Short',
    status: "in stock",
  },

  {
    image: "../data/images/products/watch.jpg",
    name: "Elite Smart Watch",
    price: 50.99,
    brand: "Fila",
    description:
      'Smart Watch (Answer/Make Call), 1.7" Smartwatch Fitness Tracker for Android and iOS Phones with Heart Rate Sleep Tracking, 28 Sport Modes',
    status: "Out of stock",
  },

  {
    image: "../data/images/products/mug.jpg",
    name: "Modern Mugs",
    price: 49.9,
    brand: "Tortuna",
    description:
      "Hand Crafted Ceramic Stoneware Mug Set, Modern Dining Mugs - Large & Multipurpose Shape Mugs, Microwave & Dishwasher Safe",
    status: "in stock",
  },

  {
    image: "../data/images/products/coffeemug3.jpeg",
    name: "Nude Mug",
    price: 9.9,
    brand: "H&M",
    description:
      "Mora Ceramic Large Latte Mug Set of 4, 16oz - Microwavable, Porcelain Coffee Cups With Big Handle",
    status: "in stock",
  },

  {
    image: "../data/images/products/sponge2.jpeg",
    name: "Beauty sponge",
    price: 39.5,
    brand: "The Ordinary",
    description:
      "Makeup Blender with Holder, Non-Latex Beauty Sponge with Case of Premium Silicone for Blending Liquid Foundations Cosmetics, Travel Sponge Holders, Soft and Skin-Friendly - Purple",
    status: "in stock",
  },

  {
    image: "../data/images/products/guasha.avif",
    name: "Guasha & Roller",
    price: 29.5,
    brand: "Dior",
    description:
      "Facial Skin Care Set, Facial Beauty Tools, Natural Beauty Skin Care Tools, Face Roller Massager for Face, Neck, and Eye Treatment",
    status: "in stock",
  },

];

export default products;
