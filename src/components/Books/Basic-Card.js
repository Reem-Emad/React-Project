import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
class BasicCard extends React.Component {
    render() {
        return (
            <>

                <Col key={this.props.id} className="m-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={this.props.cover} style={{ height: '20rem' }} />
                        <Card.Body>
                            <Link to={`/bookDetailes/${this.props.id}`}>
                                <Card.Title>{this.props.title} </Card.Title>
                            </Link>
                            <Card.Text>
                                By:
                                {this.props.author}
                            </Card.Text>


                        </Card.Body>
                    </Card>
                </Col>



            </>
        )

    }
}
export default BasicCard;