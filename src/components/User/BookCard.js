import React from 'react';
import uuidv1 from 'uuid/v1';
import { Card,Dropdown } from 'react-bootstrap';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import './Style.css';

class UserBookCard extends React.PureComponent {
   
    displayStars=(rating)=>
    {
        
       let avgRatingstars=[];
        for(var i=0;i<rating;i++)
        {
            avgRatingstars.push(<i key={i} className="fas fa-star"></i>);
        }
        return avgRatingstars;
    }
    render() {
        const { title,author,rating,cover } = this.props;

        //  const clickedFilter=this.props.clickedFilter;
        //  let otherFilters=[];
        //  if(clickedFilter=='All')
        //  otherFilters.push('Want To Read','Read')
        //  else if(clickedFilter=='Want To Read') 
        //  otherFilters.push('All','Read')
        //  else
        //  otherFilters.push('Want To Read','All')


        return (
            <>
                <Card className="BookCard">
                    <Card.Img variant="top" src={cover} className="BookCard_img" />
                    <Card.Body style={{display:'flex',flexDirection:'row'}}>
                        <Card.Text style={{marginRight:'10px'}}><span style={{marginRight:'3px',color:'#58371F',fontWeight:'Bold'}}>Title: </span>{title}</Card.Text>
                        <Card.Text style={{marginRight:'10px'}}><span style={{marginRight:'3px',color:'#58371F',fontWeight:'Bold'}}>Author: </span>{author}</Card.Text>
                        <Card.Text style={{marginRight:'10px'}} ><span style={{marginRight:'3px',color:'#58371F',fontWeight:'Bold'}}>AVG Rating: </span> {
                            this.displayStars(rating)
                          
                            }
                        
                        </Card.Text>
                        <Card.Text style={{marginRight:'10px'}}><span style={{marginRight:'3px',color:'#58371F',fontWeight:'Bold'}}>Rating:</span> <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></Card.Text>
                        <Dropdown  >
                            <Dropdown.Toggle variant="success" id="dropdown-basic" className="BookCars_dropdown--btn">
                                Reading
                            </Dropdown.Toggle>

                            {/* <Dropdown.Menu className='BookCars_dropdown--list'>
                            {
                                otherFilters.map(filter=> (<Dropdown.Item key={uuidv1()} className='BookCars_dropdown--listItem'>{filter}</Dropdown.Item>))
                            } */}
                            <Dropdown.Menu>
                                <Dropdown.Item className='BookCars_dropdown--listItem'>Read</Dropdown.Item>
                                <Dropdown.Item className='BookCars_dropdown--listItem'>want to read</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Card.Body>
                </Card>
            </>
        )
    }
}
export default UserBookCard;