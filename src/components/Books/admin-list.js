import React from 'react';
import EditCard from './edit-card';
import Books from '../../Books';
import {Row} from 'react-bootstrap';

class AdminBooksList extends React.Component{
    
    render(){
        return(
            <Row>
                 {Books.map(b=><EditCard id={b.id} cover={b.cover} title={b.title} description={b.description}
                 author={b.author} category={b.category} pages={b.pages}/>)}
            </Row>
            
        );
    }
}

export default  AdminBooksList;