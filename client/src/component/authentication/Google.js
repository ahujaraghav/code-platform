import React from 'react'
import GoogleLogin from 'react-google-login'
const Google =(props)=>{
    const responseGoogle = (response) => {
        console.log(response)
        console.log(response.tokenObj.access_token)
        console.log(response.profileObj)
      }
    return (
        <GoogleLogin
            clientId="599823226945-mo90cj0atoe8tc4fbgqte4lkirg4qt6q.apps.googleusercontent.com"
            buttonText="Sign In with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    )
}
export default Google