import React, {Component} from 'react';
import './AddUser.css';
import {Button, Col, ControlLabel, Form, FormControl, FormGroup, Row} from "react-bootstrap";


export default class AddUserComponent extends Component{
    render(){
        return(
            <div className='add-user-form'>
                <Form>
                    <FormGroup controlId="formHorizontalName">
                        <Row>
                            <Col componentClass={ControlLabel} sm={2}>
                                Name:
                            </Col>
                            <Col sm={10}>
                                <FormControl type="text"/>
                            </Col>
                        </Row>

                    </FormGroup>

                    <FormGroup controlId="formHorizontalEmail">
                        <Row>
                            <Col componentClass={ControlLabel} sm={2}>
                                Email:
                            </Col>
                            <Col sm={10}>
                                <FormControl type="email" />
                            </Col>
                        </Row>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalCity">
                        <Row>
                            <Col componentClass={ControlLabel} sm={2}>
                                City:
                            </Col>
                            <Col sm={10}>
                                <FormControl type="text" />
                            </Col>
                        </Row>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalState">
                        <Row>
                            <Col componentClass={ControlLabel} sm={2}>
                                State:
                            </Col>
                            <Col sm={10}>
                                <FormControl type="text"/>
                            </Col>
                        </Row>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalState">
                        <Row>
                            <Col componentClass={ControlLabel} sm={2}>
                                <Button bsStyle="primary" type='submit'>Add</Button>
                            </Col>
                        </Row>
                    </FormGroup>


                </Form>
            </div>

        )
    }
}