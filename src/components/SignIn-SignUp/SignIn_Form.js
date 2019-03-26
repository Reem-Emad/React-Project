import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import Logo from '../../images/logo.png';

class SignIn extends React.PureComponent {
    render() {
        return (
            <Navbar expand="lg">
                <Navbar.Brand href="#home"><Image src={Logo} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline className="SignIn_Form">
                        <Form.Group  className="mr-2">
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group  className="mr-2">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="mr-2 SignIn_form-btn">
                            Sign in
                        </Button>
                    </Form>
                    <Button variant="primary" className="mr-2 SignIn_form-btn">Sign in as admin</Button>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default SignIn;