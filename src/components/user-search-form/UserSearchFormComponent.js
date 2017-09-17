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
                <Form inline>
                    <FormGroup controlId="formInlineName">
                        <ControlLabel>Name</ControlLabel>
                        {'* '}
                        <FormControl type="text"/>
                    </FormGroup>
                    {' '}
                    <FormGroup controlId="formInlineEmail">
                        <ControlLabel>Email</ControlLabel>
                        {'* '}
                        <FormControl type="email"/>
                    </FormGroup>
                    {' '}
                    <Button  bsStyle="info" type="button" onClick={()=>this.handleSearch()}>
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

    handleSearch() {

    }

    handleReset() {

    }
}