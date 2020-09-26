import React from "react";
import TableControl from "../DynamicTable/TableControl";

function RecipeHistory({ recipe, flipCard }) {

    return (
        <>
            <div className="d-flex justify-content-between">
                <h2 className="display-2 font-brand display-3-small">
                    {recipe.name}
                </h2>
                <div>
                    <button type="button" className="rb-btn-subtle font-book-italic mx-3 mt-2" onClick={() => flipCard()}>
                        Recipe
                    </button>
                </div>
            </div>
            <div>
                <h1 className="rb-btn">History</h1>
                <TableControl comments={recipe.comments} header={true}></TableControl>
            </div>
        </>
    );
}

export default RecipeHistory;
