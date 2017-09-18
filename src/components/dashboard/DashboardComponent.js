import React, {Component} from 'react';
import {Nav, NavItem} from "react-bootstrap";
import AddUserComponent from "../add-user/AddUserComponent";
import UserSearchComponent from "../user-search/UserSearchComponent";

class DashboardComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            selectedTab:'search_user'
        }
    }

    handleSelect(eventKey) {
        this.setState({
            selectedTab:eventKey
        });
    }

    switchToSearchTab(){
        this.setState({
            selectedTab:'search_user'
        });
    }

    render(){
        return(
            <div>
                <Nav bsStyle="tabs" activeKey="1" onSelect={(eventKey)=>this.handleSelect(eventKey)}>
                    <NavItem bsClass="nav-item" eventKey="add_user" active={this.state.selectedTab === 'add_user'}> Add User</NavItem>
                    <NavItem eventKey="search_user" active={this.state.selectedTab === 'search_user'}>Search & Update User</NavItem>
                </Nav>
                {
                    this.state.selectedTab === 'add_user'?<AddUserComponent completed_adding = {()=>this.switchToSearchTab()}/>:<UserSearchComponent/>
                }
            </div>
        )
    }
}

export default DashboardComponent