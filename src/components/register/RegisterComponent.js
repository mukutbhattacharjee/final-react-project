import React, {Component} from 'react';
import './RegisterComponent.css';
import {Addon, Button, Col, Form, FormControl, FormGroup, Grid, InputGroup, Row} from 'react-bootstrap';
import FaEnvelope from 'react-icons/lib/fa/envelope';
import FaKey from 'react-icons/lib/fa/key';
import {addAdmin} from "../../actions/index";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class RegisterComponent extends Component{

    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            confirm_password:'',
            error_text:'',
            validation_state:''
        }

    }

    validate_input(){
        if(this.state.password !== this.state.confirm_password){
            this.setState({
                error_text:'Passwords do not match',
                validation_state:'error'
            });
            return false;
        } else{
            this.setState({
                error_text:'',
                validation_state:''
            });
            return true;
        }

    }


    handleRegister(event){
        event.preventDefault();
        if(this.validate_input()){
            let admin = {
                email:this.state.email,
                password:this.state.password
            }
            this.props.addAdmin(admin);
            this.props.history.push('/login');
        }

    }

    render(){
        return(
        <div className='centralize effect'>
            <Grid bsClass='form-container'>
                <Row>
                    <Col xs = {12} ><h2 className ="login-heading">Create an account</h2></Col>
                </Row>
                <br/>
                <Row>
                    <Col xs = {12}>
                        <Form onSubmit={(event)=>this.handleRegister(event)}>
                            <FormGroup>
                                <InputGroup>
                                    <InputGroup.Addon><FaEnvelope/></InputGroup.Addon>
                                    <FormControl type="email" placeholder = "Email id"
                                                 value={this.state.email}
                                                 onChange={(event)=>this.setState({
                                                     email: event.target.value
                                                 })}
                                                 required/>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <InputGroup>
                                    <InputGroup.Addon><FaKey/></InputGroup.Addon>
                                    <FormControl type="password" placeholder="Password"
                                                 value={this.state.password}
                                                 onChange={(event)=>this.setState({
                                                     password: event.target.value
                                                 })} required/>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup validationState={this.state.validation_state}>
                                <InputGroup>
                                    <InputGroup.Addon><FaKey/></InputGroup.Addon>
                                    <FormControl type="password" placeholder="Re-enter password"
                                                 value={this.state.confirm_password}
                                                 onChange={(event)=>this.setState({
                                                     confirm_password: event.target.value,
                                                     validation_state:'',
                                                     error_text:''
                                                 })} required/>
                                </InputGroup>
                            </FormGroup>
                            <div>
                                <Button type = "submit" bsStyle="success" bsSize="small">
                                    REGISTER
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <div className="error_text">{this.state.error_text}</div>
                </Row>
            </Grid>
        </div>
        )
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({addAdmin:addAdmin}, dispatch);
}

export default connect(null,matchDispatchToProps)(RegisterComponent);