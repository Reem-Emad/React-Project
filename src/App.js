import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

///font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
/////components
import HomePage from './components/SignIn-SignUp/Home_Page';
import UserHome from './components/User/Home';
import Categories from './components/Categories/Categories';
import BooksList from './components/Books/List';
import AuthorDetails from './components/Authors/Details';
import BookDetailes from './components/Books/BookDetails';
import AllAuthors from './components/Authors/List';
import CategoriesAdminList from './components/Categories/CategoriesAdminsList';


import AdminBooksList from './components/Books/Admin-List';
import AdminAuthorsList from './components/Authors/Admin-List';
import AdminCategoriesList from './components/Categories/CategoriesAdminsList';
import Authors from './Authors';
import Books from './Books';
import Users from './Users';


library.add(faEdit);
library.add(faTrashAlt);
library.add(faPlus);

export const MyContext = React.createContext({ users: Users });
class App extends React.PureComponent {
    state = {
        users: Users,
        Books: Books,
        Authors: Authors,
        loginedUser: {}
    }
    addNewUser = (newUser) => {
        const { users } = this.state;
        this.setState({ users: [...users, newUser] });
    }
    addLoginedUser = (loginedUser) => {
        this.setState({ loginedUser });
    }
    updateAuthors = (updatedAuthors) => {
        this.setState({ Authors: updatedAuthors });
    }
    render() {
        const value = {
            state: this.state,
            addNewUser: this.addNewUser,
            addLoginedUser: this.addLoginedUser,
            updateAuthors: this.updateAuthors,
        }

        return (
            <>
                <MyContext.Provider value={value}>
                    <Router>
                        <Switch>


                            <Route exact path="/" component={HomePage} />
                            <Route exact path="/user/home" component={UserHome} />
                            <Route exact path="/admin/home" component={UserHome} />
                            <Route exact path="/user/books" component={BooksList} />
                            <Route exact path="/user/categories" component={Categories} />
                            <Route exact path="/user/authors" component={AllAuthors} />
                            <Route exact path="/admin/books" component={AdminBooksList} />
                            <Route exact path="/admin/authors" component={AdminAuthorsList} />
                            <Route exact path="/bookDetailes/:id" component={BookDetailes} />
                            <Route exact path="/AuthorDetailes/:id" component={AuthorDetails} />
                        </Switch>
                    </Router>
                </MyContext.Provider>
            </>
        )
    }
}
export default App;




