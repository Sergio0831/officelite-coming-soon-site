import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import './scss/main.scss';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/signup" component={SignUp} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
