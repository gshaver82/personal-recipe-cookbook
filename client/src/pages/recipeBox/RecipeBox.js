import React, { useEffect, useState } from "react";
import test from '../../firebase';
import RecipeCard from "../../component/RecipeBox/RecipeCard";
import AddRecipe from "../../component/RecipeBox/AddRecipe";
import Modal from "../../component/Modal/Modal";
import API from "../../utils/API";
import Box from "../../component/RecipeBox/Box"
import Header from "../../component/RecipeBox/Header"
import CardComplete from "../../component/CreateRecipe/CardComplete"
import '../../component/Modal/Modal.css';

const firebase = test.firebase_;

function RecipeBox() {

    const user = firebase.auth().currentUser.uid
    const [status, setStatus] = useState(false);
    // Setting component intial state
    const [recipes, setRecipes] = useState([]);
    const [form, setForm] = useState({
        input: "",
        filterBy: ""
    });
    const [selected, setSelected] = useState({
        index: ""
    });

    // Load all recipes and store with setRecipes
    useEffect(() => {
        loadRecipes()
    }, [])

    // Loads recipes and set them to recipes
    function loadRecipes() {
        API.getAllRecipes(user)
            .then(res => {
                setRecipes(res.data);
                // console.log(res.data);
            })
            .catch(err => console.log(err));
    };

    function onClick (e) {
        const index = e.currentTarget.dataset.index;
        // console.log("this is a test", index)
        setSelected({index: index})
        setStatus(true);
    }

    function deleteRecipe(event, id) {
        event.stopPropagation()
        API.deleteRecipe(id)
            .then(res => loadRecipes())
            .catch(err => console.log(err));
    }

    const handleInputChange = event => {
        const value = event.target.value;
        setForm({...form, input: value});
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
            <header className="d-flex align-items-center">
                <h1 className="font-brand">My Recipe Box</h1>
                <Header 
                    firebase={firebase}
                    formInput={form.input}
                    handleInputChange={handleInputChange}
                    handleFormSubmit={handleFormSubmit}
                    clearForm={clearForm}
                />
            </header>
            <section >
                <div className="row row-cols-md-4">
                    <div className="col my-2 font-book recipe-card">
                        <AddRecipe />
                    </div>
                    {/* Cards should fill page based on number of recipes users have */}
                    {/* Example Card... needs data to be added from DB */}
                    {recipes.length ? (
                        <>
                            {filterRecipes(recipes, form.filterBy).map((recipe, index)=> {
                                return (<RecipeCard
                                    recipe={recipe}
                                    deleteRecipe={deleteRecipe}
                                    onClick={onClick}
                                    key={(index + 1)}
                                    index={index}
                                    categorySearch={categorySearch}
                                />)
                            })}
                        </>
                    ) : (<h3>No Recipes to Display</h3>)
                    }
                    {/* This will have more descriptive recipe content */}
                    {status && (<Modal closeModal={() => setStatus(false)}>
                        <CardComplete recipe={recipes[selected.index]}></CardComplete>
                    </Modal>)}
                </div>
            </section>
        </Box>
    );
}

export default RecipeBox;