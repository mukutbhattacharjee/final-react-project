import React, {Component} from 'react';
import './EditUser.css';
import {Button, Col, ControlLabel, Form, FormControl, FormGroup, Row} from "react-bootstrap";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {editUser} from "../../actions/index";

class EditUserComponent extends Component{

    constructor(props){
        super(props);
        this.state={
            user_id:props.user.id,
            user_name:props.user.name,
            user_email:props.user.email,
            user_state:props.user.state,
            user_city:props.user.city
        }
    }
    editUser(event){
        event.preventDefault();
        let user = {
            id:this.state.user_id,
            name:this.state.user_name,
            email:this.state.user_email,
            state:this.state.user_state,
            city:this.state.user_city
        };

        this.props.editUser(user);
        this.setState({
            user_id:'',
            user_name:'',
            user_email:'',
            user_state:'',
            user_city:''
        })
        this.props.closeModal();
    }
    render(){
        return(
            <div>
                <Form onSubmit = {(event)=>this.editUser(event)}>
                    <FormGroup controlId="formHorizontalName">
                        <Row>
                            <Col componentClass={ControlLabel} sm={2}>
                                Name:
                            </Col>
                            <Col sm={10}>
                                <FormControl type="text" value={this.state.user_name}
                                            onChange =  {(event) => this.setState({user_name:event.target.value})}/>
                            </Col>
                        </Row>

                    </FormGroup>

                    <FormGroup controlId="formHorizontalEmail">
                        <Row>
                            <Col componentClass={ControlLabel} sm={2}>
                                Email:
                            </Col>
                            <Col sm={10}>
                                <FormControl type="email" value={this.state.user_email}
                                             onChange =  {(event) => this.setState({user_email:event.target.value})}/>
                            </Col>
                        </Row>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalCity">
                        <Row>
                            <Col componentClass={ControlLabel} sm={2}>
                                City:
                            </Col>
                            <Col sm={10}>
                                <FormControl type="text" value={this.state.user_city}
                                             onChange =  {(event) => this.setState({user_city:event.target.value})}/>
                            </Col>
                        </Row>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalState">
                        <Row>
                            <Col componentClass={ControlLabel} sm={2}>
                                State:
                            </Col>
                            <Col sm={10}>
                                <FormControl type="text" value={this.state.user_state}
                                             onChange =  {(event) => this.setState({user_state:event.target.value})}/>
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
function matchDispatchTopProps(dispatch) {
    return bindActionCreators({editUser:editUser}, dispatch);
}

export default connect(null,matchDispatchTopProps)(EditUserComponent);