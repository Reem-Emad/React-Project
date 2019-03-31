import React from 'react';
import { Card,Dropdown } from 'react-bootstrap';
import img from '../../images/logo.png';
class UserBookCard extends React.PureComponent {
    render() {
        return (
            <>
                <Card className="BookCard">
                    <Card.Img variant="top" src={img} className="BookCard_img" />
                    <Card.Body style={{display:'flex',flexDirection:'row'}}>
                        <Card.Title style={{marginRight:'10px'}}>Book title</Card.Title>
                        <Card.Title style={{marginRight:'10px'}}>Author name</Card.Title>
                        <Card.Text style={{marginRight:'10px'}}>AVG Rating: <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></Card.Text>
                        <Card.Text style={{marginRight:'10px'}}>Rating: <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></Card.Text>
                        <Dropdown  >
                            <Dropdown.Toggle variant="success" id="dropdown-basic" className="BookCars_dropdown--btn">
                                Reading
                            </Dropdown.Toggle>

                            <Dropdown.Menu className='BookCars_dropdown--list'>
                                <Dropdown.Item className='BookCars_dropdown--listItem'>Read</Dropdown.Item>
                                <Dropdown.Item className='BookCars_dropdown--listItem'>want to read</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Card.Body>
                </Card>
            </>
        )
    }
}
export default UserBookCard;