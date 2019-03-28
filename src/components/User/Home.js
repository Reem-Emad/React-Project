import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import UserNavBar from './UserNavBar';
import Table from 'react-bootstrap/Table'
import './Home.css';
import { MDBDataTable } from 'mdbreact';
import books from '../../books';


class UserHome extends React.Component {
    state = {
        books: books
    }
    Allbooks = (e) => {
        this.setState({ books: books })
    }
    Read = (e) => {
        const onlyRead = books.filter(b => (b.read === true));
        this.setState({ books: onlyRead })
    }
    currentlyReading = (e) => {
        const currentlyreading = books.filter(b => (b.currentlyReading === true));
        this.setState({ books: currentlyreading })
    }
    wantToRead = (e) => {
        const wanttoread = books.filter(b => (b.wantToRead === true));
        this.setState({ books: wanttoread })
    }
    render() {
        const data = {
            columns: [
                {
                    label: 'Id',
                    field: 'id',
                    sort: 'asc',
                    // width: 150
                },
                {
                    label: 'Cover',
                    field: 'cover',
                    sort: 'asc',
                    // width: 150
                },
                {
                    label: 'Title',
                    field: 'title',
                    sort: 'asc',
                    // width: 270
                },
                {
                    label: 'Author',
                    field: 'author',
                    sort: 'asc',
                    // width: 200
                },
                {
                    label: 'Category',
                    field: 'category',
                    sort: 'asc',
                    // width: 100
                },
                {
                    label: 'Rating',
                    field: 'rating',
                    sort: 'asc',
                    // width: 150
                },
                {
                    label: 'Pages',
                    field: 'pages',
                    sort: 'asc',
                    // width: 100
                }
            ],
            rows: this.state.books

        }

        return (
            <>
                <UserNavBar />

                <div className="sideMenu">
                    {/* <Dropdown.Menu show> */}
                    <Dropdown.Header>Bookshelves</Dropdown.Header>
                    <Dropdown.Item eventKey="2" onClick={this.Allbooks}>All</Dropdown.Item>
                    <Dropdown.Item eventKey="3" onClick={this.Read} >Read</Dropdown.Item>
                    <Dropdown.Item eventKey="3" onClick={this.currentlyReading}>Currently Reading</Dropdown.Item>
                    <Dropdown.Item eventKey="3" onClick={this.wantToRead}>Want To Read</Dropdown.Item>

                    {/* </Dropdown.Menu> */}
                    <div className="spliterline"></div>
                </div>
                <div className="rightside">
                    <MDBDataTable
                        // small
                        data={data}
                    />

                </div>

            </>
        )
    }
}
export default UserHome;