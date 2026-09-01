/**
 * Centralized Image Management for Happy Hours Restaurant
 * 
 * To update images with actual photography of Happy Hours:
 * Replace any URL or metadata object below. All components consume images
 * strictly from this central registry.
 */

export const IMAGES = {
  // Hero Section
  hero: {
    main: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=85",
    alt: "Happy Hours Restaurant warm ambient interior with cozy lighting",
    mobile: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=85",
  },

  // About Section
  about: {
    primary: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=85",
    accent: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=85",
    alt: "Artisan gourmet preparation at Happy Hours kitchen",
  },

  // Experience Section
  experience: {
    flavours: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    ambience: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80",
    moments: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80",
  },

  // Featured Food Showcase (6 Categories)
  featured: {
    pizza: {
      title: "Artisan Pizza",
      tagline: "Stone-baked to bubbly crisp perfection",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=85",
      alt: "Wood-fired artisanal pizza with melting mozzarella and fresh basil",
    },
    burger: {
      title: "Gourmet Burgers",
      tagline: "Stacked tall with rich smoked toppings",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",
      alt: "Juicy craft burger on toasted brioche bun",
    },
    pasta: {
      title: "Handcrafted Pasta",
      tagline: "Tossed in luscious velvety house sauces",
      image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=85",
      alt: "Handcrafted creamy pasta finished with grated parmesan",
    },
    indian: {
      title: "Rich Indian Cuisine",
      tagline: "Aromatic gravies & tandoor charred goodness",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=85",
      alt: "Authentic Indian curry with fragrant spices and warm naan",
    },
    mocktails: {
      title: "Signature Mocktails",
      tagline: "Refreshing botanicals & iced fruit infusions",
      image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=900&q=85",
      alt: "Vibrant craft mocktails garnished with citrus and mint",
    },
    desserts: {
      title: "Decadent Desserts",
      tagline: "Sweet finales that delight every sense",
      image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=85",
      alt: "Rich artisanal dessert with berries and chocolate glaze",
    },
  },

  // Statement Section Background
  statement: {
    bg: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1600&q=80",
    alt: "Atmospheric evening dinner table at Happy Hours",
  },

  // Masonry Gallery
  gallery: [
    {
      id: 1,
      title: "Woodfired Signature Slice",
      category: "Food",
      span: "row-span-2 col-span-1",
      url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=85",
      alt: "Artisan slice with fresh herbs",
    },
    {
      id: 2,
      title: "Cozy Dining Corners",
      category: "Ambience",
      span: "row-span-1 col-span-1",
      url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=85",
      alt: "Warm intimate restaurant seating",
    },
    {
      id: 3,
      title: "Sunset Citrus Cooler",
      category: "Beverages",
      span: "row-span-1 col-span-1",
      url: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=85",
      alt: "Chilled iced beverage with lemon wheel",
    },
    {
      id: 4,
      title: "Friends Celebrating Together",
      category: "Moments",
      span: "row-span-2 col-span-1",
      url: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=85",
      alt: "Friends toasting and laughing around the table",
    },
    {
      id: 5,
      title: "Sizzling Tandoor Skewers",
      category: "Food",
      span: "row-span-1 col-span-1",
      url: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=85",
      alt: "Charred marinated tandoori delights",
    },
    {
      id: 6,
      title: "Molten Chocolate Delight",
      category: "Desserts",
      span: "row-span-1 col-span-1",
      url: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=85",
      alt: "Warm chocolate lava cake with cream",
    },
  ],

  // Instagram Feed Grid Showcase
  instagram: [
    {
      id: "ig-1",
      url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=600&q=80",
      caption: "Golden hour and delicious bites at Happy Hours ✨",
      likes: "248",
    },
    {
      id: "ig-2",
      url: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
      caption: "Weekend mocktail chill session 🍹",
      likes: "192",
    },
    {
      id: "ig-3",
      url: "https://images.unsplash.com/photo-1579684947550-22e945225d9a?auto=format&fit=crop&w=600&q=80",
      caption: "Crispy, cheesy goodness you just can't resist 🍕",
      likes: "341",
    },
    {
      id: "ig-4",
      url: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
      caption: "Fresh, vibrant salads crafted for healthy cravings 🥗",
      likes: "167",
    },
    {
      id: "ig-5",
      url: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80",
      caption: "Sweet endings make the happiest memories 🍰",
      likes: "419",
    },
    {
      id: "ig-6",
      url: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=600&q=80",
      caption: "Tables filled with laughter and love at Happy Hours ❤️",
      likes: "512",
    },
  ],

  // Location showcase visual
  location: {
    facade: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1000&q=85",
    alt: "Happy Hours welcoming entryway in Patna",
  },
};
