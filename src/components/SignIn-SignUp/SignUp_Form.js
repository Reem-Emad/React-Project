import React from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class SignUp extends React.PureComponent {
    render() {
        return (
            <div style={{height:'277px'}}>
            <Form className='SignUp_form'>
                <Form.Group>
                    <Form.Label>New Here? Create a free account!</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group >
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" className='SignUp_form-btn'>
                    Sign up
                </Button>
            </Form>
            </div>
        )
    }
}

export default SignUp;