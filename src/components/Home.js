import React, {useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Row, Col, Button, UncontrolledCarousel, Card,CardImg, CardBody, CardTitle, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight} from '@fortawesome/free-solid-svg-icons';
import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';


const Home = () => {
    /**
     * carousel items
     */
    const items = [
        {
            src: 'https://www.themealdb.com/images/media/meals/rpvptu1511641092.jpg',
            key: '1'
        },
        {
            src: 'https://www.themealdb.com/images/media/meals/1549542994.jpg',
            key: '2'
        },
        {
            src: 'https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg',
            key: '3'
        }
      ];

      const meats = ["Chicken", "Beef", "Lamb", "Pork", "Goat", "Seafood"];

    const [recipe, setRecipe] = useState( [] );
/**
   * Get a random recipe
   */
    const getRecipe = async () => {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`);
        setRecipe(response.data.meals[0]);
        console.log(response.data.meals[0]);   
    };

    useEffect(() => {
        getRecipe();
    }, []);

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

    const goToCategorytRecipes = e => {
        const recipeCategory = e.currentTarget.dataset.category;
        console.log(e.currentTarget.dataset.category);
        history.push(`/recipes/${recipeCategory}`);
    };


    return(
        <>
        <Row className="d-flex mx-5 mt-5 justify-content-center">
            <Col lg="6" md="12" className="px-0"><UncontrolledCarousel items={items}/></Col>
            <Col lg="6" md="12" className="text-white p-4 bg-danger ml-0">
                <h4>Average person spends 30 minutes to 2 hours deciding what to cook EVERY DAY!</h4>
                <p className="text-justify">Don't be THAT person. Don't waste your time browsing through the recipes for hours only to find out that you're missing a key ingredient.</p> 
                <hr/>
                <img src={icon1} className="rounded-circle border border-secondary border-5 float-left mt-0 mr-5" width="100" height="100"/>
                <div className="text-left">
                    <h5>ONE</h5>
                    <p className="mb-0">Open your fridge and choose a main ingredient for your dish.</p>
                    <small className="text-warning font-italic">2 minutes</small>
                </div>
                <hr/>
                <img src={icon2} className="rounded-circle border border-secondary border-5 float-left mt-0 mr-5" width="100" height="100"/>
                <div className="text-left">
                    <h5>TWO</h5>
                    <p className="mb-0">Put your ingredient into our search box to find a perfect dish.</p>
                    <small className="text-warning font-italic">1 minute</small>
                </div>
                <hr/>
                <img src={icon3} className="rounded-circle border border-secondary border-5 float-left mt-0 mr-5" width="100" height="100"/>
                <div className="text-left">
                    <h5>THREE</h5>
                    <p className="mb-0">Select one of our carefully selected dishes, open up tutorial video and get crackin !</p>
                    <small className="text-success">Done !</small>
                </div>
            </Col>
        </Row>
        <div className="container">
            <h2><span>Recipe Categories</span></h2>
            <div className="row d-flex">
                <Card className="col-lg-3 col-md-4 col-6 border-0 mt-lg-0 mt-n3 mt-0 Category-card"> 
                    <CardImg height="55%" src="https://img.taste.com.au/DgMLJ0K6/taste/2020/01/healthy-breakfast-burger-157745-1.jpg" alt="Card Brekfast category" />
                    <CardBody>
                        <CardTitle className="h4 text-secondary">Breakfast</CardTitle>
                        <Button color="danger rounded-pill w-75" onClick={goToCategorytRecipes} data-category="Breakfast"><FontAwesomeIcon icon={faAngleRight} />Recipes</Button>
                    </CardBody>
                </Card>
                <Card className="col-lg-3 col-md-4 col-6 border-0 Category-card">
                    <CardImg top width="100%" src="https://www.themealdb.com/images/category/starter.png" alt="Card Starter category" />
                    <CardBody>
                        <CardTitle className="h4 text-secondary">Starter</CardTitle>
                        <Button color="danger rounded-pill w-75" onClick={goToCategorytRecipes} data-category="Starter"><FontAwesomeIcon icon={faAngleRight} />Recipes</Button>
                    </CardBody>
                </Card>
                <Card className="col-lg-3 col-md-4 col-6 border-0 Category-card">
                    <CardImg top width="100%" src="https://www.themealdb.com/images/category/side.png" alt="Card BSide category" />
                    <CardBody>
                        <CardTitle className="h4 text-secondary">Side</CardTitle> 
                        <Button color="danger rounded-pill w-75" onClick={goToCategorytRecipes} data-category="Side"> <FontAwesomeIcon icon={faAngleRight} />Recipes</Button>
                    </CardBody>
                </Card>
                <Card className="col-lg-3 col-md-4 col-6 border-0 mt-lg-0 mt-md-5 mt-0 Category-card">
                    <CardImg top width="100%" src="https://www.themealdb.com/images/category/pasta.png" alt="Card Pasta category" />
                    <CardBody>
                        <CardTitle className="h4 text-secondary">Pasta</CardTitle>
                        <Button color="danger rounded-pill w-75" onClick={goToCategorytRecipes} data-category="Pasta"><FontAwesomeIcon icon={faAngleRight} />Recipes</Button>
                    </CardBody>
                </Card>
                <Card className="col-lg-3 col-md-4 col-6 border-0 pt-5 Category-card">
                    <CardImg top width="100%" src="https://www.themealdb.com/images/category/lamb.png" alt="Card Meat category" />
                    <CardBody>
                        <CardTitle className="h4 text-secondary">Meat</CardTitle>
                        {/* <Button color="danger rounded-pill w-75" onClick={goToCategorytRecipes} data-category="Meat"> <FontAwesomeIcon icon={faAngleRight} />Recipes</Button> */}
                        <UncontrolledButtonDropdown>
                            <DropdownToggle caret  color="danger rounded-pill px-5">
                                Recipes
                            </DropdownToggle>
                            <DropdownMenu>
                                { meats.map(meat => ( 
                                    <DropdownItem  className="DropdownItem text-danger" 
                                                   onClick={goToCategorytRecipes} 
                                                   data-category={meat}>{meat}</DropdownItem> )) 
                                }
                            </DropdownMenu>
                        </UncontrolledButtonDropdown>
                    </CardBody>
                </Card>
                <Card className="col-lg-3 col-md-4 col-6 border-0 pt-5 Category-card"> 
                    <CardImg width="80%" src="https://www.themealdb.com/images/category/vegetarian.png" alt="Card Vegetarian category" />
                    <CardBody>
                        <CardTitle className="h4 text-secondary">Vegetarian</CardTitle>
                        <Button color="danger rounded-pill w-75" onClick={goToCategorytRecipes} data-category="Vegetarian"><FontAwesomeIcon icon={faAngleRight} />Recipes</Button>
                    </CardBody>
                </Card>
                <Card className="col-lg-3 col-md-4 col-6 border-0 pt-5 Category-card">
                    <CardImg top width="100%" src="https://www.themealdb.com/images/category/dessert.png" alt="Card Dessert category" />
                    <CardBody>
                        <CardTitle className="h4 text-secondary">Dessert</CardTitle>
                        <Button color="danger rounded-pill w-75" onClick={goToCategorytRecipes} data-category="Dessert"><FontAwesomeIcon icon={faAngleRight} />Recipes</Button>
                    </CardBody>
                </Card>
                <Card className="col-lg-3 col-md-4 col-6 border-0 pt-5 Category-card">
                    <CardImg top width="100%" src="https://www.themealdb.com/images/category/vegan.png" alt="Card vegan category" />
                    <CardBody> 
                        <CardTitle className="h4 text-secondary">Vegan</CardTitle>
                        <Button color="danger rounded-pill w-75" onClick={goToCategorytRecipes} data-category="Vegan"><FontAwesomeIcon icon={faAngleRight} />Recipes</Button>
                    </CardBody>
                </Card>
            </div>
        </div>

        <div className="Recipe-day container">
            <h2><span>Recipe of the day</span></h2>
            <div className="Recipe-day-image m-auto">
                <img src={recipe.strMealThumb} className="shadow-lg" alt="Photo of recipe of the day"/> 
            </div>
            <div className="Recipe-day-text m-auto">
                <h3 className="pt-lg-5 mt-5">{recipe.strMeal}</h3>
                <p className="py-lg-2">Category : {recipe.strCategory}</p>
                <p>Area : {recipe.strArea}</p>
                <h5 className="pt-lg-5 mt-lg-5 pt-md-4 mt-md-4"><a href={recipe.strSource} target="_blank" className="text-warning">URL</a></h5>
                <Button  color="warning" className="rounded-pill mt-4 px-lg-5 px-md-5 px-4" onClick={goToRecipe}>View Recipe</Button>
            </div>
        </div>
            
        </>
    );
}

export default Home;