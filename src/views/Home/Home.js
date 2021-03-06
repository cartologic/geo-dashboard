import React, {Component} from 'react';
import {
    Card, CardBody, CardHeader, Col,
    Row,
} from 'reactstrap';


class Home extends Component {
    render() {

        return (
            <div className="animated fadeIn">
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                Welcome Django User
                            </CardHeader>
                            <CardBody>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Home;
