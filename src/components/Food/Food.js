import React, { useState, Component } from 'react';
import './Food.scss';

// Function Component

function Food( props ) {	
	const [state, setState] = useState({
		showIngredients: true
	});
	
	const handleIngredients = () =>{
        setState({
            showIngredients: !state.showIngredients
        });
    };
	
	const { id, name, img, price, ingredients } = props.food;
    const { removeFood } = props;
	
	return(
		<article className="food">
			<div className="img-container">
				<img src={img} />
				<span className="close-btn" onClick={() => {removeFood(id)}}>
					<i className="fas fa-window-close"></i>
				</span>
			</div>
			<div className="food-ingredients">
				<h3>{name}</h3>
				<h4>{price.toLocaleString("en-US", {style: "currency", currency:"USD"})}</h4>
				<h5>Ingredients
					<span onClick={handleIngredients}>
						<i className="fas fa-caret-square-down"></i>
					</span>
				</h5>
				{state.showIngredients && <p>{ingredients}</p>}
			</div>
		</article>
	);		
}

// Class Component

/*class Food extends Component {
    state = {
        showIngredients: true
    };
	
    handleIngredients = () =>{
        this.setState({
            showIngredients: !this.state.showIngredients
        });
    };
	
    render() {
        const { id, name, img, price, ingredients } = this.props.food;
        const { removeFood } = this.props;
        return(
            <article className="food">
                <div className="img-container">
                    <img src={img} />
                    <span className="close-btn" onClick={() => {removeFood(id)}}>
                        <i className="fas fa-window-close"></i>
                    </span>
                </div>
                <div className="food-ingredients">
                    <h3>{name}</h3>
                    <h4>{price.toLocaleString("en-US", {style: "currency", currency:"USD"})}</h4>
                    <h5>Ingredients
                        <span onClick={this.handleIngredients}>
                            <i className="fas fa-caret-square-down"></i>
                        </span>
                    </h5>
                    {this.state.showIngredients && <p>{ingredients}</p>}
                </div>
            </article>
        );
	}	
}*/

export default Food;