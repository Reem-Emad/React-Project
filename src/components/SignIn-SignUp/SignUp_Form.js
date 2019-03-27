import React from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class SignUp extends React.PureComponent {
    render() {
        return (
            <div style={{ height: '400px' }}>
                <Form className='SignUp_form'>
                    <Form.Text className="text-muted">
                    New Here? Create a free account!
                    </Form.Text>
                    <Form.Group>
                    <Form.Control type="text" placeholder="First name" />
                    </Form.Group>

                    <Form.Group>
                    <Form.Control type="text" placeholder="Last name" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group >
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group >
                        <Form.Control type="password" placeholder="Retype Password" />
                    </Form.Group>
                    <Form.Group style={{display:'flex'}}>
                        <Form.Control type="file" placeholder="upload Image" className="ImageUpload"/>
                        <Button variant="primary" type="submit" className='SignIn_form-btn'>
                        upload image
                       </Button>
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