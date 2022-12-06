import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import appLogo from '../images/myRecipes-logo.png';
import { Container, Row, Col, Form, Button, Input, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle, } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';


const Header = (props) => { 
  console.log(props.history);

  const mealByType = ["Breakfast", "Starter", "Side", "Pasta", "Seafood", "Dessert"];
  const mealByIngredient = ["Chicken", "Beef", "Lamb", "Pork", "Goat"];
  const mealByStyle = ["Vegetarian", "Vegan", "Miscellaneous"];
  const mealByArea1 = ["American", "British", "Canadian", "Chinese", "Dutch", "Egyptian", "French", "Greek", "Indian", "Irish", "Italian", "Jamaican","Japanese"];
  const mealByArea2 = ["Kenyan", "Malaysian", "Mexican", "Moroccan", "Polish", "Russian", "Spanish", "Thai", "Tunisian", "Turkish", "Unknown", "Vietnamese"];

  const [query, setQuery] = useState("");
  
  const onChange = e => setQuery(e.target.value);

  const onSubmit = () => {
    props.history.push(`/recipes?query=${query}`); 
  };

  const goToCategorytRecipes = e => {
    const name= e.currentTarget.dataset.name
    //console.log(e.currentTarget.dataset.name);
    props.history.push(`/recipes/${name}`);
    window.location.reload(false);
  };


  return (
    <>
    <Container>
      <Row className="d-flex align-items-center justify-content-lg-between justify-content-md-center justify-content-center">
        <Col lg="4" md="6" sm="12"><Link to="/" className="App-title"><img src={appLogo} alt="Logo of Recipe App"/></Link></Col> 

        <Col lg="3" md="12" sm="12"><UncontrolledButtonDropdown>
          <DropdownToggle outline caret color="danger rounded-pill px-4 w-50 my-lg-0 mt-2 mb-4">
              Browse
          </DropdownToggle>
          <DropdownMenu className="Mega-menu container pl-lg-4 pr-lg-0 px-md-3 px-2"> 
            <div className="row">
              <div className="Menu col-lg-4 col-md-12 col-12">
                <DropdownItem header className="text-center bg-danger text-white Menu-header">Categories</DropdownItem>
                <DropdownItem disabled>Meal Type</DropdownItem>
                { mealByType.map(type => ( 
                  <DropdownItem  className="dropdownItemCategory" 
                                 onClick={goToCategorytRecipes} 
                                 data-name={type}>{type}</DropdownItem> )) 
                }
                <DropdownItem disabled>Ingredient</DropdownItem>
                { mealByIngredient.map(ingredient => ( 
                  <DropdownItem  className="dropdownItemCategory" 
                                 onClick={goToCategorytRecipes} 
                                 data-name={ingredient}>{ingredient}</DropdownItem> )) 
                }
                <DropdownItem disabled>Cooking style</DropdownItem>
                { mealByStyle.map(style => ( 
                  <DropdownItem  className="dropdownItemCategory" 
                                 onClick={goToCategorytRecipes} 
                                 data-name={style}>{style}</DropdownItem> )) 
                }
              </div>
              <div className="Menu col-lg-8 col-md-12 col-12 mt-lg-0 mt-md-4 mt-4">
                <div className="row">
                  <DropdownItem header className="col-11 bg-danger text-white text-center Menu-header ml-lg-0 ml-md-3 ml-3">Kitchen Area</DropdownItem>
                  <div className="col-lg-6 col-md-6 col-12">
                    { mealByArea1.map(area => ( 
                      <DropdownItem  className="dropdownItemCategory" 
                                     onClick={goToCategorytRecipes} 
                                     data-name={area}>{area}</DropdownItem> )) 
                    }
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    { mealByArea2.map(area => ( 
                      <DropdownItem  className="dropdownItemCategory" 
                                  onClick={goToCategorytRecipes} 
                                  data-name={area}>{area}</DropdownItem> )) 
                    }
                  </div>
                </div>
              </div>
            </div>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
        </Col>

        <Col lg="5" md="12" sm="12" className="mb-lg-0 mb-md-4 mb-4">
          <Form className="d-flex" onSubmit={onSubmit} >
            <Input
              className="rounded-pill border-2 Input-search"
              type="search"
              onChange={onChange}
              placeholder="Search a recipe by ingredient (e.g. chicken)"
              name="query"
              value={query}
            />
            <Button type="submit" className="btn btn-danger rounded-circle Button-search">
              <FontAwesomeIcon icon={faSearch} className="Icon-search" />
            </Button>
          </Form>
        </Col>
      </Row>

    </Container>
    </>
  );
};

export default Header;