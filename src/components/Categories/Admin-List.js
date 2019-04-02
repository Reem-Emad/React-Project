import React from 'react';
import EditCard from './edit-card';
import Books from '../../Books';
import {Row} from 'react-bootstrap';
import CategirosData from '../../Categories';
import { MyContext } from '../../App';

class CategoriesAdminList extends React.Component{
    
    render(){
         return(
                <>

            <Row key={this.props.Id}>
                 {CategirosData.map(b=><EditCard 
                 id={b.Id}
                 name={b.Name}  key={CategirosData.Id} />)}
            </Row>
            </>
                    )
                } 
}

export default CategoriesAdminList;