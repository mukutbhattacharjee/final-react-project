import React,{Component} from 'react';
import './LoginComponent.css';
import { Grid, Row, Col, Button,FormGroup,InputGroup,Addon,FormControl,Form } from 'react-bootstrap';
import FaEnvelope from 'react-icons/lib/fa/envelope';
import FaKey from 'react-icons/lib/fa/key';
class LoginComponent extends Component{

    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }

    }

    handlePasswordChange(event){
        this.setState({
            password: event.target.value
        })
    }

    handleEmailChange(event){
        this.setState({
            email: event.target.value
        })
    }

    handleLogin(){
        console.log(this.state.email +":"+ this.state.password);
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
                        <Form>
                            <FormGroup>
                                <InputGroup>
                                    <InputGroup.Addon><FaEnvelope/></InputGroup.Addon>
                                    <FormControl type="email" placeholder = "email id"
                                                 value={this.state.email} onChange={(event)=>this.handleEmailChange(event)}/>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <InputGroup>
                                    <InputGroup.Addon><FaKey/></InputGroup.Addon>
                                    <FormControl type="password" placeholder="password"
                                                 value={this.state.password} onChange={(event)=>this.handlePasswordChange(event)}/>
                                </InputGroup>
                            </FormGroup>
                            <div>
                                <Button bsStyle="success" bsSize="small" onClick={()=>this.handleLogin()}>
                                    Get In
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col xs = {12}>Don't have an account? <span className="register-link">Create one</span></Col>
                </Row>
            </Grid>
        </div>
        )
    }
}

export default LoginComponent;