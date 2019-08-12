import React, {Component} from 'react';
import './WelcomeSection.scss';
import {Animated} from "react-animated-css";

// Function Component

function WelcomeSection() {
	return (
		<section className="welcomeSection" style={{ backgroundImage: 'url("img/34.jpg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
			<p className="par">
				<Animated animationIn="fadeIn" animationOut="fadeOut" animationInDelay="500" isVisible={true}>
					Welcome to our Restaurant
				</Animated>
			</p>
		</section> 
	);	
}

// Class Component

/*class WelcomeSection extends Component {
	render() {
		return (
			<section className="welcomeSection" style={{ backgroundImage: 'url("img/34.jpg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
				<p className="par">
					<Animated animationIn="fadeIn" animationOut="fadeOut" animationInDelay="500" isVisible={true}>
						Welcome to our Restaurant
					</Animated>
				</p>
			</section> 
		);
	}
}*/

export default WelcomeSection;