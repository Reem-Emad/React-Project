import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link,Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from './components/SignIn-SignUp/Home_Page';
import Categories from './components/Categories/Categories';
import AllBooks from './components/Books/AllBooks';
import Book from './components/Books/Book';
import AuthorDetails from './components/Authors/Author';
import BookDetailes from './components/Books/BookDetails';
import Users from './Users';
import AllAuthors from './components/Authors/AllAuthors';
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
                <Route exact path="/Categories" component={Categories}/>
                <Route exact path="/AllBooks" component={AllBooks}/>
                <Route exact path="/Book" component={Book}/>
                <Route exact path="/bookDetailes/:id" component={BookDetailes}/>    
                <Route exact path="/AuthorDetails/:id" component={AuthorDetails}/>  
                <Route exact path="/AllAuthors" component={AllAuthors}/>  

                 </Switch>                
            </Router>
            </MyContext.Provider>
            </>
        )
    }
}
export default App;




