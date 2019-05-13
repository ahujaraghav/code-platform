import React from 'react'
import { MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBBtn } from 'mdbreact'
import Register from '../authentication/Register'

/* Login Modal, receives 2 props, isOpen and toggle, 
** isOpen is a boolean which will determine to show/hide the modal
** toggle is a function to toggle isOpen */
class LoginModal extends React.Component {
    render() {
        return (
            !this.props.isOpen ?  (<></>):
            <MDBModal
                className='modal-lg'
                isOpen={this.props.isOpen}
                toggle={this.props.toggle}
            >
                <MDBModalHeader
                    toggle={this.props.toggle}
                >
                    Sign In With
            </MDBModalHeader>
                <MDBModalBody>
                    <Register />
                    <hr />
                    <div className='text-center'>
                        <div className='btn-group'>
                            {/* <Google /> */}
                        </div>
                    </div>
                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn
                        color="secondary"
                        onClick={this.props.toggle}
                    >
                        Cancel
                </MDBBtn>
                </MDBModalFooter>
            </MDBModal>
        )
    }
}

export default LoginModal