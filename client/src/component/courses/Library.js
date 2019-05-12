import React from 'react'
import { MDBIcon, MDBCard, MDBCardBody, MDBCardText, MDBCardHeader, MDBBtn, MDBRow} from "mdbreact"
const Library = (props) => {
    return (
        <div className="container">
            <div className="input-group m-form form-sm form-1 pl-0 mt-5 mb-5">
                <div className="input-group-prepend">
                <span className="input-group-text cyan lighten-2" id="basic-text1">
                    <MDBIcon icon="search" className="text-grey" />
                </span>
                </div>
                <input className="form-control my-0 py-1" type="text" placeholder="Search" />
            </div>

            <MDBRow center>
                <MDBCard style={{ width: "22rem", margin: ".25rem" }}>
                    <MDBCardHeader color="primary-color" tag="h4">
                        Basic javascript
                    </MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardText>
                        Refactor an existing authentication project by using cookies and JSON Web Token to increase security. Cookies are a way for a browser to store information while tokens are a stand-in ...
                        </MDBCardText>
                        <footer className="blockquote-footer">
                        <div className="flex-row">
                            <MDBCardText className="float-left" small muted>3 hours</MDBCardText>
                            <MDBBtn className="float-right" color="dark">Start</MDBBtn>
                        </div>
                        </footer>
                    </MDBCardBody>
                </MDBCard>

                <MDBCard style={{ width: "22rem", margin: ".25rem" }}>
                    <MDBCardHeader color="primary-color" tag="h4">
                        ES6
                    </MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardText>
                        ECMAScript 6 is also known as ES6 and ECMAScript 2015. Some people call it JavaScript 6. This chapter will introduce some of the new features in ES6.
                        </MDBCardText>
                        <footer className="blockquote-footer">
                        <div className="flex-row">
                            <MDBCardText className="float-left" small muted>100 min left</MDBCardText>
                            <MDBBtn className="float-right" color="dark">Resume</MDBBtn>
                        </div>
                        </footer>
                    </MDBCardBody>
                </MDBCard>

                <MDBCard style={{ width: "22rem", margin: ".25rem" }}>
                    <MDBCardHeader color="primary-color" tag="h4">
                        Advance React and Redux
                    </MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardText>
                           Refactor an existing authentication project by using cookies and JSON Web Token to increase security. 
                        </MDBCardText>
                        <footer className="blockquote-footer">
                        <div className="flex-row">
                            <MDBCardText className="float-left" small muted>Completed</MDBCardText>
                            <MDBBtn className="float-right"><i class="fas fa-check-circle fa-2x"></i></MDBBtn>
                        </div>
                        </footer>
                    </MDBCardBody>
                </MDBCard>

                <MDBCard style={{ width: "22rem", margin: ".25rem" }}>
                    <MDBCardHeader color="primary-color" tag="h4">
                        Node js
                    </MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardText>
                        Refactor an existing authentication project by using cookies and JSON Web Token to increase security. Cookies are a way for a browser to store information while tokens are a stand-in ...
                        </MDBCardText>
                        <footer className="blockquote-footer">
                        <div className="flex-row">
                            <MDBCardText className="float-left" small muted>3 hours</MDBCardText>
                            <MDBBtn className="float-right" color="dark">Start</MDBBtn>
                        </div>
                        </footer>
                    </MDBCardBody>
                </MDBCard>
                <MDBCard style={{ width: "22rem", margin: ".25rem" }}>
                    <MDBCardHeader color="primary-color" tag="h4">
                        Mongo DB
                    </MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardText>
                        Refactor an existing authentication project by using cookies and JSON Web Token to increase security. Cookies are a way for a browser to store information while tokens are a stand-in ...
                        </MDBCardText>
                        <footer className="blockquote-footer">
                        <div className="flex-row">
                            <MDBCardText className="float-left" small muted>3 hours</MDBCardText>
                            <MDBBtn className="float-right" color="dark">Start</MDBBtn>
                        </div>
                        </footer>
                    </MDBCardBody>
                </MDBCard>
                <MDBCard style={{ width: "22rem", margin: ".25rem" }}>
                    <MDBCardHeader color="primary-color" tag="h4">
                        Three js
                    </MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardText>
                        Refactor an existing authentication project by using cookies and JSON Web Token to increase security. Cookies are a way for a browser to store information while tokens are a stand-in ...
                        </MDBCardText>
                        <footer className="blockquote-footer">
                        <div className="flex-row">
                            <MDBCardText className="float-left" small muted>3 hours</MDBCardText>
                            <MDBBtn className="float-right" color="dark">Start</MDBBtn>
                        </div>
                        </footer>
                    </MDBCardBody>
                </MDBCard>

            </MDBRow>

        </div>
    )
}
export default Library