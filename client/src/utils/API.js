import axios from "axios";
import test from '../firebase';

// Initialize an instance of axios, pass in the header type.
const firebase = test.firebase_;
const authorize = axios.create();

// Observing firebase.auth() to listen signin/signout.
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        console.log("[API] User is signed in");
        // Getting an authorization token from Fireback to send to the backend.
        firebase.auth().currentUser.getIdToken(true).then(function (idToken) {
            // Intercepting any request and appending token to the header.
            // This somehow doesn't work.
            authorize.interceptors.request.use(function (config) {
                config.headers.authorization = idToken;
                return config;
            });
        }).catch(function (error) {
            console.log("[API] Error:", error);
        });
    } else {
        console.log("[API] User is not signed in");
    }
});

// The getRecipes method retrieves recipes from the server
export default {
    getAllRecipes: function () {
        return authorize.get("/api/recipes");
    },
    createRecipe: function (newRecipe) {
        console.log("[API] newRecipe", newRecipe);
        return authorize.post("/api/recipes", newRecipe);
    },
    getOneRecipe: function (_id) {
        return authorize.get("/api/recipes/" + _id);
    },
    getUserRecipes: function (userID) {
        console.log("[API] getting all recipes by specified user", userID);
        return authorize.get("/api/recipes/user/" + userID);
    },
    deleteRecipe: function (_id) {
        console.log("[API] deleteRecipe", _id);
        return authorize.delete("/api/recipes/" + _id);
    },

    getAllIngredients: function () {
        return authorize.get("/api/Ingredients");
    },
};
