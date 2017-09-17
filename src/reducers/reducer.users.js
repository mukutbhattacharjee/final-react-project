const initialState = [
    {
        id:1,
        name:"mukut",
        email:"mukut@abc.abc",
        city:"blr",
        state:"KA"
    },
    {
        id:3,
        name:"melissa",
        email:"melissa@abc.abc",
        city:"blr",
        state:"KA"
    },
    {
        id:2,
        name:"abhishek",
        email:"abhishek@abc.abc",
        city:"blr",
        state:"KA"
    }
];

let searchUsers = initialState;
let finalState = initialState;

export default function (state=finalState,action) {
    switch (action.type){
        case "SEARCH_RESET":
            return finalState;
            break;
        case "USER_ADDED":
            return [...finalState,action.payload];
            break;
        case "USER_SEARCHED":
            searchUsers = state.filter((x)=>{
                return (x.name === action.payload.name && x.email === action.payload.email)
            });
            return searchUsers;

            break;
        case "USER_REMOVED":
            finalState =  state.filter((x)=>{
                return x.id != action.payload;
            });
            return finalState;
            break;
        default:
            return finalState;
    }
}