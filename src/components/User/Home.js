import React from 'react';
import './Style.css';

import { Card, ListGroup } from 'react-bootstrap';
import { MyContext } from '../../App';
import NavBar from '../Shared/Navbar';
import PaginationComponent from '../Shared/Pagination';
import BookCard from './BookCard';


class UserHome extends React.PureComponent {
    state={
      showedBooks:[],
      clickedFilter:'All',
    }
    getAllBooks=(allBooks,Books)=>
    {
        let books=[];
     allBooks.map(bookID => Books.find(element => {
            if (element.id === bookID)
              books.push(<BookCard key={element.id} {...element} ></BookCard>);  
        }) )
      return books;

    }
    handleClick=(loginedUser,Books)=>(e)=>
    {
        let filter=e.target.name;
        this.setState({clickedFilter: filter});
        let booksIDs;
        if(filter=='All')
        {
            booksIDs=loginedUser.all;
        }
        else if(filter=='Currently Reading')
        {
            booksIDs=loginedUser.reading;
           
        }
        else if(filter=='Read')
        {
            booksIDs=loginedUser.read;
        }
        else
        {
            booksIDs=loginedUser.wantToRead;
        }
       let books=[];
        booksIDs.map(bookID => Books.find(element => {
            if (element.id === bookID)
              books.push(element);  
        }) )
        this.setState({showedBooks: books});
    }
    render() {
        return (
            
            <MyContext.Consumer>

                {value =>
                    (
                        <>
                        
                <NavBar></NavBar>
                <div className='BooksListing'>
                   
                <ListGroup style={{ width: '18rem' }}>
                <ListGroup.Item action name='All' onClick={this.handleClick(value.state.loginedUser,value.state.Books)}>
                          All
                </ListGroup.Item>
                <ListGroup.Item action name='Currently Reading' onClick={this.handleClick(value.state.loginedUser,value.state.Books)}>
                     curently Reading
                 </ListGroup.Item>
                 <ListGroup.Item action name='Read' onClick={this.handleClick(value.state.loginedUser,value.state.Books)}>
                        Read
                 </ListGroup.Item>
                 <ListGroup.Item action name='Want To Read' onClick={this.handleClick(value.state.loginedUser,value.state.Books)}>
                        want to read
                 </ListGroup.Item>
                </ListGroup>
                    <div style={{display:'flex',flexDirection:'column'}}>
                    <Card  style={{ width: '15rem', marginLeft:'20px' }}>
                        <Card.Body>{this.state.clickedFilter}</Card.Body>
                    </Card>
                    {
                        this.state.showedBooks.length==0?
                        this.getAllBooks(value.state.loginedUser.all,value.state.Books)
                      :                          
                     this.state.showedBooks.map(book=>(<BookCard key={book.id} {...book} clickedFilter={this.state.clickedFilter}></BookCard>))
                        

                    }
                    <PaginationComponent></PaginationComponent>
                    </div>
                </div>
                </>
               )
            }
        </MyContext.Consumer>
        )
    }
}
export default UserHome;