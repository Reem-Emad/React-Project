import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/SignIn-SignUp/SignIn-SignUp.css';
import './components/Shared/Navbar.css';
import './components/User/User.css';
import './font-awesome/css/all.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
const rootElement = document.getElementById('root');
ReactDOM.render(

  <App />,

  rootElement,
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
