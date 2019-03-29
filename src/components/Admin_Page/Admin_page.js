import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { MyContext } from '../../App';
import Logo from '../../images/logo.png';
import  './Admin_page.css'
class AdminPage extends React.Component {
    state = {
        enteredMail: '',
        enteredPassword: '',
        enteredDataValidation: ''
    }
    handleSubmit = (existingUsers) => (event) => {
        event.preventDefault();
        const Admin = existingUsers.find(element => {
            if (element.email === this.state.enteredMail)
                return element;
        })
        if (Admin == undefined)
            this.setState({ enteredDataValidation: 'account not exist' })
        else {
            if (Admin.password == this.state.enteredPassword) {
                this.setState({ enteredDataValidation: 'vaild' })
            }
            else
                this.setState({ enteredDataValidation: 'incorrect password' })
        }


    }
    handleEmailChange = (e) => {
        this.setState({ enteredMail: e.target.value })
    }

    handlePasswordChange = (e) => {
        this.setState({ enteredPassword: e.target.value })

    }
    render() {
        return (
            <MyContext.Consumer>

                {value =>
                    (
                        <>  
                        <div className="container-fluid  admin_body">
                            <Navbar expand="lg">
                                <Navbar.Brand href="#home"><Image src={Logo} /></Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                </Navbar.Collapse>
                            </Navbar>
                            <Form  className="SignIn_Form" onSubmit={this.handleSubmit(value.state.users)}>
                                        <Form.Group className="mr-2" >
                                            <Form.Control type="email" placeholder="Enter email" onChange={this.handleEmailChange} value={this.state.enteredMail} />
                                        </Form.Group>
                                        <Form.Group className="mr-2" >
                                            <Form.Control type="password" placeholder="Password" onChange={this.handlePasswordChange} value={this.state.enteredPassword} />
                                        </Form.Group>
                                        <Button variant="primary" type="submit" className="mr-2 SignIn_form-btn">
                                           Log In
                                          </Button>
                                        <Form.Text style={{ color: "red" }}>{this.state.enteredDataValidation}</Form.Text>
                                    </Form>
                                    </div>    
                        </>
                    )
                }
            </MyContext.Consumer>
        )
    }
}

export default withRouter(AdminPage);