import React from 'react'
import { MDBRow, MDBCol, MDBCardBody, MDBCard } from 'mdbreact'
import { Card,Button ,CardContent,FormControl,Input,InputLabel, Typography, Avatar } from '@material-ui/core'
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
                pincode:'',
                country:''
            }
        }
    }
    handleChange =(e)=>{
        e.persist()
        this.setState(()=>({
            [e.target.name]:e.target.value
        }))
    }
    handleSubmit =(e)=>{
        e.preventDefault()
        console.log(this.state.name)
        console.log(this.state.address)
    }
    render(){
        return (
            <div>
                <MDBCard>
                    <MDBCardBody>
                        <form  onSubmit={this.handleSubmit} className="text-center">
                                <Typography variant="h4" component="h2">Add a College</Typography>

                                <FormControl margin="normal" variant="outlined" required fullWidth>
                                    <InputLabel>  College Name</InputLabel>
                                    <Input autoFocus  type="text" value={this.state.name} onChange={this.handleChange} placeholder="College Name" name="name" /> 
                                </FormControl>

                                <MDBRow>
                                    <MDBCol>
                                        <FormControl margin="normal" variant="outlined" required fullWidth>
                                            <InputLabel> Address</InputLabel>
                                            <Input autoFocus  type="text" value={this.state.name} onChange={this.handleChange} placeholder="College Name" name="name" /> 
                                        </FormControl>
                                    </MDBCol>
                                    <MDBCol>
                                        <FormControl margin="normal" variant="outlined" required fullWidth>
                                            <InputLabel> Line 2</InputLabel>
                                            <Input autoFocus  type="text" value={this.state.name} onChange={this.handleChange} placeholder="College Name" name="name" /> 
                                        </FormControl>
                                    </MDBCol>
                                </MDBRow>

                                <MDBRow>
                                <MDBCol>
                                    <FormControl margin="normal" variant="outlined" required fullWidth>
                                        <InputLabel> City</InputLabel>
                                        <Input autoFocus  type="text" value={this.state.name} onChange={this.handleChange} placeholder="College Name" name="name" /> 
                                    </FormControl>
                                </MDBCol>
                                <MDBCol>
                                    <FormControl margin="normal" variant="outlined" required fullWidth>
                                        <InputLabel> State</InputLabel>
                                        <Input autoFocus  type="text" value={this.state.name} onChange={this.handleChange} placeholder="College Name" name="name" /> 
                                    </FormControl>
                                </MDBCol>
                            </MDBRow>

                            <MDBRow>
                            <MDBCol>
                                <FormControl margin="normal" variant="outlined" required fullWidth>
                                    <InputLabel> Country</InputLabel>
                                    <Input autoFocus  type="text" value={this.state.name} onChange={this.handleChange} placeholder="College Name" name="name" /> 
                                </FormControl>
                            </MDBCol>
                            <MDBCol>
                                <FormControl margin="normal" variant="outlined" required fullWidth>
                                    <InputLabel> Pincode</InputLabel>
                                    <Input autoFocus  type="text" value={this.state.name} onChange={this.handleChange} placeholder="College Name" name="name" /> 
                                </FormControl>
                            </MDBCol>
                        </MDBRow>
                        <Button variant="contained"  color="primary">Submit</Button>
                        </form>
                    </MDBCardBody>
                </MDBCard>
            </div>
        )
    }
}
export default CollegeForm