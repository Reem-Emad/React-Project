import React from 'react';
import { Card, Col, Modal, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CategirosData from '../../Categories';

class EditCard extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            show: false,
            smShow: false,
            dataCat:CategirosData
        };
          this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }
    handelDelete=(id)=>{
        var newArr = this.state.dataCat.filter(item => item.Id != this.props.Id)
        this.setState({ smShow: true ,
            dataCat: this.state.dataCat.splice(newArr, 1)
        })
        
        console.log(this.props);
     }
    render() {
        let smClose = () => this.setState({ smShow: false });
        return (
            <>
                <Col className="m-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{this.props.name}
                                <Card.Text className="float-right">
                                    <FontAwesomeIcon className="mr-3" icon="edit" onClick={this.handleShow} />
                                    <FontAwesomeIcon icon="trash-alt" onClick={() => {this.handelDelete(this.props.id)} } />
                                </Card.Text>
                            </Card.Title>

                        </Card.Body>
                    </Card>
                </Col>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header>
                        <Modal.Title>Edit Category</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group >
                                <Form.Label>Category</Form.Label>
                                <Form.Control type="text" placeholder={this.props.category} />
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
                    aria-labelledby="example-modal-sizes-title-sm">
                     <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-sm">
                            Delete
            </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Category Deleted!
          </Modal.Body>
                </Modal>
            </>

        );
    }


}

export default EditCard; 