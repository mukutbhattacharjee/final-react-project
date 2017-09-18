import React, {Component} from 'react';
import './userSearch.css'
import {Button, ControlLabel, Form, FormControl, FormGroup, Panel} from "react-bootstrap";

export default class UserSearchFormComponent extends Component{

    constructor(props){
        super(props);
        this.state={
            name:'',
            email:''
        }
    }
    render(){
        return(
            <Panel header="Search Users">
                <Form inline onSubmit={(event)=>this.handleSearch(event)}>
                    <FormGroup controlId="formInlineName">
                        <ControlLabel>Name</ControlLabel>
                        {'* '}
                        <FormControl type="text" value = {this.state.name}
                                     onChange = {(event) => this.handleNameChange(event)} required/>
                    </FormGroup>
                    {' '}
                    <FormGroup controlId="formInlineEmail">
                        <ControlLabel>Email</ControlLabel>
                        {'* '}
                        <FormControl type="email" value = {this.state.email}
                                     onChange = {(event) => this.handleEmailChange(event)} required/>
                    </FormGroup>
                    {' '}
                    <Button  bsStyle="info" type="submit">
                        Search
                    </Button>
                    {' '}
                    <Button  bsStyle="info" type="button" onClick={()=>this.handleReset()}>
                        Reset
                    </Button>
                </Form>
            </Panel>
        )
    }

    handleNameChange(event) {
        this.setState({
            name:event.target.value
        });
    }

    handleEmailChange(event) {
        this.setState({
            email:event.target.value
        });
    }

    handleSearch(event) {
        event.preventDefault();
        let searchKey = {
            name:this.state.name,
            email:this.state.email
        };
        this.props.search(searchKey);
    }

    handleReset() {
        this.setState({
            name:'',
            email:''
        });
        this.props.reset();
    }
}
