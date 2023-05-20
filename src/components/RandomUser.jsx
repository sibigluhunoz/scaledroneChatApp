export function randomName() {
    const adjectives = [
      "happy", "sad", "angry", "content", "excited", "calm", "peaceful", "hopeful",
      "melancholy", "reflective", "serene", "joyful", "anxious", "blessed", "playful",
      "determined", "grateful", "nostalgic", "blissful", "satisfied", "energetic",
      "thoughtful", "optimistic", "tranquil", "loving", "courageous", "curious",
      "inspired", "tender", "mellow", "dreamy", "fearful", "rejuvenated", "romantic",
      "thankful", "gloomy", "serene", "pensive", "sympathetic", "gleeful", "irritable",
      "contented", "receptive", "fascinated", "comfortable", "spirited", "humble",
      "silly", "restful", "vibrant", "sentimental", "fulfilled", "cheerful", "graceful",
      "merry", "mournful", "refreshed", "enchanting", "easygoing", "insightful"
    ];
    const nouns = [
      "Apple", "Banana", "Orange", "Grape", "Mango", "Blueberry", "Cherry", "Strawberry",
      "Watermelon", "Pineapple", "Plum", "Peach", "Apricot", "Fig", "Pear", "Coconut",
      "Kiwi", "Raspberry", "Blackberry", "Melon", "Lemon", "Avocado", "Pomegranate", "Quince",
      "Tomato", "Cucumber", "Carrot", "Broccoli", "Cauliflower", "Potato", "Onion", "Garlic",
      "Mushroom", "Zucchini", "Corn", "Pea", "Spinach", "Lettuce", "Cabbage", "Kale",
      "Radish", "Asparagus", "Beet", "Parsnip", "Pumpkin", "Squash", "Turnip", "Artichoke",
      "Peanut", "Almond", "Cashew", "Walnut", "Pistachio", "Hazelnut", "Macadamia", "Chestnut",
      "Sesame", "Flaxseed", "Quinoa", "Rice", "Oats", "Barley", "Wheat", "Millet",
      "Bulgur", "Couscous", "Spaghetti", "Linguine", "Fettuccine", "Penne", "Ravioli", "Lasagna",
      "Pizza"
    ];

    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    return adjective + noun;
  }
  
 export function randomColor() {
    return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
  }

