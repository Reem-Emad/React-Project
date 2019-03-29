import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link,Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from './components/SignIn-SignUp/Home_Page';
import Users from './Users';
import AdminPage from './components/Admin_Page/Admin_page';

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
                <Route exact path="/AdminPage" component={AdminPage} />
                
                </Switch>
            </Router>
            </MyContext.Provider>
            </>
        )
    }
}
export default App;




