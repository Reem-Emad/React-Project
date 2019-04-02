import React from 'react';
import {Row} from 'react-bootstrap';
import BasicCard from './basic-card'
import {MyContext} from '../../App';


class BooksList extends React.Component {
    render() {
        return (
            <MyContext.Consumer>
                {value=>(
            <>
            <Row className="no-gutters">
                {value.state.Books.map(b => <BasicCard key={b.id} id={b.id}
                   cover={b.cover} title={b.title} author={b.author} >
                </BasicCard>)
            }
            </Row>
            </>
                )}
            </MyContext.Consumer>
        )

    }
}
export default BooksList;
