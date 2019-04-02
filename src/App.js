import React from 'react';
import { BrowserRouter as Router, Route, Link,Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit} from '@fortawesome/free-solid-svg-icons'
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import HomePage from './components/SignIn-SignUp/Home_Page';
import UserHome from './components/User/Home';
import Categories from './components/Categories/Categories';
import AllBooks from './components/Books/AllBooks';
import Book from './components/Books/Book';
import AuthorDetails from './components/Authors/Author';
import BookDetailes from './components/Books/BookDetails';
import Users from './Users';
import Books from './Books';
import Authors from './Authors';
import AllAuthors from './components/Authors/AllAuthors';
import AdminBooksList from './components/Books/admin-list';
import AdminAuthorsList from './components/Authors/admin-list';


library.add(faEdit)
library.add(faTrashAlt)

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
    render()
    {
        const value={
            state: this.state,
            addNewUser: this.addNewUser,
            addLoginedUser: this.addLoginedUser
        }

        return(
            <>
            <MyContext.Provider value={value}>
            <Router>
                <Switch>
                 <Route exact path="/" component={HomePage} />
                 <Route exact path="/user/home" component={UserHome}/>
                 <Route exact path="/admin/home" component={UserHome}/>
                <Route exact path="/user/books" component={AllBooks}/>
                <Route exact path="/user/categories" component={Categories}/>
                <Route exact path="/user/authors" component={AllAuthors}/>  
                 <Route exact path="/admin/books" component={AdminBooksList} />
                 <Route exact path="/admin/authors" component={AdminAuthorsList} />
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




