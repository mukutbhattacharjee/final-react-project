import React from 'react';
import ReactDOM from 'react-dom';
import UserSearchRowComponent from "./UserSearchRowComponent";

let user = {
    name:"mukut",
    email:"mukut@abc.abc",
    city:"blr",
    state:"KA",
    edit: function () {

    },
    remove: function () {

    }
};
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UserSearchRowComponent user={user}/>, div);
});
