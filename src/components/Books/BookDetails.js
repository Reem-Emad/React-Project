import React from 'react';
import books from '../../books';
import { Dropdown, Row, Container, Col, Card, Button ,ButtonGroup ,Form} from 'react-bootstrap';
// import Book from './Book';
import './Book.css';
class BookDetails extends React.Component {
    render() {
        const id = this.props.match.params.id;

        let Book = books.find((b) => {
            return (b.id === +id);
        });
        console.log(Book);

        return (
            <>
                <Container className="detailedCard">
                    <Row>
                        <Col md="1"></Col>
                        <Col md="3">
                            <Card style={{ width: '15rem', height: '20rem' }}>
                                <Card.Img className="imgMargin" variant="top" src={Book.cover} />
                                <Dropdown as={ButtonGroup}>
                                    <Button variant="success">Want to Read</Button>

                                    <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

                                    <Dropdown.Menu>
                                        <Dropdown.Item hred="#/action-1">Read</Dropdown.Item>
                                        <Dropdown.Item hred="#/action-2">Currently Reading</Dropdown.Item>
                                        <Dropdown.Item hred="#/action-3">Add Shelf</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>;
                                <div className="rate">
                                    <input type="radio" id="star5" name="rate" value="5" />
                                    <label htmlFor="star5" title="text">5 stars</label>
                                    <input type="radio" id="star4" name="rate" value="4" />
                                    <label htmlFor="star4" title="text">4 stars</label>
                                    <input type="radio" id="star3" name="rate" value="3" />
                                    <label htmlFor="star3" title="text">3 stars</label>
                                    <input type="radio" id="star2" name="rate" value="2" />
                                    <label htmlFor="star2" title="text">2 stars</label>
                                    <input type="radio" id="star1" name="rate" value="1" />
                                    <label htmlFor="star1" title="text">1 stars</label>
                                </div>
                             
                            </Card>
                        </Col>
                        <Col md="8">
                            <Card style={{ width: '100%', border: 'none' }}>
                                <Card.Body>
                                    <Card.Title>{Book.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">By {Book.author}</Card.Subtitle>
                                    {/* rating */}

                                    <div className="rate">
                                        <input type="radio" id="star5" name="rate" value="5" />
                                        <label htmlFor="star5" title="text">5 stars</label>
                                        <input type="radio" id="star4" name="rate" value="4" />
                                        <label htmlFor="star4" title="text">4 stars</label>
                                        <input type="radio" id="star3" name="rate" value="3" />
                                        <label htmlFor="star3" title="text">3 stars</label>
                                        <input type="radio" id="star2" name="rate" value="2" />
                                        <label htmlFor="star2" title="text">2 stars</label>
                                        <input type="radio" id="star1" name="rate" value="1" />
                                        <label htmlFor="star1" title="text">1 stars</label>
                                    </div>
                                    <br></br>
                                    <br></br>

                                    {/* rating */}

                                    <Card.Text className="fontStyle">
                                        {Book.description}
                                    </Card.Text>
                                    <Card.Text >{Book.pages} Page </Card.Text>
                                    <Card.Text >{Book.category}</Card.Text>
                                </Card.Body>
                            </Card>


                        </Col>
                    </Row>
                </Container>
            </>
        )

    }
}
export default BookDetails;
