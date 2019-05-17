import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { MDBCollapse, MDBNavbar, MDBNavbarToggler, MDBNav, MDBNavItem, MDBBtn } from 'mdbreact'
import LoginModal from '../common/Login'
class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isCollapsed: false,
            showLoginModal: false,
            open: true,
            active: 'courses'
        }
    }
    handleDrawerOpen = () => {
        this.setState({ open: true });
      };
    
    handleDrawerClose = () => {
        this.setState({ open: false });
      };

    toggleNavbar = (e) => {
        this.setState((prevState) => ({ isCollapsed: !prevState.isCollapsed }))
    }

    toggleLoginModal = (e) => {
        this.setState((prevState) => ({ showLoginModal: !prevState.showLoginModal }))
    }

    changeActiveLink = (e) => {
        this.setState({})
    }

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <MDBNavbar
                    className="navbar navbar-expand-sm ml-auto"
                    style={{ backgroundColor: '#23282E' }}
                    fixed="top" dark>
                    <MDBNavItem 
                    className="nav logo-seprater">
                    <Link to="/"
                     className="nav-link" 
                     style={{color:"var(--white)"}}> 
                     <span style={{color:"var(--greenHighlight)", "fontWeight":"bold", "fontSize":"1.3rem"}}>D</span>ct Learn.</Link>
                     </MDBNavItem>
                    <MDBNavbarToggler
                        onClick={this.toggleNavbar}
                        className="mr-2" />
                    <MDBCollapse
                        isOpen={this.state.isCollapsed}
                        navbar>
                        <MDBNav navbar className="navbar-nav mr-auto link-dimwhite-bold" >
                            <MDBNavItem>
                                <NavLink to="/courses" activeClassName="selected" className="navlink mr-3" > Courses </NavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <NavLink to="/tracks"  activeClassName="selected" className="navlink mr-3" > Tracks </NavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <NavLink to="/forum"  activeClassName="selected" className="navlink mr-3" > Forum </NavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <NavLink to="/admin" activeClassName="selected" className="navlink mr-3" > Admin </NavLink>
                            </MDBNavItem>
                        </MDBNav>
                        <MDBNav navbar className="rightNav mr-1">
                            <MDBNavItem>
                                <MDBBtn
                                    className='btn-custom-outline'
                                    onClick={this.toggleLoginModal}
                                >
                                    Sign In
                        </MDBBtn>
                            </MDBNavItem>
                        </MDBNav>
                    </MDBCollapse>
                </MDBNavbar>
                <LoginModal
                    isOpen={this.state.showLoginModal}
                    toggle={this.toggleLoginModal} />
            </React.Fragment>
        )
    }
}
  export default withStyles() (Header)