import React from 'react';
import books from '../../Books';
import { Dropdown, Row, Container, Col, Card, Button } from 'react-bootstrap';
import Book from './Book';
class AllBooks extends React.Component {
    render() {
        return (
            <>
                {books.filter(b => (b.category === this.props.selectedCategory)).map(b => <div style={{ display: 'inline', margin: '20px' }} key={b.id} >
                    <Book id={b.id} cover={b.cover} title={b.title} author={b.author} />

                </div>)
                }
            </>
        )

    }
}
export default AllBooks;
