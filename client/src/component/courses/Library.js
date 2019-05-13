import React from 'react'
import { MDBIcon, MDBCard, MDBCardFooter, MDBCardBody, MDBCardText, MDBCardHeader, MDBBtn, MDBRow } from "mdbreact"
const Library = (props) => {
    const cardStyle = {
        width: "22rem",
        margin: "1rem"
    }
    return (
        <div className="container-fluid">
            <div className="input-group m-form form-sm form-1 px-5 mt-5 mb-2">
                <div className="input-group-prepend">
                    <span className="input-group-text cyan lighten-2" id="basic-text1">
                        <MDBIcon icon="search" className="text-grey" />
                    </span>
                </div>
                <input className="form-control" type="text" placeholder="Search" />
            </div>
            <div style={{'max-width':'1300px', margin:'auto'}}>
                <MDBRow center>
                    <MDBCard style={cardStyle}>
                        <MDBCardHeader
                            style={{ background: "var(--brownCard)", color: "white", padding: '15px' }}
                            tag="h6">
                            Basic javascript
                         </MDBCardHeader>
                        <MDBCardBody>
                            <MDBCardText>
                                Refactor an existing authentication project by using cookies and JSON Web Token to increase security. Cookies are a way for a browser to store information while tokens are a stand-in ...
                        </MDBCardText>
                        </MDBCardBody>
                        <footer className="m-4" small muted>
                            <div className="d-flex align-items-center justify-content-between">
                                <MDBCardText small muted>3 hours</MDBCardText>
                                <MDBBtn
                                    style={{background: "var(--brownCard)", border:"0px", color: "white"}}
                                    onClick={() => {
                                        props.history.push('/course/1')
                                    }}>Start</MDBBtn>
                            </div>
                        </footer>
                    </MDBCard>

                    <MDBCard className="bg-blueCard" style={cardStyle}>
                        <MDBCardHeader
                            style={{ background: "var(--blueCard)", color: "white", padding: '15px' }}
                            tag="h6">
                            ES6
                    </MDBCardHeader>
                        <MDBCardBody>
                            <MDBCardText style={{ "color": "#687173" }}>
                                ECMAScript 6 is also known as ES6 and ECMAScript 2015. Some people call it JavaScript 6. This chapter will introduce some of the new features in ES6.
                        </MDBCardText>
                        </MDBCardBody>
                        <footer className="m-4">
                        <div className="d-flex align-items-center justify-content-between">
                                <MDBCardText
                                    small>100 min left</MDBCardText>
                                <MDBBtn 
                                 style={{background: "var(--blueCard)", border:"0px", color: "white"}}
                                color="dark">
                                Resume
                                </MDBBtn>
                            </div>
                        </footer>
                    </MDBCard>

                    <MDBCard style={cardStyle}>
                        <MDBCardHeader
                            style={{ background: "var(--pinkCard)", color: "white", padding: '15px' }}
                            tag="h6">
                            Advance React and Redux
                    </MDBCardHeader>
                        <MDBCardBody>
                            <MDBCardText>
                                Refactor an existing authentication project by using cookies and JSON Web Token to increase security.
                        </MDBCardText>
                        </MDBCardBody>
                        <footer className="m-4">
                        <div className="d-flex align-items-center justify-content-between">
                                <MDBCardText small muted>Completed</MDBCardText>
                                    <i className="far fa-check-circle fa-2x"  style={{background: "var(--white)", color: "var(--pinkCard)"}}></i>
                            </div>
                        </footer>
                    </MDBCard>

                    <MDBCard style={cardStyle}>
                        <MDBCardHeader
                            style={{ background: "var(--orangeCard)", color: "white", padding: '15px' }}
                            tag="h6">
                            Node js
                    </MDBCardHeader>
                        <MDBCardBody>
                            <MDBCardText>
                                Refactor an existing authentication project by using cookies and JSON Web Token to increase security. Cookies are a way for a browser to store information while tokens are a stand-in ...
                        </MDBCardText>
                        </MDBCardBody>
                        <footer className="m-4">
                        <div className="d-flex align-items-center justify-content-between">
                                <MDBCardText  small muted>3 hours</MDBCardText>
                                <MDBBtn 
                                 style={{background: "var(--orangeCard)", border:"0px", color: "white"}}
                                color="dark">
                                Start</MDBBtn>
                            </div>
                        </footer>
                    </MDBCard>
                    <MDBCard style={cardStyle}>
                        <MDBCardHeader
                            style={{ background: "var(--purpleCard)", color: "white", padding: '15px' }}
                            color="primary-color" tag="h6">
                            Mongo DB
                    </MDBCardHeader>
                        <MDBCardBody>
                            <MDBCardText>
                                Refactor an existing authentication project by using cookies and JSON Web Token to increase security. Cookies are a way for a browser to store information while tokens are a stand-in ...
                        </MDBCardText>
                        </MDBCardBody>
                        <footer className="m-4">
                        <div className="d-flex align-items-center justify-content-between">
                                <MDBCardText small muted>3 hours</MDBCardText>
                                <MDBBtn 
                                 style={{background: "var(--purpleCard)", border:"0px", color: "white"}}
                                 color="dark">Start</MDBBtn>
                            </div>
                        </footer>
                    </MDBCard>
                    <MDBCard style={cardStyle}>
                        <MDBCardHeader
                            style={{ background: "var(--redCard)", color: "white", padding: '15px' }}
                            color="primary-color" tag="h6">
                            Three js
                    </MDBCardHeader>
                        <MDBCardBody>
                            <MDBCardText>
                                Refactor an existing authentication project by using cookies and JSON Web Token to increase security. Cookies are a way for a browser to store information while tokens are a stand-in ...
                        </MDBCardText>
                        </MDBCardBody>
                        <footer className="m-4">
                        <div className="d-flex align-items-center justify-content-between">
                                <MDBCardText small muted>3 hours</MDBCardText>
                                <MDBBtn 
                                 style={{background: "var(--redCard)", border:"0px", color: "white"}}
                                color="dark">Start</MDBBtn>
                            </div>
                        </footer>
                    </MDBCard>
                </MDBRow>
            </div>
        </div>
    )
}
export default Library