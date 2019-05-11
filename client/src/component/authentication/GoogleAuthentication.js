import React from 'react';
import axios from '../../config/axios'
export default class GoogleAuthentication extends React.Component{
  constructor(){
    super()
    this.state={
      user:'',
      isloaded:false
    }
  }
  componentDidMount(){
    axios.get('/users/google')
      .then(res=>{
          console.log(res.data)
          this.setState(()=>({
          user:res.data,
          isloaded:true
          }))
        }
      )
      .catch(err=>console.log(err))
  }
  render(){
    return (
      <div>
        {this.state.isloaded && <h1>this.state.user</h1>}
      </div>
    )
  }
}