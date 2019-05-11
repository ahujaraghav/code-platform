import React from 'react'
import { BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap'
import Register from './component/authentication/Register'
import GoogleAuthentication from './component/authentication/GoogleAuthentication'
import Google from './component/authentication/Google'
import Github from './component/authentication/Github'
import Facebook from './component/authentication/Facebook'
// import 'mdbreact/dist/css/mdb.css';
// import  { MDBIcon }  from "mdbreact"
class App extends React.Component {
  constructor(){
    super()
    this.state={
      collapsed:true,
      isAuthenticated:!!localStorage.getItem('token'),
      modal: false
    }
  }
  toggleNavbar =() =>{
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }
  handleIsAuthenticated=(bool)=>{
    this.setState(()=>({
      isAuthenticated:bool
    }))
  }
  render() {
    return (
      <BrowserRouter>
          <div>
            <Navbar className="navbar navbar-expand-sm ml-auto"  color="faded" light >
            <NavItem className="nav"><Link to="/" className="nav-link" > CODE Platform </Link></NavItem>
              <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                      <Nav  navbar className="navbar-nav mr-auto" >
                          <NavItem>
                            <Link to="/courses" className="navlink mr-3" > Courses </Link>
                          </NavItem>
                          <NavItem>
                            <Link to="/tracks" className="navlink mr-3" > Tracks </Link>
                          </NavItem>
                          <NavItem>
                            <Link to="/forum" className="navlink mr-3" > Forum </Link>
                          </NavItem>
                      </Nav>
                      <Nav navbar className="rightNav mr-1">
                        <NavItem>
                          <Button className='btn btn-primary' onClick={this.toggle}>Sign In</Button>
                        </NavItem>
                      </Nav>
                    </Collapse>
            </Navbar>
            <Switch>
            <Route path="/register" component={Register} exact={true} />
            <Route path="/google/signin" component={GoogleAuthentication} exact={true} />
            </Switch>
            <Modal className='modal-lg' isOpen={this.state.modal} toggle={this.toggle}>
              <ModalHeader toggle={this.toggle}>Sign In With</ModalHeader>
              <ModalBody>
                <Register />
                <hr/>
                <div className='text-center'>
                  <div className='btn-group'>
                    <Google />
                    <Facebook />
                    <Github />
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </div>
        </BrowserRouter>
    )
  }
}

export default App;
