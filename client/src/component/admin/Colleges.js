import React from 'react'
import { Card,Button ,CardContent, Typography } from '@material-ui/core'
import { } from  '@material-ui/icons'
import { NavLink } from 'react-router-dom'
const AdminColleges = (props) =>{
    return (
        <div className="container text-center"  style={{marginLeft:'160px'}}>
            <NavLink to="/admin/college/add"><Button variant="contained" color="primary">Add College</Button></NavLink>
            <Card style={{marginTop:'5px'}}>
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    College Name
                </Typography>
                <Typography>
                            Address-Contact Info
                </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
export default AdminColleges