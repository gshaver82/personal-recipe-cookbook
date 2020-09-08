import React, { useState } from "react";
import API from "../../utils/API";
import { UlList, RecipeListItem, IngredientsListItem, NestedIngredientsList, NestedTagsList, } from "../../component/RecipeList/index";

function Genepagetest() {
    const [recipes, setRecipes] = useState([]);
    const [ingredients, setIngredients] = useState([]);

    let [newRecipe, setNewRecipe] = useState([
        {
            userID: "",
            recipeName: "",
        },
    ]);

    const recipeSubmit = event => {
        event.preventDefault();
        API.getAllRecipes()
            .then(res => setRecipes(res.data))
            .catch(err => console.log(err));
    };
    const ingredientsSubmit = event => {
        event.preventDefault();
        API.getAllIngredients()
            .then(res => setIngredients(res.data))
            .catch(err => console.log(err));
    };

    const createRecipeSubmit = event => {
        event.preventDefault();

        console.log('creating dummy object');

        function setDummyObject() {
            setNewRecipe({
                userID: "usernumber1",
                recipeName: "asdfasdfasdf pancakes",
                recipeDescription: "this is a recipe description field",
                recipeImageUrls:
                    [
                        "recipePicLink goes here",
                        "recipePicLink2 goes here",
                    ],
                recipeCategory: "baked recipes",
                recipeTags: [
                    "dessert", "breakfast"
                ],
                ingredients: [
                    {
                        name: "flour",
                        quantity: 2,
                        units: "cups"
                    },
                    {
                        name: "eggs",
                        quantity: 2,
                        units: "Grade A"
                    },
                    {
                        name: "Sugar",
                        quantity: 3,
                        units: "gallons"
                    }
                ],
                actions: [
                    {
                        title: "mix",
                        text: "mix and blah blah blah",
                    }
                ]
            })
        };

        setDummyObject();

        API.createRecipe(newRecipe)
            .catch(err => console.log(err));
    };

    const createRecipeUpdateSubmit = event => {
        event.preventDefault();
        API.updateRecipe()
            .then(res => setNewRecipe(res.data))
            .catch(err => console.log(err));
    };
    const deleteRecipe = event => {
        event.preventDefault();
        // manually put the recipe id here to verify this works 
        API.deleteRecipe("5f5550b4ea82aa49a4f93a84")
        .catch(err => console.log(err));
    };
    
    const oneRecipe = event => {
        event.preventDefault();
        API.getOneRecipe("5f5550b4ea82aa49a4f93a84")
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    };

    return (
        <div>

            <h1>Genes testing page</h1>
            <button onClick={deleteRecipe} className="btn btn-primary">
                {" "}deleteRecipe Test{" "}
            </button>

            <button onClick={createRecipeSubmit} className="btn btn-primary">
                {" "}create Test{" "}
            </button>

            <button onClick={createRecipeUpdateSubmit} className="btn btn-primary">
                {" "}Update Test{" "}
            </button>

            <button onClick={oneRecipe} className="btn btn-primary">
                {" "}One recipe{" "}
            </button>
            <button onClick={recipeSubmit} className="btn btn-primary">
                {" "}RecipeList{" "}
            </button>
            <UlList>
                {recipes.map(recipe => {
                    return (<div>
                        <RecipeListItem
                            key={recipe._id}
                            recipeName={recipe.recipeName}
                            recipeDescription={recipe.recipeDescription}
                            ingredientPictureLink={recipe.ingredientPictureLink}
                            recipeCategory={recipe.recipeCategory}
                            recipeImageUrls={recipe.recipeImageUrls[0]}
                            title={recipe.actions[0].title}
                            text={recipe.actions[0].text}
                        />
                        <h2>recipeTags UL list</h2>
                        <UlList>
                            {recipe.recipeTags.map(tags => {
                                return (
                                    <NestedTagsList
                                        key={tags._id}
                                        recipeTags={tags}
                                    />

                                );
                            })}

                        </UlList>
                        <h2>ingredients UL list</h2>
                        <UlList>
                            {recipe.ingredients.map(ingredients => {
                                return (
                                    <NestedIngredientsList
                                        key={ingredients._id}
                                        name={ingredients.name}
                                        quantity={ingredients.quantity}
                                        units={ingredients.units}
                                    />

                                );
                            })}

                        </UlList>
                    </div>
                    );
                })}

            </UlList>

            <button onClick={ingredientsSubmit} className="btn btn-primary">
                {" "}Ingredients List{" "}
            </button>
            <UlList>
                {ingredients.map(ingredient => {
                    return (
                        <IngredientsListItem
                            key={ingredient._id}
                            name={ingredient.name}
                            ingredientIconLink={ingredient.ingredientIconLink}
                            ingredientCategory={ingredient.ingredientCategory}
                            ingredientCategoryIconLink={ingredient.ingredientCategoryIconLink}
                            totalUsedCount={ingredient.totalUsedCount}

                        />
                    );
                })}
            </UlList>
        </div>
    );
}
export default Genepagetest;