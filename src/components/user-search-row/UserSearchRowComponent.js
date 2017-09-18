import React, {Component} from 'react';
import {Button} from "react-bootstrap";

class UserSearchRowComponent extends Component{

    edit(){
        let user = this.props.user;
        this.props.edit(user);
    }

    remove(){
        let id = this.props.user.id;
        this.props.removeUser(id);
    }

    render(){
        return(
                <tr>
                    <td>{this.props.user.name}</td>
                    <td>{this.props.user.email}</td>
                    <td>{this.props.user.city}</td>
                    <td>{this.props.user.state}</td>
                    <td><Button bsStyle='success' bsSize="xsmall" onClick={this.edit.bind(this)}>Edit</Button></td>
                    <td><Button bsStyle='danger' bsSize="xsmall" onClick={this.remove.bind(this)}>Remove</Button></td>
                </tr>
        )
    }

}
export default UserSearchRowComponent;