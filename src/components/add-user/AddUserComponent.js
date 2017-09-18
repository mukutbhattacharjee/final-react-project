import React, {Component} from 'react';
import './AddUser.css';
import {Button, Col, ControlLabel, Form, FormControl, FormGroup, Row} from "react-bootstrap";
import {addUser} from '../../actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class AddUserComponent extends Component{

    constructor(props){
        super(props);
        this.state={
            user_name:'',
            user_email:'',
            user_state:'',
            user_city:''
        }
    }

    addUser(event){
        event.preventDefault();
        let user = {
            name:this.state.user_name,
            email:this.state.user_email,
            state:this.state.user_state,
            city:this.state.user_city
        };
        this.props.addUser(user);
        this.setState({
            user_name:'',
            user_email:'',
            user_state:'',
            user_city:''
        });
        this.props.completed_adding();
    }

    render(){
        return(
            <div className='add-user-form'>
                <Form onSubmit = {(event)=>this.addUser(event)}>
                    <FormGroup controlId="formHorizontalName">
                        <Row>
                            <Col componentClass={ControlLabel} sm={2}>
                                Name:
                            </Col>
                            <Col sm={10}>
                                <FormControl type="text" value={this.state.user_name} onChange = {(event)=>this.setState({
                                    user_name:event.target.value
                                })} required/>
                            </Col>
                        </Row>

                    </FormGroup>

                    <FormGroup controlId="formHorizontalEmail">
                        <Row>
                            <Col componentClass={ControlLabel} sm={2}>
                                Email:
                            </Col>
                            <Col sm={10}>
                                <FormControl type="email" value={this.state.user_email} onChange = {(event)=>this.setState({
                                    user_email:event.target.value
                                })} required/>
                            </Col>
                        </Row>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalCity">
                        <Row>
                            <Col componentClass={ControlLabel} sm={2}>
                                City:
                            </Col>
                            <Col sm={10}>
                                <FormControl type="text" value={this.state.user_city} onChange = {(event)=>this.setState({
                                    user_city:event.target.value
                                })} required/>
                            </Col>
                        </Row>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalState">
                        <Row>
                            <Col componentClass={ControlLabel} sm={2}>
                                State:
                            </Col>
                            <Col sm={10}>
                                <FormControl type="text" value={this.state.user_state} onChange = {(event)=>this.setState({
                                    user_state:event.target.value
                                })} required/>
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

function matchDispatchToProps(dispatch) {
    return bindActionCreators({addUser:addUser}, dispatch);
}

export default connect(null,matchDispatchToProps)(AddUserComponent);