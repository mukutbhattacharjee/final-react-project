import React,{Component} from 'react';
import UserSearchRowComponent from "../user-search-row/UserSearchRowComponent";
import {Modal, Panel} from "react-bootstrap";
import EditUserComponent from "../edit-user/EditUserComponent";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {removeUser} from '../../actions/index';

class UserSearchTableComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            showModal: false,
            selectedUser:''
        }
    }

    closeModal() {
        this.setState({ showModal: false });
    }

    openModal() {
        this.setState({ showModal: true });
    }

    editUserModal(id){
        this.openModal();
    }

    removeUser(id){
        this.props.removeUser(id);
    }

    render(){
        let user= {
            id:1,
            name:"mukut",
            email:"mukut@abc.abc",
            city:"blr",
            state:"KA"
        };
        return(
            <div>
                <Panel header="Search Results">
                    <table className='table table-striped'>
                        <thead>
                        <tr>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>CITY</th>
                            <th>STATE</th>
                            <th>EDIT</th>
                            <th>REMOVE</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.users.map((user)=>{
                            return <UserSearchRowComponent key = {user.id} user={user}
                                                           edit={this.editUserModal.bind(this)} removeUser={this.removeUser.bind(this)}/>
                        })}
                        </tbody>
                    </table>
                </Panel>

                <Modal show={this.state.showModal} onHide={this.closeModal.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit User Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <EditUserComponent user={user}/>
                    </Modal.Body>
                </Modal>
            </div>

        )
    }
}

function matchDispatchTopProps(dispatch) {
    return bindActionCreators({removeUser:removeUser}, dispatch);
}

export default connect(null,matchDispatchTopProps)(UserSearchTableComponent);