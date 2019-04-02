import React from 'react';
import { Card, Col, Modal, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MyContext } from '../../App';


class EditCard extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
            smShow: false,
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }
<<<<<<< HEAD
    handleDelete=(id,Authors,updateAuthors)=>(e)=>{
            //  debugger;
            Authors.forEach((a,i)=>{
                  if(a.id === id){
                      Authors.splice(i,1);
                      updateAuthors(Authors);
            this.setState({ smShow: true });
            
                  }
            });
            
            
    }
=======
   
>>>>>>> 2db5b40323293080c024f658907ba471c8a92ffc
        
    
    render() {
        let smClose = () => this.setState({ smShow: false });
        return (
            <MyContext.Consumer>
                {
                    value=>(
                
            <>
                <Col key={this.props.id} className="m-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={this.props.image} style={{ height: '20rem' }} />
                        <Card.Body>
                            <Card.Title>{this.props.name}
                                <Card.Text className="float-right">
                                    <FontAwesomeIcon className="mr-3" icon="edit" onClick={this.handleShow} />
                                    <FontAwesomeIcon icon="trash-alt" onClick={()=>this.setState({ smShow: true })} />
                                </Card.Text>
                            </Card.Title>

                        </Card.Body>
                    </Card>
                </Col>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header>
                        <Modal.Title>Edit Author</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Form>
                            <Form.Group >
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder={this.props.name} />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Number of books</Form.Label>
                                <Form.Control type="number" placeholder={this.props.NumberOfBooks} />
                            </Form.Group>
                            <Form.Group >
                            <Form.Label>Number Of Friends</Form.Label>
                                <Form.Control type="number" placeholder={this.props.NumberOfFriends} />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Place of birth</Form.Label>
                                <Form.Control type="text" placeholder={this.props.born} />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Website</Form.Label>
                                <Form.Control type="text" placeholder={this.props.website} />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Influences</Form.Label>
                                <Form.Control type="text" placeholder={this.props.influences} />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Member Since</Form.Label>
                                <Form.Control type="text" placeholder={this.props.member} />
                            </Form.Group>
                           
                            <Form.Group >
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows="3" placeholder={this.props.description} />
                            </Form.Group>
                        </Form>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                       </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                            Save Changes
                       </Button>
                    </Modal.Footer>
                </Modal>
                <Modal
                    size="sm"
                    show={this.state.smShow}
                    onHide={smClose}
                    aria-labelledby="example-modal-sizes-title-sm"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-sm">
                            Delete
            </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Author Deleted!
          </Modal.Body>
                </Modal>
            </>
             )
            }
    </MyContext.Consumer>
                   
        );
    }


}

export default EditCard; 