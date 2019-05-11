
export const addUser = (client) => {
    return {
        type:'ADD_CLIENT',
        payload:client
    }
}
export const removeUser = (id) =>{
    return {
        type:'REMOVE_CLIENT',
        payload:id
    }
}
export const editUser =(data)=>{
    return {
        type:'EDIT_CLIENT',
        payload:{
            id:data.id,
            name:data.name
        }
    }
}