import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import RecipeCard from './RecipeCard';
import Loader from 'react-loader-spinner';

const RecipesBrowse = () => {

    const name = window.location.pathname.substr(9);
    //console.log(name); 

    const [recipesByCategory, setRecipesByCategory] = useState( [] );
    const [recipesByArea, setRecipesByArea] = useState( [] );
    const [loading, setLoading] = useState(true);

    /**
       * Get the list of recipes having th same category
       */
        const getRecipesByCategory = async () => {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`);
            if(response.data.meals){
                setRecipesByCategory(response.data.meals);
                //console.log(response.data.meals);
                setLoading(false);
            }  
        };
    /**
       * Get the list of recipes having th same kitchen area
       */
        const getRecipesByArea= async () => {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`);
            if(response.data.meals){
                setRecipesByArea(response.data.meals); 
                //console.log(response.data.meals);
                setLoading(false);
            }
        };

        useEffect(() => {
            getRecipesByCategory();
            getRecipesByArea();
        }, []);


    return(
        <>
        { loading ?  <Loader type="Grid" color="#DC3545" height={80} width={80} style={{marginTop: "50px"}} /> :
        ((recipesByCategory !== [] || recipesByArea !== []) &&
            <>
                <Breadcrumb>
                    <BreadcrumbItem ><Link to="/" className="text-danger ml-4">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem ><Link to="/recipes" className="text-danger">Recipes</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{name}</BreadcrumbItem>
                </Breadcrumb>
                <Container>
                    <h2><span>{name} Recipes</span></h2>
                    <Row>
                        { recipesByCategory.map(recipe => ( 
                        <RecipeCard key={recipe.idMeal} 
                                    recipe={recipe} 
                        /> )) }
                
                        { recipesByArea.map(recipe => ( 
                        <RecipeCard key={recipe.idMeal} 
                                    recipe={recipe} 
                        /> )) }
                    </Row>
                </Container>
            </>  
        )}

        </>
    );   
}

export default RecipesBrowse;