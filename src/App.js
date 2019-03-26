import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Link,Switch } from 'react-router-dom';
import HomePage from './components/SignIn-SignUp/Home_Page';

class App extends React.PureComponent
{
    render()
    {
        return(
            <>
           
            <Router>
                <Switch>
                <Route exact path="/" component={HomePage} />
                 </Switch>
            </Router>
            </>
        )
    }
}
export default App;




