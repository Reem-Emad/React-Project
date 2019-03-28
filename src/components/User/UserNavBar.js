import React from 'react';
import './Home.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
class UserNavBar extends React.Component {
    render() {
        return (
            <>
                <div className="userNav">

                    <Navbar variant="light" >
                        <Navbar.Brand className="mr-auto" href="#home">My Books</Navbar.Brand>
                        <Form className="form-inline active-cyan-4">
                            <input className="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search" aria-label="Search" />
                            <i className="fas fa-search" aria-hidden="true"></i>
                        </Form>

                        <Nav >
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#categories">Categories</Nav.Link>
                            <Nav.Link href="#books">Books</Nav.Link>
                            <Nav.Link href="#authors">Authors</Nav.Link>
                        </Nav>
                    </Navbar>
                    <div className="spliterline"></div>
                </div>
            </>
        )
    }
}
export default UserNavBar;