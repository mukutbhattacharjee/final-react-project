const initialState = {
    searchKey:'',
    storedUsers:[
        {
            id:1,
            name:"mukut",
            email:"mukut@abc.abc",
            city:"blr",
            state:"KA"
        },
        {
            id:2,
            name:"melissa",
            email:"melissa@abc.abc",
            city:"blr",
            state:"KA"
        },
        {
            id:3,
            name:"abhishek",
            email:"abhishek@abc.abc",
            city:"blr",
            state:"KA"
        }
    ]
};


export default function (state=initialState,action) {
    switch (action.type){
        case "USER_SEARCHED":
            return Object.assign({}, state, {
                searchKey: action.payload
            });
            break;
        case "USER_ADDED":
            let new_user = action.payload;
            new_user.id = state.storedUsers.length + 1;
            return Object.assign({}, state, {
                storedUsers: [...(state.storedUsers),new_user]
            });
            break;

        case "USER_REMOVED":
            return Object.assign({}, state, {
                storedUsers: state.storedUsers.filter((x)=>{
                    return x.id !== action.payload;
                })
            });
            break;

        case "USER_EDITED":
            state.storedUsers[action.payload.id-1]=action.payload;
            return state;
            break;

        default:
            return state;
    }
}