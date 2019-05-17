import React from 'react';
import { ListItem,ListItemIcon ,ListItemText } from '@material-ui/core'
import {AccountBalance, ShoppingCart as ShoppingCartIcon ,People as PeopleIcon } from '@material-ui/icons'
import { NavLink } from 'react-router-dom';
const TopNavigation = () => {
    return (
        <div style={{marginTop:'3rem'}}>
                <NavLink exact={true} to="/admin/colleges" activeClassName="selected" className="sidenavLink">
                    <ListItem button>
                        <ListItemIcon>
                            <AccountBalance />
                        </ListItemIcon>
                        <ListItemText primary="Colleges" />
                    </ListItem>
                </NavLink>
                
                <NavLink to="/admin/contributers" activeClassName="selected" className="sidenavLink">
                    <ListItem button>
                        <ListItemIcon>
                            <ShoppingCartIcon />
                        </ListItemIcon>
                        <ListItemText primary="Contributers" />
                    </ListItem>
                </NavLink>
                
                <NavLink to="/admin/students" activeClassName="selected" className="sidenavLink">
                    <ListItem button>
                        <ListItemIcon>
                            <PeopleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Students" />
                    </ListItem>
                </NavLink>
        </div>
    );
}

export default TopNavigation;