//change package json to the below code to go back to the seedDB.js
// "seed": "node scripts/seedDB.js"

let mongoose = require("mongoose");
let recipesModel = require("../models/recipesModel");
let ingredientsModel = require("../models/ingredientsModel");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/recipes_hybrid_DB", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

let recipesSeed = [
    {
        userID:"QHJEh978YHaqyrJyOSrprc34TYV2",
        recipeName: "Chicken Adobo",
        recipeDescription:"This classic adobo recipe is simple to make and famous with all who have tasted it. It is delicious served over rice.",
        recipeImageUrls:["recipeImageUrls goes here", "recipePicLink2 goes here"],
        recipeCategory: "entree",  
        recipeTags: [
            "chicken", "dinner", "easy",
        ],
        ingredients: [
            {
                name: "chicken thigh or drumsticks",
                quantity: 2,
                units: "lb",
            },
            {
                name: "soy sauce",
                quantity: 0.5,
                units: "cup",
            },
            {
                name: "apple cider vinegar",
                quantity: .66,
                units: "cup",
            },
            {
                name: "garlic",
                quantity: 2,
                units: "cloves",
            },
            {
                name: "bay leaves",
                quantity: 2,
                units: "", 
            },
            {
                name: "onion",
                quantity: 1,
                units: "",
            },
            {
                name: "salt",
                quantity: 0,
                units: "to taste",
            },
            {
                name: "pepper",
                quantity: 0,
                units: "to taste",
            }
        ],
        actions: [
            {
                title: "Step 1", 
                text: "Put all ingredients in a pot and cover. Bring pot to boil.",
            },
            {
                title: "Step 2",  
                text: "Cover with lid and simmer for 40 minutes, turning have way through.",
            }
        ]
    }, 
    {
        userID:"QHJEh978YHaqyrJyOSrprc34TYV2", 
        recipeName: "Egg Salad Sandwich",
        recipeDescription:"This sandwich is so easy to make, you'd wish you've made it earlier.",
        recipeImageUrls:["recipeImageUrls goes here"],
        recipeCategory:"entree", 
        recipeTags: [
            "egg", "lunch", "easy", "sandwich",
        ],
        ingredients: [
            {
                name: "eggs",
                quantity: 3,
                units: "",  
            },
            {
                name: "mayo",
                quantity: 1,
                units: "tbspn",
            },
            {
                name: "salt",
                quantity: 0,
                units: "to taste",
            },
            {
                name: "pepper",
                quantity: 0,
                units: "to taste",
            }
        ],
        actions: [
            {
                title:"Step 1",
                text:"Boil eggs for 7-9 minutes. Remove from stove, drain water and fill pan with cold water.",
            },
            {
                title: "Step 2", 
                text: "Let sit and then peel eggs and crushed. Mix the mayo and eggs. Add salt and pepper to taste.",
            }
        ]
    },
    {
        userID:"QHJEh978YHaqyrJyOSrprc34TYV2", 
        recipeName: "Emma's Mom's Soup",
        recipeDescription:"Easy to make soup. Brings back memories of home!",
        recipeImageUrls:["recipeImageUrls goes here"],
        recipeCategory:"soup", 
        recipeTags: [
            "soup", "chicken", "potato", "slow-cook",
        ],
        ingredients: [
            {
                name: "chicken broth",
                quantity: 40,
                units: "oz",  
            },
            {
                name: "cream of chicken soup",
                quantity: 1,
                units: "can",
            },
            {
                name: "potatoes, cubed (Yukon)",
                quantity: 6,
                units: "", 
            },
            {
                name: "cream cheese",
                quantity: 1,
                units: "package",
            },
            {
                name: "bacon bits",
                quantity: 1,
                units: "to taste", 
            },
            {
                name: "black pepper",
                quantity: 0,
                units: "to taste",
            }
        ],
        actions: [
            {
                title:"Step 1",
                text: "Melt cream cheese in a pot.",
            },
            {
                title: "Step 2", 
                text: "Stir in cream of chicken, add broth, potatoes, bacon, pepper, and stir.",
            },
            {
                title: "Step 3",
                text: "Cover with lid and simmer for 3 hours or until potatoes are soft.",
            }
        ]
    },
    {
        userID:"QHJEh978YHaqyrJyOSrprc34TYV2", 
        recipeName: "Sugar Cookie",
        recipeDescription:"The best cookies to enjoy anytime of the year!",
        recipeImageUrls:["recipeImageUrls goes here"],
        recipeCategory:"dessert", 
        recipeTags: [
            "Aunt Betty's", "cookies", "sweets", "holiday", "treats"
        ],
        ingredients: [
            {
                name: "sugar",
                quantity: 1,
                units: "cup",  
            },
            {
                name: "brown sugar",
                quantity: 1,
                units: "cup",
            },
            {
                name: "butter",
                quantity: 2,
                units: "cup",
            },
            {
                name: "eggs",
                quantity: 2,
                units: "",
            },
            {
                name: "vanilla extract",
                quantity: 2,
                units: "tspn",
            },
            {
                name: "flour",
                quantity: 4,
                units: "cup",
            },
            {
                name: "salt",
                quantity: 1,
                units: "tspn",
            },
            {
                name: "baking soda",
                quantity: 1,
                units: "tspn",
            },
            {
                name: "cream of tartar",
                quantity: 2,
                units: "tspn",
            }
        ],
        actions: [
            {
                title: "Prep", 
                text: "Preheat oven to 360F.",
            },
            {
                title: "Mix",
                text: "Cream butter, sugars. Beat in eggs and vanilla.",
            },
            {
                title: "Stir", 
                text: "Stir in dry ingredients. Coat in sugar.",
            },
            {
                title: "Bake", 
                text: "Bake for 10 minutes.",
            },
        ]
    },
    {
        userID:"QHJEh978YHaqyrJyOSrprc34TYV2", 
        recipeName: "Buttermilk Pancakes",
        recipeDescription:"A decadent weekend breakfast for when you want to treat yourself.",
        recipeImageUrls:["recipeImageUrls goes here"],
        recipeCategory:"entree", 
        recipeTags: [
            "breakfast", "treat", "weekend", "pancake",
        ],
        ingredients: [
            {
                name: "flour",
                quantity: 1,
                units: "cup",  
            },
            {
                name: "baking powder",
                quantity: 1,
                units: "tspn",
            },
            {
                name: "baking soda",
                quantity: .5,
                units: "tspn",
            },
            {
                name: "salt",
                quantity: .25,
                units: "tspn",
            },
            {
                name: "sugar",
                quantity: 1.5, 
                units: "tbspn",
            },
            {
                name: "eggs, lightly beaten",
                quantity: 1,
                units: "",
            },
            {
                name: "buttermilk",
                quantity: 1.5,
                units: "cup",
            },
            {
                name: "butter, unsalted",
                quantity: 2,
                units: "tbspn",
            }
        ],
        actions: [
            {
                title:"Dry", 
                text: "Whisk flour, baking soda, baking powder, salt, sugar.",
            },
            {
                title: "Wet",
                text: "Add eggs, buttermilk, butter and whisk to combine. Batter should be lummpy.",
            },
            {
                title: "Fry",
                text: "Heat a lightly oiled frying pan over medium high heat. Pour the batter onto pan, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.",
            }
        ]
    },
    {
        userID:"QHJEh978YHaqyrJyOSrprc34TYV2", 
        recipeName: "Pork Ribs",
        recipeDescription:"A versatile dish to be enjoyed with salad, on a sandwich, or with vegetables and potatoes or rice.",
        recipeImageUrls:["recipeImageUrls goes here"],
        recipeCategory:"entree", 
        recipeTags: [
            "pork", "ribs", "BBQ", 
        ],
        ingredients: [
            {
                name: "smoky pork seasoning (Lund's brand)",
                quantity: 1,
                units: "package",  
            },
            {
                name: "BBQ sauce",
                quantity: 0,
                units: "to taste",
            },
            {
                name: "pork ribs",
                quantity: 1,
                units: "rack", 
            }
        ],
        actions: [
            {
                title:"Prep", 
                text:"Preheat oven to 250F.",
            },
            {
                title: "Rub",
                text: "Rub ribs with seasoning.",
            },
            {
                title: "Wrap",
                text:"Put wire rack in baking sheet. Wrap ribs in foil pack, meat side up on rack.",
            },
            {
                title: "Bake",
                text: "Bake for 2 hours.  Unwrap and bake for another 1-1.5 hours.",
            },
            {
                title: "Baste",
                text: "Turn oven heat to 500F. Baste with sauce on both sides.",
            },
            {
                title: "Finish",
                text: "Bake for 10 minutes and let rest.",
            }
        ]
    },
    {
        userID:"QHJEh978YHaqyrJyOSrprc34TYV2",
        recipeName: "Tortellini Soup",
        recipeDescription:"A cheese, meaty, Italian pasta dish that is sure to remind you of your trip to Italy!",
        recipeImageUrls:["recipeImageUrls goes here"],
        recipeCategory:"entree", 
        recipeTags: [
            "pasta", "italian", "sausage", "cheese",
        ],
        ingredients: [
            {
                name: "Italian sausage, casing removed",
                quantity: 1,
                units: "lb",  
            },
            {
                name: "garlic, minced",
                quantity: 3,
                units: "cloves",
            },
            {
                name: "onion, diced",
                quantity: 1,
                units: "",
            },
            {
                name: "chicken stock",
                quantity: 2,
                units: "cups",
            },
            {
                name: "crushed tomato",
                quantity: 28,
                units: "oz",
            },
            {
                name: "dried basil",
                quantity: .5,
                units: "tspn",
            },
            {
                name: "dried oregano",
                quantity: 0.5,
                units: "tspn",
            },
            {
                name: "red pepper flakes",
                quantity: 0.5,
                units: "tspn",
            },
            {
                name: "cheese tortellini",
                quantity: 9,
                units: "oz",
            },
            {
                name: "half and half",
                quantity: .33,
                units: "cup",
            },
            {
                name: "parmesan, grated",
                quantity: 0.25,
                units: "cup",
            }
        ],
        actions: [
            {
                title:"Step 1", 
                text:"Heat olive oil in big pot and brown sausage. Crumble sausage as it cooks, remove excess fat. Add garlic and onion until brown.",
            },
            {
                title: "Step 2",
                text: "Add stock, tomatoes, spices and 1 cup water. Season with salt and pepper.",
            },
            {
                title: "Step 3",
                text: "Bring to boil and stir in tortellini, reduce heat and simmer for 5-6 minutes.",
            },
            {
                title: "Step 4",
                text: "Add cream and parmesan.  Simmer for 4 minutes.",
            }
        ]
    },
    {
        userID:"QHJEh978YHaqyrJyOSrprc34TYV2", 
        recipeName: "Peach Cobbler",
        recipeDescription:"A summer delight, pairs perfectly with ice cream!",
        recipeImageUrls:["recipeImageUrls goes here"],
        recipeCategory:"dessert", 
        recipeTags: [
            "peach", "dessert", "treat",
        ],
        ingredients: [
            {
                name: "butter, melted",
                quantity: 0.5,
                units: "cup",  
            },
            {
                name: "flour",
                quantity: 1,
                units: "cup",
            },
            {
                name: "sugar",
                quantity: 1,
                units: "cup",
            },
            {
                name: "baking powder",
                quantity: 2,
                units: "tspn",
            },
            {
                name: "salt",
                quantity: 0.5,
                units: "tspn",
            },
            {
                name: "milk, room temp",
                quantity: 0.66,
                units: "cup",
            },
            {
                name: "egg, room temp",
                quantity: 1,
                units: "", 
            },
            {
                name: "peaches, sliced",
                quantity: 28,
                units: "oz",
            },
            {
                name: "sugar",
                quantity: 1,
                units: "cup",
            },
            {
                name: "cinnamon, ground",
                quantity: 1,
                units: "tspn",
            },
            {
                name: "nutmeg, ground",
                quantity: 0.5,
                units: "tspn",
            }
        ],
        actions: [
            {
                title:"Prep", 
                text: "Preheat oven to 350F.",
            },
            {
                title: "Melt",
                text: "Melt butter in pan.",
            },
            {
                title: "Mix",
                text: "Mix dry ingredients. Stir in milk and egg. Pour over melted butter.",
            },
            {
                title: "Combine",
                text: "Combine filling and spread over batter - don't stir.",
            },
            {
                title: "Bake",
                text: "Bake for 35-45 minutes.",
            },
        ]
    },
    {
        userID:"QHJEh978YHaqyrJyOSrprc34TYV2", 
        recipeName: "Zucchini Bread",
        recipeDescription:"Perfect for breakfast or as a snack!",
        recipeImageUrls:["recipeImageUrls goes here"],
        recipeCategory:"dessert", 
        recipeTags: [
            "bread", "snack", "treat",
        ],
        ingredients: [
            {
                name: "flour",
                quantity: 3,
                units: "cups",  
            },
            {
                name: "baking powder",
                quantity: 1,
                units: "tspn",
            },
            {
                name: "baking soda",
                quantity: 1,
                units: "tspn",
            },
            {
                name: "cinnamon",
                quantity: 1,
                units: "tspn",
            },
            {
                name: "salt",
                quantity: 1,
                units: "tspn",
            },
            {
                name: "sugar",
                quantity: 1.5,
                units: "cups",
            },
            {
                name: "zuchini, grated",
                quantity: 2,
                units: "cups",
            },
            {
                name: "vanilla extract",
                quantity: 1,
                units: "tspn",
            },
            {
                name: "vegetable oil",
                quantity: 1,
                units: "cup",
            },
            {
                name: "eggs, beaten",
                quantity: 1,
                units: "",
            }
        ],
        actions: [
            {
                title:"Step 1", 
                text: "Preheat the oven to 350F.",
            },
            {
                title: "Step 2",
                text: "Sift flour, baking powder, baking soda, cinnamon, salt and sugar.",
            },
            {
                title: "Step 3",
                text: "In a separate bowl, combine vanilla, oil, and eggs.",
            },
            {
                title: "Step 4",
                text: "Add the dry and wet ingredients together and fold in the zucchini.",
            },
            {
                title: "Step 5",
                text: "Pour into bread loaf container and bake for 1 hour.",
            }
        ]
    },
    {
        userID:"3X77tE00c9TQk8QqlGdc51IrfXu1", 
        recipeName: "Homemade Italian Turkey Sausage",
        recipeDescription:"",
        recipeImageUrls:["recipeImageUrls goes here"],
        recipeCategory:"entree", 
        recipeTags: [
            "Italian", "sausage",
        ],
        ingredients: [
            {
                name: "dried oregano",
                quantity: 1,
                units: "tspn",  
            },
            {
                name: "fennel seed, crushed",
                quantity: 1.5,
                units: "tspn",
            },
            {
                name: "garlic powder",
                quantity: 2,
                units: "tspn",
            },
            {
                name: "lean ground turkey",
                quantity: 1,
                units: "lb",
            },
            {
                name: "black pepper",
                quantity: 0.5,
                units: "tspn",
            },
            {
                name: "salt",
                quantity: 1,
                units: "tspn",
            },
            {
                name: "sugar",
                quantity: 1.5,
                units: "tspn",
            }
        ],
        actions: [
            {
                title:"Step 1", 
                text: "In a bowl, combine the turkey, garlic powder, fennel seed, sugar, salt, oregano and pepper.",
            },
            {
                title: "Step 2",
                text: "Cover and refrigerate for at least 8 hours or overnight.",
            },
            {
                title: "Step 3",
                text: "Shape into eight patties.",
            },
            {
                title: "Step 4",
                text:  "Coat nonstick pan with cooking spray and cook for 3 minutes on each side or until meat thermometer reads 165F.",
            },
        ]
    },
    {
        userID:"3X77tE00c9TQk8QqlGdc51IrfXu1", 
        recipeName: "Country Potato Pancake",
        recipeDescription:"",
        recipeImageUrls:["recipeImageUrls goes here"],
        recipeCategory:"entree", 
        recipeTags: [
            "pancake", "potato", "breakfast", "savory",
        ],
        ingredients: [
            {
                name: "baking powder",
                quantity: 1,
                units: "tspn",  
            },
            {
                name: "eggs, lightly beaten",
                quantity: 2,
                units: "",
            },
            {
                name: "all-purpose flour",
                quantity: 2,
                units: "tbspn",
            },
            {
                name: "onion, grated",
                quantity: 1,
                units: "tbspn",
            },
            {
                name: "larg potatoes, peeled",
                quantity: 3,
                units: "",
            },
            {
                name: "salt",
                quantity: 1,
                units: "tspn",
            },
            {
                name: "vegetable oil",
                quantity: 1,
                units: "tspn"
            }
        ],
        actions: [
            {
                title:"Step 1", 
                text: "Finely grate potatoes. Drain any liquid. Add eggs, onion, flour, salt and baking powder.",
            },
            {
                title: "Step 2",
                text:"In a frying pan, add oil to the depth of 1/8 in. Heat over medium-high (375F).",
            },
            {
                title: "Step 3",
                text: "Drop batter by heaping tablespoonfuls in hot oil. Flatten to form patties.",
            },
            {
                title: "Step 4",
                text:  "Fry until golden brown then turn and cook the other side.",
            },
        ]
    },
    {
        userID:"3X77tE00c9TQk8QqlGdc51IrfXu1",
        recipeName: "Chicken Tacos - the Tahiti Way",
        recipeDescription:"",
        recipeImageUrls:["recipeImageUrls goes here"],
        recipeCategory:"entree", 
        recipeTags: [
            "tacos", "chicken", "Tahiti", "slow-cook",
        ],
        ingredients: [
            {
                name: "black pepper",
                quantity: 0,
                units: "to taste",  
            },
            {
                name: "chicken breast, boneless",
                quantity: 6,
                units: "",
            },
            {
                name: "cilantro, chopped",
                quantity: 1,
                units: "tbspn",
            },
            {
                name: "corn tortillas",
                quantity: 10,
                units: "",
            },
            {
                name: "garlic, diced",
                quantity: 2,
                units: "cloves",
            },
            {
                name: "large onion, sliced",
                quantity: 0.5,
                units: "",
            },
            {
                name: "pepperoncini pepper",
                quantity: 16,
                units: "oz",
            }
        ],
        actions: [
            {
                title:"Step 1", 
                text: "Combine everything including the ENTIRE jar of peppers, juice and all, but the tortillas into a slow cooker.",
            },
            {
                title: "Step 2",
                text: "Cook on low 5 hours.",
            },
            {
                title: "Step 3",
                text:  "Shred chicken with 2 forks. Mix well with everything in the pot.",
            },
            {
                title: "Step 4",
                text: "Heat tortillas till soft. Served the chicken on the tortilla. Enjoy!",
            }
        ]
    },
    {
        userID:"3X77tE00c9TQk8QqlGdc51IrfXu1", 
        recipeName: "Tomato-Mint Quinoa Salad",
        recipeDescription:"A delicious summer delight using fresh ingredients from the farmer's markets.",
        recipeImageUrls:["recipeImageUrls goes here"],
        recipeCategory:"entree", 
        recipeTags: [
            "salad", "tomato", "quinoa",
        ],
        ingredients: [
            {
                name: "water",
                quantity: 2.5,
                units: "cups",  
            },
            {
                name: "quinoa",
                quantity: 1.25,
                units: "cups",
            },
            {
                name: "raisins",
                quantity: .75,
                units: "cups",
            },
            {
                name: "salt",
                quantity: 1,
                units: "pinch",
            },
            {
                name: "medium tomato, diced",
                quantity: 2,
                units: "",
            },
            {
                name: "medium onion, minced",
                quantity: 1,
                units: "",
            },
            {
                name: "radish, quartered",
                quantity: 10,
                units: "",
            },
            {
                name: "cucumber, diced",
                quantity: .5,
                units: "",
            },
            {
                name: "sliced almonds, toasted",
                quantity: 2,
                units: "tbspn",
            },
            {
                name: "fresh parsley, chopped",
                quantity: 2,
                units: "tbspn",
            },
            {
                name: "ground cumin",
                quantity: 1,
                units: "tspn",
            },
            {
                name: "lime juice",
                quantity: .25,
                units: "cup",
            },
            {
                name: "sesame oil",
                quantity: 2,
                units: "tbspn",
            },
            {
                name: "salt",
                quantity: .25,
                units: "tspn to taste",
            }
        ],
        actions: [
            {
                title:"Step 1", 
                text: "Bring water to boil in a small saucepan. Pour in quinoa, raisins, and a pinch of salt. Cover, and let simmer for 12 to 15 minutes, then remove from heat, and allow to cool to room temperature.",
            },
            {
                title: "Step 2",
                text: "Toss together the tomatoes, onion, radish, cucumber, and almonds in a large bowl. Stir in the cooled quinoa, then season with mint, parsley, cumin, lime juice, sesame oil, and salt. Chill 1 to 2 hours before serving.",
            }
        ]
    },
    {
        userID:"3X77tE00c9TQk8QqlGdc51IrfXu1",
        recipeName: "Mapo Tofu",
        recipeDescription:"A go-to staple for the days when when you don't have anything in the fridge except for tofu and green onions. Goes well with rice!",
        recipeImageUrls:["recipeImageUrls goes here"],
        recipeCategory:"entree", 
        recipeTags: [
            "tofu", "vegetarian", "sichuan", "easy",
        ],
        ingredients: [
            {
                name: "tofu - medium firm, cubed",
                quantity: 16,
                units: "oz",  
            },
            {
                name:  "mapo bean curd seasoning",
                quantity: 1,
                units: "pack of 150gm",
            },
            {
                name: "green onion, chopped",
                quantity: 2,
                units: "",
            },
            {
                name: "vegetable oil",
                quantity: 1,
                units: "tspn",
            }
        ],
        actions: [
            {
                title:"Step 1",
                text: "Heat vegetable oil in medium heat pan. Add seasoning, tofu, and green onions to the pan.",
            },
            {
                title: "Step 2",
                text: "Mix all ingredients and when throughly heated, served with rice.",
            }
        ]
    }
];

//Is there anything we need to do for the following below?
//Only thing that I see different is the totalUseCount...?
//ingredients seed
let ingredientsSeed = [
    {
        name:"pasta",
        ingredientIconLink: "pasta icon link example here",
        ingredientCategory: "pasta ingredient category here",
        ingredientCategoryIconLink:"ingredient category icon link here",
        totalUsedCount:15,
    },
    {
        name: "flour",
        totalUsedCount: 1,
        ingredientCategory: "baked goods"
    },
    {
        name: "eggs",
    },
    {
        name: "milk",
    },
];


async function seedAsyncFunction() {
    try {
        await recipesModel.deleteMany();
        await ingredientsModel.deleteMany();
        await recipesModel.insertMany(recipesSeed);
        await ingredientsModel.insertMany(ingredientsSeed);
        process.exit(0);
    } catch (err) {
        console.log(err);
    }
}
seedAsyncFunction();