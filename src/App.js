import React from 'react';
import { BrowserRouter as Router, Route, Link,Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit} from '@fortawesome/free-solid-svg-icons';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

import HomePage from './components/SignIn-SignUp/Home_Page';
import UserHome from './components/User/Home';
import Categories from './components/Categories/Categories';
import BooksList from './components/Books/List';
import AuthorDetails from './components/Authors/Authors';
import BookDetailes from './components/Books/BookDetails';
import Users from './Users';
import AllAuthors from './components/Authors/AllAuthors';
import CategoriesAdminList from './components/Categories/CategoriesAdminsList';
import Books from './Books';


import AdminBooksList from './components/Books/admin-list';
import AdminAuthorsList from './components/Authors/admin-list';
import AdminCategoriesList from './components/Categories/CategoriesAdminsList';
import Authors from './Authors';


library.add(faEdit);
library.add(faTrashAlt);
library.add(faPlus);

export const MyContext = React.createContext({ users:Users });
class App extends React.PureComponent
{
    state={
       users:Users,        
       Books:Books,
       Authors:Authors,
       loginedUser:{}
    }
    addNewUser=(newUser)=>{
        const {users}=this.state;
        this.setState({users: [...users,newUser]});
    }
    addLoginedUser=(loginedUser) =>{
        this.setState({loginedUser});
    }
    updateAuthors=(updatedAuthors)=>{
        this.setState({Authors: updatedAuthors},()=>{console.log(this.state.Authors)});
    }
    render()
    {
        const value={
            state: this.state,
            addNewUser: this.addNewUser,
            addLoginedUser: this.addLoginedUser,
            updateAuthors: this.updateAuthors,
        }

        return(
            <>
            <MyContext.Provider value={value}>
            <Router>
                <Switch>

              
                 <Route exact path="/" component={HomePage} />
                 <Route exact path="/user/home" component={UserHome}/>
                 <Route exact path="/admin/home" component={UserHome}/>
                <Route exact path="/user/books" component={BooksList}/>
                <Route exact path="/user/categories" component={Categories}/>
                <Route exact path="/user/authors" component={AllAuthors}/>  
                 <Route exact path="/admin/books" component={AdminBooksList} />
                 <Route exact path="/admin/authors" component={AdminAuthorsList} />
                 <Route exact path="/admin/categories" component={AdminCategoriesList} />
                <Route exact path="/bookDetailes/:id" component={BookDetailes}/>    
                <Route exact path="/AuthorDetails/:id" component={AuthorDetails}/>  
                 </Switch>                
            </Router>
            </MyContext.Provider>
            </>
        )
    }
}
export default App;




