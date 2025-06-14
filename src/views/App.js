import logo from './logo.svg';
import './App.scss';

//import MyForm from './Example/MyForm';
import MyComponent from './Example/AddComponent';
import ListTodo from './Todos/ListTodo.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListUser from './Users/ListUser.js';

import Nav from './Nav/Nav';
import Home from './Example/Home.js';
import DetailUser from './Users/DetailUser.js';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<header className="App-header">
					<Nav />
					<img src={logo} className="App-logo" alt="logo" />

					<Switch>
						{/* exact là sẽ lấy chính xác đường link ta muốn render*/}
						<Route path="/" exact>
							<Home />
						</Route>
						<Route path="/todo">
							<ListTodo />
						</Route>
						<Route path="/about">
							<MyComponent />
						</Route>

						<Route path="/user" exact>
							<ListUser />
						</Route>

						<Route path="/user/:id">
							<DetailUser />
						</Route>
					</Switch>
				</header>
				<ToastContainer
					position="top-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
			</div>
		</BrowserRouter>
	);
}

export default App;
