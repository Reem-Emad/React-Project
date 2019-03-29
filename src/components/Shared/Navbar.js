import React from 'react';
import { MyContext } from '../../App';

import { Navbar, Nav, Form, FormControl, Button, Image } from 'react-bootstrap';
class NavBar extends React.PureComponent {
    render() {
        return (
            <MyContext.Consumer>

            {value =>
                (
                    
                <>
                <Navbar  expand="lg" className='navbarStyle'>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto" className='navbarLinks'>
                            <Nav.Link >Home</Nav.Link>
                            <Nav.Link >Categories</Nav.Link>
                            <Nav.Link >Books</Nav.Link>
                            <Nav.Link >Authors</Nav.Link>
                        </Nav>
                        <Form inline className=' ml-5'>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success" className='navbarSearchBtn'>Search</Button>
                        </Form>
                        
                        <Image src="/" roundedCircle style={{marginLeft:'290px'}}/>
                        <div  style={{color:'#382110',marginLeft:'20px'}}>{value.state.loginedUser.firstName} {value.state.loginedUser.lastName}</div>
                        <Button  variant="primary" size="sm" className='navbarSearchBtn' style={{marginLeft:'100px'}} >
                            log out
                        </Button>
                    
                    </Navbar.Collapse>
                </Navbar>
            </>
            )
        }
    </MyContext.Consumer>
        )
    }

}
export default NavBar;