import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link,Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from './components/SignIn-SignUp/Home_Page';
import Users from './Users';

export const MyContext = React.createContext({ users:Users });
class App extends React.PureComponent
{
    state={
       users:Users,        
    }
    render()
    {
        const value={
            state: this.state,
        }
        return(
            <>
            <MyContext.Provider value={value}>
            <Router>
                <Switch>
                <Route exact path="/" component={HomePage} />
                
                </Switch>
            </Router>
            </MyContext.Provider>
            </>
        )
    }
}
export default App;




