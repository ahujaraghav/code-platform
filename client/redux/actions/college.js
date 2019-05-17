
export const addCollege = (data) => {
    return {
        type:'ADD_COLLEGE',
        payload:data
    }
}
export const removeCollege = (id) =>{
    return {
        type:'REMOVE_COLLEGE',
        payload:id
    }
}
export const editCollege =(data)=>{
    return {
        type:'EDIT_COLLEGE',
        payload:data
    }
}
export const updateCollege = (data) =>{
    return {
        type:'UPDATE_COLLEGE',
        payload:data
    }
}