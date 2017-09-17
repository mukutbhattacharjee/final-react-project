import React,{Component} from 'react';
import UserSearchFormComponent from "../user-search-form/UserSearchFormComponent";
import UserSearchTableComponent from "../user-search-table/UserSearchTableComponent";

export default class UserSearchComponent extends Component{

    render(){
        let user = {
            id:1,
            name:"mukut",
            email:"mukut@abc.abc",
            city:"blr",
            state:"KA"
        };

        let user1 = {
            id:2,
            name:"mukut",
            email:"mukut@abc.abc",
            city:"blr",
            state:"KA"
        };

        let users = [user1,user];
        return(
            <div>
                <UserSearchFormComponent/>
                <UserSearchTableComponent users = {users}/>
            </div>
        )
    }
}