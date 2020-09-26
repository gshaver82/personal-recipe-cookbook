import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import test from '../../firebase';
import ls from 'local-storage';
import RecipeCard from "../../component/RecipeBox/RecipeCard";
import AddRecipe from "../../component/RecipeBox/AddRecipe";
import Modal from "../../component/Modal/Modal";
import API from "../../utils/API";
import Box from "../../component/RecipeBox/Box"
import Header from "../../component/RecipeBox/Header"
import Navbar from "../../component/RecipeBox/Navbar"
import CardComplete from "../../component/CreateRecipe/CardComplete"
import '../../component/Modal/Modal.css';
import RecipeHistory from "../../component/Make/RecipeHistory";
import { Bounce, Zoom } from "react-awesome-reveal";

const firebase = test.firebase_;

function RecipeBox() {

    const user = firebase.auth().currentUser.uid
    const [display, setDisplay] = useState({
        card: false,
        warning: false
    });
    // Setting component intial state
    const [recipes, setRecipes] = useState([]);
    const [form, setForm] = useState({
        input: "",
        filterBy: ""
    });
    const [selected, setSelected] = useState({ index: "" });
    const [flip, setFlip] = useState(false);
    const history = useHistory();

    // Loads recipes and set them to recipes
    function loadRecipes() {
        API.getUserRecipes(user)
            .then(res => {
                setRecipes(res.data);
            })
            .catch(err => console.log(err));
    };

    // Load all recipes and store with setRecipes
    useEffect(() => {
        loadRecipes();
        selectRecipe();
    }, [])

    function onClick(e) {
        const index = e.currentTarget.dataset.index;
        // console.log("this is a test", index)
        setSelected({ index: index })
        setDisplay({...display, card:true});
    }

    function selectRecipe(recipe) {
        if (!recipe) {
            ls.remove("recipe")
        } else {
            ls.set("recipe", recipe)
        }
    }

    function deleteConfirmation (event, id) {
        event.stopPropagation()
        setDisplay({...display, warning:id })
    }

    function deleteRecipe() {
        API.deleteRecipe(display.warning)
            .then(res => loadRecipes())
            .then(setDisplay({...display, warning:false }))
            .catch(err => console.log(err));
    }

    const selectAndGo = (route) => {
        selectRecipe(recipes[selected.index]);
        switch (route) {
            case "make":
                history.push('/make');
                return;
            case "edit":
                history.push('/create/info');
                return;
            default:
                return;
        }
    }

    const handleInputChange = event => {
        const value = event.target.value;
        setForm({ ...form, input: value });
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        if (form.input) {
            setForm({
                ...form,
                filterBy: form.input,
                input: ""
            });
        } else {
            // some kind of warning. 
        }
    };

    function categorySearch(event) {
        event.stopPropagation();
        event.preventDefault();
        setForm({
            ...form,
            filterBy: event.currentTarget.textContent.toLowerCase(),
            input: ""
        });
    };

    const clearForm = event => {
        event.preventDefault();
        setForm({
            input: "",
            filterBy: ""
        });
    }

    const flipCard = () => {
        setFlip(!flip);
    }

    function filterRecipes(recipes, filterBy) {
        const arrayFiltered = [];
        for (const item of recipes) {
            if (Object.values(item).toString().toLowerCase().includes((filterBy).toLowerCase()) || !filterBy) {
                arrayFiltered.push(item);
            }
        }
        return (arrayFiltered);
    }

    return (
        <Box>
            <Header
                firebase={firebase}
                formInput={form.input}
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
                clearForm={clearForm}
            />
            {/* Top Secret */}
            <Navbar form={form} setForm={setForm}/>
            <section >
                <div className="row row-cols-lg-3 row-cols-xl-4">
                    <AddRecipe />
                    {recipes.length ? (
                        <>
                            {filterRecipes(recipes, form.filterBy).map((recipe, index) => {
                                return (<Zoom><RecipeCard
                                    recipe={recipe}
                                    deleteRecipe={deleteConfirmation}
                                    onClick={onClick}
                                    key={(index + 1)}
                                    index={index}
                                    categorySearch={categorySearch}
                                /></Zoom>)
                            })}
                        </>
                    ) : (<h3>No Recipes to Display</h3>)
                    }
                    {/* This will have more descriptive recipe content */}
                    {display.card && (<Modal closeModal={() => setDisplay({...display, card:false})}>
                        {flip ? <RecipeHistory flipCard={flipCard} recipe={recipes[selected.index]} /> : <CardComplete flipCard={flipCard} recipe={recipes[selected.index]} />}
                        <button type="button" onClick={() => selectAndGo("make")} className="rb-btn btn-info mb-3 text-center">Make
                        </button>
                        <button type="button" onClick={() => selectAndGo("edit")} className="rb-btn btn-secondary text-center">Edit Recipe
                        </button>
                        </Modal>)}
                </div>
            </section>
            {display.warning && (<Modal closeModal={() => setDisplay({...display, warning:false})}>
                <span className="divider-color"></span>
                <h3 className="font-book text-center mb-0">Are you sure you want to delete this recipe?</h3>
                <span className="font-book-italic text-center divider">This cannot be undone</span>
                <button className="rb-btn btn-danger" onClick={() => deleteRecipe()}>delete</button>
            </Modal>)}
        </Box>
    );
}

export default RecipeBox;