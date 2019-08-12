import React, { useState, Component } from 'react';
import './FoodMenu.scss';
import Food from '../Food/Food';
import foodData from '../foodData';

// Function Component

function FoodMenu() {	
	const [state, setState] = useState({
		foods: foodData
	});
	
    const removeFood = id => {
        const { foods } = state;
        const sortedFoods = foods.filter(food=> food.id !== id);
		setState({
			foods: sortedFoods
		});
    };
	
	const { foods } = state;
	const foodComponents = foods.map(food => <Food key={food.id} food={food} removeFood={removeFood}/>);
	
    return (
	   <section className="foodMenu">
		   {foodComponents} 
	   </section> 
    );	
}

// Class Component

/*class FoodMenu extends Component {	
    state = {
        foods: foodData
    };
	
    removeFood = id => {
        const {foods} = this.state;
        const sortedFoods = foods.filter(food=> food.id !== id);
        this.setState({
            foods: sortedFoods
        });
    };
	
    render() {
        const { foods } = this.state;
		const foodComponents = foods.map(food => <Food key={food.id} food={food} removeFood={this.removeFood}/>);
        return (
               <section className="foodMenu">
                   {foodComponents} 
               </section> 
        );
	};	
}*/

export default FoodMenu;