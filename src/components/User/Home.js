import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import NavBar from '../Shared/Navbar';
import BookCard from './BookCard';
class UserHome extends React.PureComponent {
    render() {
        return (
            <>
                <NavBar></NavBar>
                <div className='BooksListing'>
                    <Card style={{ width: '18rem' }}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>All</ListGroup.Item>
                            <ListGroup.Item>Currently Reading</ListGroup.Item>
                            <ListGroup.Item>Read</ListGroup.Item>
                            <ListGroup.Item>Want to read</ListGroup.Item>
                        </ListGroup>
                    </Card>
                    <div style={{display:'flex',flexDirection:'column'}}>
                    <Card  style={{ width: '15rem', marginLeft:'20px' }}>
                        <Card.Body>All</Card.Body>
                    </Card>
                    <BookCard></BookCard>
                    </div>
                </div>
            </>
        )
    }
}
export default UserHome;