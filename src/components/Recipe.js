import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import axios from 'axios';
import ReactPlayer from "react-player";
import { useHistory } from 'react-router-dom';

const Recipe = () => {
    let history = useHistory();

    /**
       * Redirect to single recipe page
       *
       * @param {Event} e - recipe card button on click event
       */
        const goToRecipeCategory = e => {
            const recipeCategory = recipe.strCategory;
            //console.log(recipeCategory);
            history.push(`/recipes/${recipeCategory}`);
        };

    const [recipe, setRecipe] = useState([]);
    const recipeId = window.location.pathname.substr(8);


    const getRecipe = async () => {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`);
        setRecipe(response.data.meals[0]);
    };

    useEffect(() => {
       getRecipe(); 
       //console.log(recipe);
    },[]);


    const ingredientsRenderer = () => {
        let ingredients = [];
        for (let ing in recipe) {
          if (ing.includes('Ingredient') && recipe[ing] && recipe[ing].length) {
            let ingIndex = ing.split('strIngredient')[1];
            let measure = recipe[`strMeasure${ingIndex}`];
            let ingredient = `${recipe[ing]} - ${measure}`;
            ingredients.push(ingredient);
          }
        }
        return ingredients;
      };

    return(
        <>
            <Breadcrumb>
                <BreadcrumbItem ><Link to="/" className="text-danger ml-4">Home</Link></BreadcrumbItem>
                <BreadcrumbItem ><Link to="/recipes" className="text-danger">Recipes</Link></BreadcrumbItem>
                <BreadcrumbItem><a href="" onClick={goToRecipeCategory} className="text-danger">{recipe.strCategory}</a></BreadcrumbItem>
                <BreadcrumbItem active>{recipe.strMeal}</BreadcrumbItem>
            </Breadcrumb>

            <div className="container-fluid">
                <div className="Recipe-title">{recipe.strMeal}</div>
                <Container className="Recipe">
                    <Row className="Recipe-media">
                        <Col lg="6" md="12" sm="12" className="mb-lg-0 mb-md-5 mb-5">
                            <img src={recipe.strMealThumb} alt="Recipe Photo" width="550" height="360" /> 
                        </Col>  
                        <Col lg="6" md="12" sm="12">
                            <ReactPlayer url={recipe.strYoutube} width="700"/>
                        </Col>
                    </Row> 
                    <Row>  
                        <Col lg="4" md="12" sm="12" className="Recipe-ingredients border-1 shadow">
                            <h3 className="text-warning h2 p-4">Ingredients</h3>
                                {ingredientsRenderer().map((item, index) => {
                                return <p key={index}>{item}</p>
                            })}
                        </Col> 
                        <Col lg="7" md="12" sm="12" className="text-justify Recipe-instructions">
                            <i class="fas fa-list-ol"></i>
                            <h3 className="text-warning text-center h2 p-4"> Instructions</h3>
                            {recipe.strInstructions}
                        </Col>  
                    </Row>
            </Container>
           /</div> 
        </>
    );
}

export default Recipe;