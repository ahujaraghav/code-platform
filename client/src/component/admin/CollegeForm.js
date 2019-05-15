import React from 'react'
import { MDBBtn, MDBIcon , MDBInput } from 'mdbreact'
class CollegeForm extends React.Component{
    constructor(){
        super()
        this.state={
            name:'',
            address:{
                line1:'',
                line2:'',
                city:'',
                state:'',
                pincode:''
            },
            admin:{
                firstName:'',
                lastName:'',
                email:''
            }
        }
    }
    handleChange =(e)=>{
        e.persist()
        this.setState(()=>({
            [e.target.name]:e.target.value
        }))
    }
    render(){
        return (
            <div>
            <form>
            <p className="h5 text-center mb-4">Write to us</p>
            <div className="grey-text">
                <MDBInput label="Username" icon="user" />
                <MDBInput label="Your email"/>
                <MDBInput label="Subject" />
            </div>
            <div className="text-center">
              <MDBBtn outline color="secondary">
                Send <MDBIcon icon="paper-plane" className="ml-1" />
              </MDBBtn>
            </div>
          </form>
            </div>
        )
    }
}
export default CollegeForm