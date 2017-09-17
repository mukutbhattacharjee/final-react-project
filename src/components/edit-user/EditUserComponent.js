import React, {Component} from 'react';
import './EditUser.css';
import {Button, Col, ControlLabel, Form, FormControl, FormGroup, Row} from "react-bootstrap";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

export default class EditUserComponent extends Component{

    constructor(props){
        super(props);
        this.state={
            user:props.user
        }
    }
    render(){
        return(
            <div>
                <Form>
                    <FormGroup controlId="formHorizontalName">
                        <Row>
                            <Col componentClass={ControlLabel} sm={2}>
                                Name:
                            </Col>
                            <Col sm={10}>
                                <FormControl type="text" value={this.state.user.name}/>
                            </Col>
                        </Row>

                    </FormGroup>

                    <FormGroup controlId="formHorizontalEmail">
                        <Row>
                            <Col componentClass={ControlLabel} sm={2}>
                                Email:
                            </Col>
                            <Col sm={10}>
                                <FormControl type="email" value={this.state.user.email}/>
                            </Col>
                        </Row>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalCity">
                        <Row>
                            <Col componentClass={ControlLabel} sm={2}>
                                City:
                            </Col>
                            <Col sm={10}>
                                <FormControl type="text" value={this.state.user.city}/>
                            </Col>
                        </Row>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalState">
                        <Row>
                            <Col componentClass={ControlLabel} sm={2}>
                                State:
                            </Col>
                            <Col sm={10}>
                                <FormControl type="text" value={this.state.user.state}/>
                            </Col>
                        </Row>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalState">
                        <Row>
                            <Col componentClass={ControlLabel} sm={2}>
                                <Button bsStyle="success" type='submit'>Save Changes</Button>
                            </Col>
                        </Row>
                    </FormGroup>


                </Form>
            </div>

        )
    }
}