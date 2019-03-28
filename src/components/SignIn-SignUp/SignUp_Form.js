import React from 'react';
import SimpleSchema from 'simpl-schema';
import { MyContext } from '../../App';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class SignUp extends React.PureComponent {
    state = {
        FName: '' ,
        LName:'' ,
        email: '',
        password:'' ,
        repeatedPassword: '',
        image:'',
        error:[{name:'',msg:''}]
    }
    handleSubmit=(existingUsers) => (e) => {
        e.preventDefault();
        const { FName, LName, email, password, repeatedPassword, image } = this.state;
        const validationContext = new SimpleSchema({
            FName: { type: String, min: 1, regEx: /^[a-z-A-Z_]{1,15}$/ },
            LName: { type: String, min: 1,  regEx: /^[a-z-A-Z_]{1,15}$/ },
            email: SimpleSchema.RegEx.EmailWithTLD ,
            password: { type: String, min: 2 },
            repeatedPassword:{ type: String, min: 2 },
            image: { type: String, defaultValue: 'N/A' }
        }).newContext();

        validationContext.validate({ FName, LName, email, password, repeatedPassword, image });
        // console.log(validationContext.validationErrors())
       const errors=[];
        validationContext.validationErrors().map(e=>{
            if(e.type=='regEx' && e.name!='email')
            errors.push({name: e.name,msg:'must be charachters only'})
            else if(e.type=='regEx' && e.name=='email' && e.value!='')
            errors.push({name: e.name,msg:'email not valid'})
            else if (e.name=='email' && e.value=='')
            errors.push({name: e.name,msg:'required'})
            else
            errors.push({name: e.name,msg:'required'})
            // this.setState({error:{name: e.name,msg:'must be charachters only'} })
        });
        const user=existingUsers.find(element => {
            if( element.email===email)
              return element;
         }) 
         if(user!=undefined)
         errors.push({name:'email',msg:'email already used'})

        if(repeatedPassword!=password)
        errors.push({name:'repeatedPassword',msg:'Not matched with password'})
        

        console.log(errors);
    }
    handleChange = (e) => {
        e.preventDefault();
        const key = e.target.name;
        const value = e.target.value;
        this.setState({ [key]: value });
    }
    render() {
        return (
            <MyContext.Consumer>

            {value =>
                (
            <div style={{ height: '400px' }}>
                <Form className='SignUp_form' onSubmit={this.handleSubmit(value.state.users)}>
                    <Form.Text className="text-muted">
                        New Here? Create a free account!
                    </Form.Text>
                    <Form.Group>
                        <Form.Control type="text" name='FName' placeholder="First name" value={this.state.FName} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control type="text" name='LName' placeholder="Last name" value={this.state.LName} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control type="text" name='email' placeholder="Enter email" value={this.state.email} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group >
                        <Form.Control type="password" name='password' placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group >
                        <Form.Control type="password" name='repeatedPassword' placeholder="Retype Password" value={this.state.repeatedPassword} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group style={{ display: 'flex' }}>
                        <Form.Control type="file" name='image' placeholder="upload Image" className="ImageUpload" value={this.state.image} onChange={this.handleChange} />
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
        </MyContext.Consumer>
        )
    }
}

export default SignUp;