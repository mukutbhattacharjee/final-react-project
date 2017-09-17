import React,{Component} from 'react';
import {connect} from 'react-redux';
import UserSearchFormComponent from "../user-search-form/UserSearchFormComponent";
import UserSearchTableComponent from "../user-search-table/UserSearchTableComponent";

class UserSearchComponent extends Component{

    render(){
        return(
            <div>
                <UserSearchFormComponent/>
                <UserSearchTableComponent users = {this.props.users}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
      users:state.users
    };
}

export default connect(mapStateToProps)(UserSearchComponent);