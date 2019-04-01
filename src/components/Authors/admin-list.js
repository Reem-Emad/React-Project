import React from 'react';
import EditCard from './edit-card';
import Authors from '../../Authors';
import {Row} from 'react-bootstrap';

class AdminAuthorsList extends React.Component{
    
    render(){
        return(
            <Row>
                 {Authors.map(a=><EditCard id={a.id} image={a.Image} name={a.Name} description={a.Dscription}
                 NumberOfBooks={a.NumberOfBooks} NumberOfFriends={a.NumberOfFriends} born={a.Born} website={a.Website}
                 influences={a.Influences} member={a["Member Since"]} />)}
            </Row>
            
        );
    }
}

export default  AdminAuthorsList;