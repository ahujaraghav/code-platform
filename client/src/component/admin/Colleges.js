import React from 'react'
import { Card, Button, CardContent, Typography, CardActions } from '@material-ui/core'
import { MDBIcon, MDBCard, MDBCardBody, MDBCardText, MDBCardHeader } from "mdbreact"
import { } from '@material-ui/icons'
import { NavLink } from 'react-router-dom'
const AdminColleges = (props) => {
    return (
        <div className="container">
            <NavLink to="/admin/college/add"><Button variant="contained" color="primary" className="m-2 align-item-center">All College</Button></NavLink>
            <NavLink to="/admin/college/add"><Button variant="contained" color="primary" className="m-2 align-item-center">Add College</Button></NavLink>

            <MDBCard className="m-2">
                <MDBCardBody>
                    <Typography gutterBottom variant="h3">
                        Name Of the College
                    </Typography>

                    <MDBCardText>
                        <Typography variant="h6">
                            Address
                                </Typography>
                    </MDBCardText>
                </MDBCardBody>
                <footer className="mx-4" small muted>
                    <div className="d-flex align-items-left justify-content-between">
                        <MDBCardText>
                            <Typography variant="h6">
                                <MDBIcon icon="user-shield" /> Admin Name
                                    </Typography>
                        </MDBCardText>
                        <MDBCardText>
                            <Typography variant="h6">
                                <MDBIcon icon="user-graduate" className="mx-2" /> Number of students
                                    </Typography>
                        </MDBCardText>
                        <MDBIcon icon="edit" size='2x' />
                    </div>
                </footer>
            </MDBCard>

            <MDBCard className="m-2">
                <MDBCardBody>
                    <Typography gutterBottom variant="h3">
                        Name Of the College
                    </Typography>

                    <MDBCardText>
                        <Typography variant="h6">
                            Address
                                </Typography>
                    </MDBCardText>
                </MDBCardBody>
                <footer className="mx-4" small muted>
                    <div className="d-flex align-items-left justify-content-between">
                        <MDBCardText>
                            <Typography variant="h6">
                                <MDBIcon icon="user-shield" /> Admin Name
                                    </Typography>
                        </MDBCardText>
                        <MDBCardText>
                            <Typography variant="h6">
                                <MDBIcon icon="user-graduate" className="mx-2" /> Number of students
                                    </Typography>
                        </MDBCardText>
                        <MDBIcon icon="edit" size='2x' />
                    </div>
                </footer>
            </MDBCard>

            <MDBCard className="m-2">
                <MDBCardBody>
                    <Typography gutterBottom variant="h3">
                        Name Of the College
                    </Typography>

                    <MDBCardText>
                        <Typography variant="h6">
                            Address
                                </Typography>
                    </MDBCardText>
                </MDBCardBody>
                <footer className="mx-4" small muted>
                    <div className="d-flex align-items-left justify-content-between">
                        <MDBCardText>
                            <Typography variant="h6">
                                <MDBIcon icon="user-shield" /> Admin Name
                                    </Typography>
                        </MDBCardText>
                        <MDBCardText>
                            <Typography variant="h6">
                                <MDBIcon icon="user-graduate" className="mx-2" /> Number of students
                                    </Typography>
                        </MDBCardText>
                        <MDBIcon icon="edit" size='2x' />
                    </div>
                </footer>
            </MDBCard>
        </div>
    )
}
export default AdminColleges