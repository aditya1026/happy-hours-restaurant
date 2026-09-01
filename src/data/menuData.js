/**
 * Happy Hours Menu Demonstration Data
 * 
 * IMPORTANT NOTE:
 * These dishes and descriptions are editable demo placeholders prepared for demonstration
 * purposes. Official menu items and pricing will be provided directly by Happy Hours management.
 * Pricing is deliberately omitted to comply with official business rules.
 */

export const MENU_CATEGORIES = [
  { id: "starters", name: "Starters" },
  { id: "main-course", name: "Main Course" },
  { id: "snacks", name: "Snacks" },
  { id: "beverages", name: "Beverages" },
  { id: "desserts", name: "Desserts" },
];

export const MENU_DATA = {
  starters: [
    {
      id: "s1",
      name: "Crispy Peri-Peri Paneer Bites",
      description: "Golden paneer cubes tossed in house-blended fiery African peri-peri spices with mint emulsion.",
      badge: "Signature",
      dietary: "veg",
    },
    {
      id: "s2",
      name: "Truffled Mushroom Bruschetta",
      description: "Crusty woodfired garlic sourdough topped with sautéed wild mushrooms and herb drizzle.",
      badge: "Chef's Pick",
      dietary: "veg",
    },
    {
      id: "s3",
      name: "Smokey Charred Chicken Tikka",
      description: "Succulent chicken morsels infused with hung curd, crushed coriander, and tandoori spices.",
      badge: "Popular",
      dietary: "non-veg",
    },
    {
      id: "s4",
      name: "Loaded Golden Corn Cheese Balls",
      description: "Crispy panko-crusted spheres stuffed with sweet corn kernels and melted mozzarella core.",
      badge: "Favorite",
      dietary: "veg",
    },
    {
      id: "s5",
      name: "Zesty Dragon Chicken",
      description: "Wok-tossed chicken strips glazed in spicy cashew-chilli reduction with scallions.",
      badge: null,
      dietary: "non-veg",
    },
    {
      id: "s6",
      name: "Honey Chilli Crispy Lotus Stem",
      description: "Crunchy lotus rounds glazed in a delicate blend of honey, toasted sesame, and mild red chillies.",
      badge: "New",
      dietary: "veg",
    },
  ],
  "main-course": [
    {
      id: "m1",
      name: "Classic Paneer Butter Masala",
      description: "Silky cottage cheese simmered in a velvety tomato-cashew makhani gravy touched with kasuri methi.",
      badge: "House Special",
      dietary: "veg",
    },
    {
      id: "m2",
      name: "Smoked Chicken Biryani Handi",
      description: "Long-grain fragrant basmati rice slow-cooked on dum with tender spiced chicken and saffron aromatics.",
      badge: "Bestseller",
      dietary: "non-veg",
    },
    {
      id: "m3",
      name: "Artisan Woodfired Margherita",
      description: "Slow-fermented dough topped with San Marzano tomato reduction, buffalo mozzarella, and fresh basil.",
      badge: "Popular",
      dietary: "veg",
    },
    {
      id: "m4",
      name: "Creamy Alfredo Penne Primavera",
      description: "Al dente penne folded in rich garlic-parmesan cream sauce with roasted seasonal vegetables.",
      badge: null,
      dietary: "veg",
    },
    {
      id: "m5",
      name: "Dal Makhani 24-Hour Slow Simmer",
      description: "Black lentils stewed overnight with churned butter and cream, finished with ginger juliennes.",
      badge: "Classic",
      dietary: "veg",
    },
    {
      id: "m6",
      name: "Murgh Tikka Lababdar",
      description: "Tandoori chicken pieces cooked in an enriched onion-tomato gravy with aromatic spices.",
      badge: null,
      dietary: "non-veg",
    },
  ],
  snacks: [
    {
      id: "sn1",
      name: "Loaded Truffle Parmesan Fries",
      description: "Hand-cut crispy potatoes dusted with sea salt, aged parmesan cheese, and black truffle oil.",
      badge: "Crowd Favorite",
      dietary: "veg",
    },
    {
      id: "sn2",
      name: "Double Smash Gourmet Burger",
      description: "Toasted brioche, double patty, caramelized onions, melted cheddar slice, and secret house relish.",
      badge: "Must Try",
      dietary: "non-veg",
    },
    {
      id: "sn3",
      name: "Crispy Veg Spring Rolls",
      description: "Golden flaky wrappers filled with seasoned crunchy vegetables served alongside sweet chilli dip.",
      badge: null,
      dietary: "veg",
    },
    {
      id: "sn4",
      name: "Spicy Mexican Tacos",
      description: "Warm corn tortillas loaded with spiced beans, shredded lettuce, pico de gallo, and sour cream.",
      badge: "Spicy",
      dietary: "veg",
    },
    {
      id: "sn5",
      name: "Cheese Stuffed Garlic Bread",
      description: "Oven-baked baguette brushed with garlic herb butter and stuffed with melted cheese blend.",
      badge: "Favorite",
      dietary: "veg",
    },
    {
      id: "sn6",
      name: "Chicken Popcorn Crunch",
      description: "Bite-sized chicken nuggets crusted with spiced batter and served with smoked paprika dip.",
      badge: null,
      dietary: "non-veg",
    },
  ],
  beverages: [
    {
      id: "b1",
      name: "Sunset Passionfruit Cooler",
      description: "Tangy passionfruit puree shaken with fresh mint, lime juice, and sparkling soda.",
      badge: "Signature",
      dietary: "veg",
    },
    {
      id: "b2",
      name: "Classic Blue Curacao Mojito",
      description: "Vibrant citrus mocktail with crushed ice, fresh garden mint, and lime wedges.",
      badge: "Popular",
      dietary: "veg",
    },
    {
      id: "b3",
      name: "Belgian Chocolate Thick Shake",
      description: "Velvety blend of dark Belgian chocolate ganache, rich ice cream, and whipped cream topping.",
      badge: "Indulgent",
      dietary: "veg",
    },
    {
      id: "b4",
      name: "Peach & Apricot Iced Tea",
      description: "Slow-steeped Assam black tea infused with natural peach nectar and chilled over crystal ice.",
      badge: "Refreshing",
      dietary: "veg",
    },
    {
      id: "b5",
      name: "Virgin Berry Sangria",
      description: "Medley of seasonal berries, orange slices, and grape juice muddled with cinnamon aroma.",
      badge: "Special",
      dietary: "veg",
    },
    {
      id: "b6",
      name: "Caramel Frappuccino Delight",
      description: "Espresso roast blended with chilled milk, caramel swirl, and crushed coffee beans.",
      badge: null,
      dietary: "veg",
    },
  ],
  desserts: [
    {
      id: "d1",
      name: "Molten Sizzling Lava Brownie",
      description: "Warm dark chocolate brownie with a flowing center, crowned with vanilla bean ice cream.",
      badge: "All-Time Favorite",
      dietary: "veg",
    },
    {
      id: "d2",
      name: "New York Classic Cheesecake",
      description: "Velvety baked cream cheese on buttery graham cracker crust with berry coulis drizzle.",
      badge: "Chef's Special",
      dietary: "veg",
    },
    {
      id: "d3",
      name: "Warm Gulab Jamun Sundae",
      description: "Soft saffron-infused gulab jamuns paired with pistachio kulfi and toasted almond flakes.",
      badge: "Fusion",
      dietary: "veg",
    },
    {
      id: "d4",
      name: "Tiramisu Dolce Vita",
      description: "Espresso-soaked savoiardi biscuits layered with mascarpone cream and dusted with cocoa.",
      badge: "Classic",
      dietary: "veg",
    },
  ],
};
