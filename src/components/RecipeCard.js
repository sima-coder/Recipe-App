import React from 'react';
import { Card, CardBody, CardTitle,CardImg, Col, Button} from 'reactstrap';
import { useHistory } from 'react-router-dom';
 
const RecipeCard = ({recipe}) => {

    let history = useHistory();

    /**
   * Redirect to single recipe page
   *
   * @param {Event} e - recipe card button on click event
   */
    const goToRecipe = e => {
        const recipeId = recipe.idMeal;
        console.log(recipeId);
        history.push(`/recipe/${recipeId}`);
    };

    return (
        <>
        <Col lg="4" md="6" sm="12" className="mb-5">
            <Card className="border-1 Recipe-card">
                <CardImg top width="100%" src={recipe.strMealThumb} alt="Recipe Photo" />
                <CardBody className="Recipe-card-body">
                    <CardTitle className="h6 text-white">{recipe.strMeal}</CardTitle>
                    <Button outline color="warning" danger className="rounded-pill w-50" onClick={goToRecipe}>View Recipe</Button>
                </CardBody>
            </Card>
        </Col>
        </>
    );
  }

export default RecipeCard;