import React, {Component} from 'react';
import Navbar from './components/Navbar/Navbar';
import WelcomeSection from './components/WelcomeSection/WelcomeSection';


// Function Component

function App() {
	return (
		<main>
			<Navbar />
			<WelcomeSection />
		</main>
	);	
}

// Class Component

/*class App extends Component {
	render() {
		return (
			<main>
				<Navbar />
				<WelcomeSection />
			</main>
		);
	}
}*/

export default App;