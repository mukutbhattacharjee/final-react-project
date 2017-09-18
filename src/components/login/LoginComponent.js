import React, {Component} from 'react';
import './LoginComponent.css';
import {Addon, Button, Col, Form, FormControl, FormGroup, Grid, InputGroup, Row} from 'react-bootstrap';
import FaEnvelope from 'react-icons/lib/fa/envelope';
import FaKey from 'react-icons/lib/fa/key';
import {connect} from "react-redux";

class LoginComponent extends Component{

    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            validation_state:'',
            error_text:''
        }

    }

    goToRegister(){
        this.props.history.push('/register');
    }

    handlePasswordChange(event){
        this.setState({
            password: event.target.value,
            validation_state:'',
            error_text:''
        })
    }

    handleEmailChange(event){
        this.setState({
            email: event.target.value,
            validation_state:'',
            error_text:'',
        })
    }

    handleLogin(event){
        event.preventDefault();
        let validAdmins = (this.props.admins.filter(x=>{
                return (x.email === this.state.email && x.password === this.state.password);
            }));
        if(validAdmins.length>0){
            console.log("login success");
            this.props.history.push('/dashboard');
        }
        else{
            console.log("login fail");
            this.setState({
                email:'',
                password:'',
                validation_state:'error',
                error_text:'Email or Password did not match'
            })
        }
    }

    render(){
        return(
        <div className='centralize effect'>
            <Grid bsClass='form-container'>
                <Row>
                    <Col xs = {12} ><h2 className ="login-heading">Login to your account</h2></Col>
                </Row>
                <br/>
                <Row>
                    <Col xs = {12}>
                        <Form onSubmit={(event)=>this.handleLogin(event)}>
                            <FormGroup validationState={this.state.validation_state}>
                                <InputGroup>
                                    <InputGroup.Addon><FaEnvelope/></InputGroup.Addon>
                                    <FormControl type="email" placeholder = "email id"
                                                 value={this.state.email}
                                                 onChange={(event)=>this.handleEmailChange(event)} required/>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup validationState={this.state.validation_state}>
                                <InputGroup>
                                    <InputGroup.Addon><FaKey/></InputGroup.Addon>
                                    <FormControl type="password" placeholder="password"
                                                 value={this.state.password}
                                                 onChange={(event)=>this.handlePasswordChange(event)} required/>
                                </InputGroup>
                            </FormGroup>
                            <div>
                                <Button type = "submit" bsStyle="success" bsSize="small">
                                    Get In
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <div className="error_text">{this.state.error_text}</div>
                </Row>
                <Row>
                    <Col xs = {12}>Don't have an account?
                        <span onClick={this.goToRegister.bind(this)} className="register-link">Create one</span></Col>
                </Row>
            </Grid>
        </div>
        )
    }
}

function mapStateToProps(state){
    return {
        admins:state.admins
    };
}

export default connect(mapStateToProps)(LoginComponent);
