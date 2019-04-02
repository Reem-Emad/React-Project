import React from 'react';
import authors from '../../Authors';
import { Row } from 'react-bootstrap';
import BasicCard from './Basic-card';
class AllAuthors extends React.Component {
    render() {
        return (
            <>
                <Row className="no-gutters">
                    {
                        authors.map((a) => <BasicCard id={a.id} image={a.Image} name={a.Name} />)
                    }
                </Row>
            </>
        )
    }
}
export default AllAuthors;