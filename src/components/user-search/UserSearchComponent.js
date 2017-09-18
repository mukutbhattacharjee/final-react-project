import React, {Component} from 'react';
import {connect} from 'react-redux';
import UserSearchFormComponent from "../user-search-form/UserSearchFormComponent";
import UserSearchTableComponent from "../user-search-table/UserSearchTableComponent";
import {searchKey} from "../../actions/index";
import {bindActionCreators} from "redux";

class UserSearchComponent extends Component{

    search = function(searchKey){
        console.log("Searching with key:"+searchKey);
        this.props.searchKey(searchKey);
    };

    reset = function(){
        console.log("resetting");
        this.props.searchKey('');
    };

    render(){
        return(
            <div>
                <UserSearchFormComponent search = {(searchKey)=>this.search(searchKey)} reset={()=>this.reset()}/>
                <UserSearchTableComponent users = {this.props.users}/>
            </div>
        )
    }
}

function mapStateToProps(state){

    if(state.users.searchKey===''){
        return {
            users:state.users.storedUsers
        }
    }
    else{
        return {
            users:state.users.storedUsers
                .filter(x=>{
                    return(x.name===state.users.searchKey.name && x.email===state.users.searchKey.email)
                }),
        };
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({searchKey:searchKey}, dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(UserSearchComponent);