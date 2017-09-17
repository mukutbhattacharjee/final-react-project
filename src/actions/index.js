const addUser = (user) =>{
    return{
        type: "USER_ADDED",
        payload: user
    }
};

export const searchUser = (searchKey) =>{
    console.log("Searched: "+searchKey);
    return{
        type: "USER_SEARCHED",
        payload: searchKey
    }
};

export const searchReset = () =>{
    return{
        type: "SEARCH_RESET"
    }
};

export const removeUser = (id) =>{
    return{
        type: "USER_REMOVED",
        payload: id
    }
};

export default (addUser) ;