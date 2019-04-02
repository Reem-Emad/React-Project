import React from 'react';
import EditCard from './Edit-Card';
import Books from '../../Books';
import CategirosData from '../../Categories';
import Navbar from '../Shared/Navbar';
import {Row} from 'react-bootstrap';
import { MyContext } from '../../App';

class CategoriesAdminList extends React.Component{
    
    render(){
         return(
                <>
          <Navbar></Navbar>
            <Row >
                 {CategirosData.map(b=><EditCard key={b.Id}
                 id={b.Id}
                 name={b.Name}   />)}
            </Row>
            </>
                    )
                } 
}

export default CategoriesAdminList;