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
import AdminPage from './components/Admin_Page/Admin_page';
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
                 <Route exact path="/user/Home" component={UserHome}/>
                 <Route exact path="/Admin/Books" component={AdminBooksList} />
                 <Route exact path="/Admin/Authors" component={AdminAuthorsList} />
                <Route exact path="/AdminPage" component={AdminPage} />
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




