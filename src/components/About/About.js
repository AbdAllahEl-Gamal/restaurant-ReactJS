import React, {Component} from 'react';
import Navbar from '../Navbar/Navbar';
import ContactForm from '../ContactForm/ContactForm';

// Function Component

function About() {
	return (
		<main>
			<Navbar />
			<ContactForm />
		</main>
	);	
}

// Class Component

/*class About extends Component {
	render() {
		return (
			<main>
				<Navbar />
				<ContactForm />
			</main>
		);
	}
}*/

export default About;