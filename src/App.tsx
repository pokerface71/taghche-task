import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ViewSelector from './Routing/ViewSelector';

function App() {
	return (
		<Router>
			<ViewSelector />
		</Router>
	);
}

export default App;
