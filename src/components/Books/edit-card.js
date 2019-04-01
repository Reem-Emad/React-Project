import React from 'react';
import {Card} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function EditCard(){
      return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://images.gr-assets.com/books/1530546018l/39796904.jpg" />
        <Card.Body>
          <Card.Title>Card Title
          <Card.Text className="float-right">
             <FontAwesomeIcon className="mr-3" icon="edit"/>
             <FontAwesomeIcon icon="trash-alt"/>
          </Card.Text>
          </Card.Title>
         
        </Card.Body>
      </Card>
      );

} 

export default EditCard; 