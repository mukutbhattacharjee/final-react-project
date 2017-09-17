import React, {Component} from 'react';
import './userSearch.css'
import {Button, ControlLabel, Form, FormControl, FormGroup, Panel} from "react-bootstrap";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {searchReset, searchUser} from "../../actions/index";

class UserSearchFormComponent extends Component{

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
                        <FormControl type="text" value = {this.state.name} onChange = {(event) => this.handleNameChange(event)}/>
                    </FormGroup>
                    {' '}
                    <FormGroup controlId="formInlineEmail">
                        <ControlLabel>Email</ControlLabel>
                        {'* '}
                        <FormControl type="email" value = {this.state.email} onChange = {(event) => this.handleEmailChange(event)}/>
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
        let searchKey = {
            name:this.state.name,
            email:this.state.email
        };
        this.props.searchUser(searchKey);
    }

    handleReset() {
        this.setState({
            name:'',
            email:''
        });
        this.props.searchReset();
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({searchUser:searchUser,searchReset:searchReset}, dispatch);
}

export default connect(null,matchDispatchToProps)(UserSearchFormComponent);