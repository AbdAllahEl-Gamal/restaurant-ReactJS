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

    const handleSearch = event => {
        var searchQuery = event.target.value.toLowerCase();
        var displayedFoods = foodData.filter(food => {
            var searchValue = food.name.toLowerCase();
            console.log(searchValue.indexOf(searchQuery));
            return searchValue.indexOf(searchQuery) !== -1;
        });
    
        setState({
          foods: displayedFoods
        });
       
      };
	
	const { foods } = state;
	const foodComponents = foods.map(food => <Food key={food.id} food={food} removeFood={removeFood}/>);
	
    return (
        <section className="foodMenuContainer">
            <input type="text" className="searchField" placeholder="Search" onChange={handleSearch} />
            <div className="foodMenu">
                {foodComponents}
	        </div> 
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