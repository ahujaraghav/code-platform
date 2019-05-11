import React from 'react'
import GitHubLogin from 'react-github-login'
const Github =(props)=>{
    const responseGithub = (response) => {
        console.log(response)
      }
    return (
        <GitHubLogin
            clientId="3ab6f0bad0007b1fb91d"
            onSuccess={responseGithub}
            onFailure={responseGithub}
        />
    )
}
export default Github