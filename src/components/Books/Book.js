import React from 'react';
import { Dropdown, Row, Container, Col, Card, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
class Book extends React.Component {
    render() {
        return (
            <>
                <Link to = {`/bookDetailes/${this.props.id}`}>
                <Card style={{ width: '9rem', display: 'inline-block' }}>
                    <Card.Img variant="top" src={this.props.cover} />
                    <Card.Body style={{ width: '10rem', height: '10rem', overflow: 'auto' }}>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.author}
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Link>
            

            </>
        )

    }
}
export default Book;