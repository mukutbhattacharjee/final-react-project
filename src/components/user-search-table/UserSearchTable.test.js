import React from 'react';
import ReactDOM from 'react-dom';
import UserSearchTableComponent from "./UserSearchTableComponent";

let user = {
    name:"mukut",
    email:"mukut@abc.abc",
    city:"blr",
    state:"KA",
    edit: function () {
        console.log("editing");

    },
    remove: function () {
        console.log("removing");
    }
};

let user1 = {
    name:"mukut",
    email:"mukut@abc.abc",
    city:"blr",
    state:"KA",
    edit: function () {
        console.log("editing");

    },
    remove: function () {
        console.log("removing");
    }
};

let users = [user1,user];

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UserSearchTableComponent users={users} />, div);
});
