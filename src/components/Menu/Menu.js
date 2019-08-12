import React, {Component} from 'react';
import Navbar from '../Navbar/Navbar';
import FoodMenu from '../FoodMenu/FoodMenu';

// Function Component

function Menu() {
	return (
		<main>
			<Navbar />
			<FoodMenu />
		</main>
	);	
}

// Class Component

/*class Menu extends Component {
	render() {
		return (
			<main>
				<Navbar />
				<FoodMenu />
			</main>
		);
	}
}*/

export default Menu;