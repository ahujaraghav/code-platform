import React, { Component } from "react";
import './sidebar.css'
import { NavLink } from 'react-router-dom'
import { MDBNavItem, MDBNavbar} from 'mdbreact'


const AdminDashboard = (props) =>{
    return (
        <div>
            <MDBNavbar>
                <div className="sidenav mt-5">
                    <MDBNavItem>
                        <NavLink to="/admin/colleges" activeClassName="selected" className="navlink" > Colleges </NavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <NavLink to="/admin/contributers" activeClassName="selected" className="navlink" > Contributer </NavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <NavLink to="/admin/students" activeClassName="selected" className="navlink" > Student </NavLink>
                    </MDBNavItem>
                </div>
            </MDBNavbar>
        </div>
    )
}
export default AdminDashboard