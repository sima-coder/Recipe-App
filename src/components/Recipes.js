import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import axios from 'axios';
import RecipesSearch from'./RecipesSearch';
import Alert from './Alert';
import Loader from 'react-loader-spinner';

const Recipes = () => {

    const searchQuery= window.location.search.substr(7);
    // console.log(window.location.search.substr(7));

    const [query, setQuery] = useState(searchQuery);

    const [alert, setAlert] = useState("");

    const [recipes, setRecipes] = useState([]);

    const [loading, setLoading] = useState(true);

    const getRecipes = async () => {
        if (query !== "") {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`);
            if(!response.data.meals){
                setLoading(false);
                return setAlert(`No recipe with an ingredient called "${searchQuery}"`);
            }
            setRecipes(response.data.meals);
            setAlert("");
            setQuery(""); 
        }
        else{
            setAlert('Please fill the form to find your recipe');
        }
        setLoading(false);
    };


    useEffect(() => {
        getRecipes();
    }, []);

    return(
        <>
        { alert!=="" && <Alert alert={alert}/> }

                <Breadcrumb>
                    <BreadcrumbItem ><Link to="/" className="text-danger ml-4">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Recipes</BreadcrumbItem>
                </Breadcrumb>
    
                {
                    (recipes === null || loading) ? 
                        <Loader type="Grid" color="#DC3545" height={80} width={80} style={{marginTop: "50px"}} /> :
                        <RecipesSearch recipes={recipes} />                       
                }

                {/* { recipes !== []  && <RecipesSearch recipes={recipes} /> } */}
        </>
    );
}

export default Recipes;
