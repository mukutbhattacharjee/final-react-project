const initialState = [
    {
        email:"mukut@abc.abc",
        password:'root'
    },
];


export default function (state=initialState,action) {
    switch (action.type){
        case "ADMIN_ADDED":
            return [...state,action.payload];
            break;

        default:
            return state;
    }
}