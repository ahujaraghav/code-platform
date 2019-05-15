import React from 'react'
import axios from '../../config/axios'
import { MDBCol, MDBRow } from 'mdbreact'
class Register extends React.Component{
    constructor(props){
        super(props)
        this.state={
            firstname:'',
            lastname:'',
            username:'',
            email:'',
            password:'',
            confirmPassword:'',
            isRegistered:false,
            type:"password"
        }
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        const { firstname, lastname, username, email, password, confirmPassword } =this.state
        if(password !== confirmPassword){
            window.alert("Password didn't match")
        }else{
            const formData ={
                firstname,
                lastname,
                username,
                email,
                password
            }
           axios.post(`/users/register`,formData)
            .then(res=>console.log(res.data))
                .then(()=>this.props.history.push('/users/login'))
                .catch(err=>console.log(err))
            this.setState(()=>({
                firstname:'',
                lastname:'',
                username:'',
                email:'',
                password:''
            }))
        }
        
    }
    handleChange =(e)=>{
        e.persist()
        this.setState(()=>({
            [e.target.name]:e.target.value
        }))
    }
    handleChecked = (e) =>{
        e.target.checked?this.setState(()=>({ type:"text" })):this.setState(()=>({ type:"password" }))
    }
    render(){
        return (
            <div>
                    <form onSubmit={this.handleSubmit} className="form">
                        <MDBRow form>
                            <MDBCol md={6}>
                                <div className="form-group input-group input-group-sm mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" > First Name:</span>
                                    </div>
                                    <input className="form-control" type="text" value={this.state.firstname} onChange={this.handleChange} placeholder="enter first name" name="firstname" required />
                                </div>
                            </MDBCol>

                            <MDBCol md={6}>
                                <div className="form-group input-group input-group-sm mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" > Last Name:</span>
                                    </div>
                                    <input className="form-control" type="text" value={this.state.lastname} onChange={this.handleChange} placeholder="enter last name" name="lastname" required />
                                </div>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow form>
                            <MDBCol md={6}>
                                <div className="form-group input-group input-group-sm mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" > Username:</span>
                                    </div>
                                    <input className="form-control" type="text" value={this.state.username} onChange={this.handleChange} placeholder="enter username" name="username" required />
                                </div>
                            </MDBCol>
                            
                            <MDBCol md={6}>
                                <div className="form-group input-group input-group-sm mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" > Email:</span>
                                    </div>
                                    <input className="form-control" type="email" value={this.state.email} onChange={this.handleChange} placeholder="enter email id" name="email" required />
                                </div>
                            </MDBCol>
                        </MDBRow>
                        
                        <MDBRow form>
                            <MDBCol md={6}>
                                <div className="form-group input-group input-group-sm mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" > Password:</span>
                                    </div>
                                    <input className="form-control" type={this.state.type} value={this.state.password} onChange={this.handleChange} placeholder="enter password" name="password" required />
                                </div>
                            </MDBCol>

                            <MDBCol md={6}>
                                <div className="form-group input-group input-group-sm mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" > Confirm Password:</span>
                                    </div>
                                    <input className="form-control" type={this.state.type} value={this.state.confirmPassword} onChange={this.handleChange} placeholder="confirm password" name="confirmPassword" required />
                                </div>
                            </MDBCol>
                        </MDBRow>

                            <div className="form-group ">
                                <input type='checkbox' onChange={this.handleChecked} className="checkbox m-2" />
                                <label> show password</label>
                            </div>

                            <input type="submit" className="btn btn-primary btn-sm btn-block mb-5"/>
                    </form>
            </div>
          )
    }
    
  }
  export default Register