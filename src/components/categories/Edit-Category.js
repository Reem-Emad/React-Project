import React, { Component } from 'react'
import { Row, Col, Card, Form, Modal, Button } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


export default class EditCategory extends Component {
    constructor(props) {
        super(props);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
            Name: '',
            error: false
        };
    }

    componentDidMount(){
        this.setState({
            Name: this.props.Name,
            show: this.props.show
        })
    }

    handleClose() {
        this.props.hideUpdate();
    }

    handleShow() {
        this.props.ShowUpdate();
    }

    handleChange = (e) => {
        this.setState({Name: e.target.value}, () => {console.log("catnamet ", this.state.Name)});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.Name.length >= 5){
            const Id = this.props.Id ;
            this.setState({
                error: false,
                Name: ''
            })
            //here should add the category using back end
  
         
            //finaly close modal
            this.handleClose();
        }
        else{
            this.setState({error: true})
        }
    }

    render() {
        return (
            <>
                
                <Row className="no-gutters">
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header>
                            <Modal.Title>Add Category</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                            <Form>
                                <Form.Group >
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control 
                                        type="text" name="Name" 
                                        value={this.state.Name} 
                                        onChange={this.handleChange} 
                                    />
                                    {
                                        this.state.error && <p>Enter valid Name</p>
                                    }
                                </Form.Group>
                                
                            </Form>

                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Close
                       </Button>
                            <Button variant="primary" onClick={this.handleSubmit}>
                                Edit
                       </Button>
                        </Modal.Footer>
                    </Modal>
                </Row>
            </>
        )
    }
}