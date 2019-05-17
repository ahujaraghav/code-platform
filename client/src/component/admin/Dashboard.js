import React from 'react'
import {Drawer,Divider, List, CssBaseline,IconButton, Typography  } from '@material-ui/core'
import{ Menu as MenuIcon,ChevronLeft as ChevronLeftIcon} from '@material-ui/icons';
import Sidebar from './Sidebar'
const Admin =(props) =>{
    return (
        <div className="root" >
                    <CssBaseline />
                    <Drawer
                    variant="permanent"
                    open>
                    <Typography>
                        Admin Name
                    </Typography>
                    <Divider />
                    <List><Sidebar /></List>
                    </Drawer>
        </div>
    )
}
export default Admin