import React from 'react';
import RecipeCard from './RecipeCard';
import { Container, Row } from 'reactstrap';

 
const RecipesSearch= ({recipes}) => {
    return (
        <>
        <Container>
            <Row>
                { recipes.map(recipe => ( 
                <RecipeCard key={recipe.idMeal} 
                    recipe={recipe} 
                /> )) }
            </Row>
        </Container>
        </>
    );
  }

export default RecipesSearch;