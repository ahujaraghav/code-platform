
const usersInitialState = []
const usersReducer = (state = usersInitialState , action ) => {
    switch(action.type){
        case 'ADD_USER':
            return [...state,action.payload]
        case 'EDIT_USER':
            return state.map(client=>{
                    if(client.id===action.payload.id){
                        return {...client,...action.payload}
                    }else{
                        return {...client}
                    }
                })
        case 'REMOVE_USER':
            return state.filter(client => client.id !== action.payload)
        default:
            return[...state]
    }
}
export default usersReducer