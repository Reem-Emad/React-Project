import React from 'react';
import { BrowserRouter as Router, Route, Link,Switch , withRouter} from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { MyContext } from '../../App';
import Logo from '../../images/logo.png';

class SignIn extends React.PureComponent {

    state = {
        enteredMail: '',
        enteredPassword: '',
        enteredDataValidation: ''
    }
    handleSubmit = (existingUsers) => (event) => {
        event.preventDefault();
       const user=existingUsers.find(element => {
          if( element.email===this.state.enteredMail)
            return element;
       }) 
       if(user==undefined)
        this.setState({enteredDataValidation: 'account not exist'})
       else
       {
           if(user.password==this.state.enteredPassword){
           this.setState({enteredDataValidation: 'vaild'})
            // this.props.history.push('/user');
           }
           else
           this.setState({enteredDataValidation: 'incorrect password'})
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
                            <Navbar expand="lg">
                                <Navbar.Brand href="#home"><Image src={Logo} /></Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Form inline className="SignIn_Form" onSubmit={this.handleSubmit(value.state.users)}>
                                        <Form.Group className="mr-2" >
                                            <Form.Control type="email" placeholder="Enter email" onChange={this.handleEmailChange} value={this.state.enteredMail} />
                                        </Form.Group>
                                        <Form.Group className="mr-2" >
                                            <Form.Control type="password" placeholder="Password" onChange={this.handlePasswordChange} value={this.state.enteredPassword} />
                                        </Form.Group>
                                        <Button variant="primary" type="submit" className="mr-2 SignIn_form-btn">
                                            Sign in
                                          </Button>
                                        <Form.Text style={{ color: "red" }}>{this.state.enteredDataValidation}</Form.Text>
                                    </Form>
                                    <Button variant="primary" className="mr-2 SignIn_form-btn">Sign in as admin</Button>
                                </Navbar.Collapse>
                            </Navbar>
                        </>
                    )
                }
            </MyContext.Consumer>
        )
    }
}

export default withRouter(SignIn);