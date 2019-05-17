
const collegesInitialState = []
const collegesReducer = (state = collegesInitialState , action ) => {
    switch(action.type){
        case 'ADD_COLLEGE':
            return [...state,action.payload]
        case 'EDIT_COLLEGE':
            return state.map(client=>{
                    if(client.id===action.payload.id){
                        return {...client,...action.payload}
                    }else{
                        return {...client}
                    }
                })
        case 'REMOVE_COLLEGE':
            return state.filter(client => client.id !== action.payload)
        case 'UPDATE_COLLEGE':
            return state.map(college=>{
                if(college.id==action.id){
                    return {...college,...action.college}
                }else{
                    return {...college}
                }
            })
        default:
            return[...state]
    }
}
export default collegesReducer