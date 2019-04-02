import React from 'react';
import authors from '../../Authors';
import { Link } from 'react-router-dom';
import { Row, Container, Col, Card} from 'react-bootstrap';
class AllAuthors extends React.Component {
    render() {
        return (
            <>
                <Container className="detailedCard">
                    <Row>
                        <Col sm="2"></Col>
                        <Col sm="8">
                            {
                                authors.map((a) =>
                                        <div style={{display:'inline-block' ,margin:'10px'}} key={a.id}>
                                    <Link to={`/AuthorDetails/${a.id}`}>
                                            <Card style={{ width: '9rem' }}>
                                                <Card.Img variant="top" src={a.Image} />
                                                <Card.Body>
                                                    <Card.Title>{a.Name}</Card.Title>
                                                    <Card.Text>
                                                        {a.NumberOfBooks} Books
                                                   </Card.Text>
                                                </Card.Body>
                                            </Card>

                                    </Link>
                                        </div>

                                )
                            }
                        </Col>
                        <Col sm="2"></Col>

                    </Row>
                </Container>
            </>
        )
    }
}
export default AllAuthors;