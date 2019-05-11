import React from 'react'
import FacebookLogin from 'react-facebook-login'
const Facebook =(props)=>{
    const responseFacebook = (response) => {
        console.log(response);
      }
    return (
        <FacebookLogin
            appId="2090201821277143"
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook}
        />
    )
}
export default Facebook