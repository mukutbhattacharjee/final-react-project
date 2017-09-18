export const addUser = (user) =>{
    return{
        type: "USER_ADDED",
        payload: user
    };
};


export const searchKey = (key)=>{
    return{
        type: "USER_SEARCHED",
        payload: key
    }
};

export const addAdmin = (admin)=>{
    return{
        type: "ADMIN_ADDED",
        payload: admin
    }
};

export const removeUser = (id) =>{
    return{
        type: "USER_REMOVED",
        payload: id
    }
};

export const editUser = (user) =>{
    return{
        type: "USER_EDITED",
        payload: user
    }
};
