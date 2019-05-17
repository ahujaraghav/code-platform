import React from 'react'
import { Card,Button ,CardContent,FormControl,Input,InputLabel, Typography, Avatar } from '@material-ui/core'
import { AccountBalance, LocationOn } from  '@material-ui/icons'
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
    handleSubmit =(e)=>{
        e.preventDefault()
        console.log(this.state.name)
        console.log(this.state.address)
        console.log(this.state.admin)
    }
    render(){
        return (
            <div>
                <Card style={{margin:'5rem'}}>
                    <CardContent>
                        <form  onSubmit={this.handleSubmit}>
                                <Typography variant="h4" component="h2">Add a College</Typography>

                                <FormControl margin="normal" variant="outlined" required fullWidth>
                                    <InputLabel> <AccountBalance /> College Name</InputLabel>
                                    <Input autoFocus  type="text" value={this.state.name} onChange={this.handleChange} placeholder="College Name" name="name" /> 
                                </FormControl>

                                <FormControl margin="normal" variant="outlined" required fullWidth>
                                    <InputLabel> <LocationOn/>Address</InputLabel>
                                    <Input autoFocus  type="text" value={this.state.name} onChange={this.handleChange} placeholder="College Name" name="name" /> 
                                </FormControl>
                        </form>
                    </CardContent>
                </Card>
            </div>
        )
    }
}
export default CollegeForm