import React from 'react';
import { Dropdown, Row, Container, Col, Card, Button } from 'react-bootstrap';
import './Style.css';
import categories from '../../Categories';
// import AllBooks from '../Books/AllBooks';

import BooksList from '../Books/List';
import ListByCategory from '../Books/ListByCategory';
class Categories extends React.Component {
    state = {
        selectedCategory: '',
        NumberOfBooks: 0,
    }
    selectedCategory = (j) => (e) => {
        this.setState({ selectedCategory: j });
    }
    render() {
        let eventKey = 1;
        return (
            <>

                <Container className="Container">
                <Row>
                    
                </Row>
                    <Row>
                        <Col sm="1"></Col>
                        <Col sm="2">
                            <Dropdown.Menu show>
                                <Dropdown.Header>Favorite Genres:</Dropdown.Header>
                                {
                                    categories.map((c) => { eventKey = eventKey + 1; return (<div key={c.Id}><Dropdown.Item onClick={this.selectedCategory(c.Name)} eventKey={eventKey}>{c.Name}</Dropdown.Item> </div>) })
                                }
                            </Dropdown.Menu>
                        </Col>
                        <Col sm="9">

                            {this.state.selectedCategory}
                            <br></br>
                            {
                                <ListByCategory selectedCategory={this.state.selectedCategory} />
                            }


                        </Col>

                    </Row>

                </Container>

            </>
        )
    }
}
export default Categories;