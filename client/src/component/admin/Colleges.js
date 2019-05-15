import React from 'react'
import { MDBBtn,MDBCard, MDBCardTitle, MDBCardText, MDBContainer, MDBRow} from 'mdbreact'
import { NavLink } from 'react-router-dom'
const AdminColleges = (props) =>{
    return (
        <div className="container text-center">
            <NavLink to="/admin/college/add"><MDBBtn className='btn-primary btn-block'>Add College</MDBBtn></NavLink>
            <MDBContainer>
                <MDBRow center className="m-2">
                    <MDBCard className="card-body">
                        <MDBCardTitle>College Name</MDBCardTitle>
                        <MDBCardText>
                            Address-Contact Info
                        </MDBCardText>
                    </MDBCard>
                </MDBRow>
            </MDBContainer>
        </div>
    )
}
export default AdminColleges