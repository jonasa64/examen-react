import React, { useState } from "react";
import Axios from "axios";
import Recipe from "./Recipe";
import Alert from "./Alert";


function Search() {
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [alert, setAlert] = useState("");

    const APP_ID = "4e9f05eb";
    const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";

    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    const getData = async () => {
        if (query !== "") {
            const result = await Axios.get(url);
            if (!result.data.more) {
                return setAlert("Try another food");
            }
            console.log(result);
            setRecipes(result.data.hits);
            setQuery("");
            setAlert("");
        } else {
            setAlert("Please fill the form");
        }
    };

    const onChange = e => setQuery(e.target.value);

    const onSubmit = e => {
        e.preventDefault();
        getData();
    };

    return (
        <div className="App spacing-bottom">
            <h1>Amazing Recipe </h1>
            <form onSubmit={onSubmit} className={`${alert ? 'mt-3' : ''}`} >
                {alert !== "" && <Alert alert={alert} />}

                    <input
                        type="text"
                        name="query"
                        onChange={onChange}
                        value={query}
                        autoComplete="on"
                        placeholder="Favourite Food"
                        id="query"
                    />
                <input type="submit" value="Find somthing Tasty!"/>
            </form>
            <div className="recipes">
                {recipes !== [] && recipes.map((recipe,index) => <Recipe key={index} recipe={recipe} />)}
            </div>





        </div>




    );
}

export default Search;
