import React from 'react'
import { MDBJumbotron, MDBCollapse, MDBCardText, MDBCardBody, MDBCardTitle, MDBRow, MDBCol, MDBMedia, MDBBtn, MDBProgress } from "mdbreact"
const CourseShow = (props) =>{
    return(
        <div className="container-fluid">
            <MDBJumbotron style={{background:"var(--blueCard)", color: "white"}}>
                <MDBCardBody>
                <MDBCardTitle className="h1 text-center">
                    Basic javascript
                </MDBCardTitle>
                <div className="container">
                <MDBCardText>
                <MDBRow small>
                    <MDBCol className="my-4">
                        <h6>About this Course</h6>
                        <p>
                            SQL can be used to generate reports and present information on websites.
                            This course covers powerful SQL features in helping you answer more interesting questions about your data.
                        </p>
                    </MDBCol>
                    <MDBCol className="my-4">
                        <h6>What you'll learn</h6>
                        <ul>
                            <li>Ordering, limiting and paging through a result set</li>
                            <li>Manipulating text</li>
                            <li>Working with numbers</li>
                            <li>Working with dates</li>
                        </ul>
                    </MDBCol>
                </MDBRow>
                </MDBCardText>
                </div>
                </MDBCardBody>
            </MDBJumbotron>
            <div className="container">
            
            <MDBMedia className="m-3">
                <MDBMedia left>
                    <i className="far fa-check-circle fa-3x mx-3"></i>
                </MDBMedia>
                <MDBMedia body>
                <MDBMedia heading>Introduction to Javascript</MDBMedia>
                Databases can store a lot of data. 
                Retrieving all of that in one go isn't performant or helpful to users.
                <div className="d-flex flex-row flex-fill">
                    <MDBBtn className="mr-2"><h6> 20 steps <i className="fas fa-angle-double-down"></i></h6></MDBBtn>
                    <div style={{width:'10rem'}} className="my-auto">
                        <MDBProgress value={100} color="greenHighlight">100</MDBProgress>
                    </div>
                </div>
                </MDBMedia>
            </MDBMedia>

          <MDBMedia className="m-3">
            <MDBMedia left>
                <i class="far fa-circle fa-3x mx-3"></i>
            </MDBMedia>
            <MDBMedia body>
              <MDBMedia heading>ES6</MDBMedia>
              Being able to manipulate text is vital for displaying information in a more human readable or standardized way. 
              In this stage we'll take a look at some key ways we can format and manipulate text.
                <div className="d-flex flex-row flex-fill">
                    <MDBBtn className="mr-2"><h6> 12 steps <i className="fas fa-angle-double-down"></i></h6></MDBBtn>
                    <div style={{width:'10rem'}} className="my-auto">
                        <MDBProgress color='greenHighlight' value={50} >50</MDBProgress>
                    </div>
                </div>
                
              <MDBMedia  className="m-3">
                <MDBMedia left>
                    <i className="far fa-check-circle fa-1x m-2"></i>
                </MDBMedia>
                <MDBMedia body>
                    <MDBMedia heading>What are functions?</MDBMedia>
                    <footer className="text-muted">
                        3 mins
                    </footer>
                </MDBMedia>
              </MDBMedia>

              <MDBMedia  className="m-3">
                <MDBMedia left>
                    <i className="fas fa-code fa-1x m-2"></i>
                </MDBMedia>
                <MDBMedia body>
                    <MDBMedia heading>Concatenating Text</MDBMedia>
                    <footer className="text-muted">
                        4 objectives
                    </footer>
                </MDBMedia>
              </MDBMedia>

              <MDBMedia  className="m-3">
                <MDBMedia left>
                    <i className="fas fa-align-justify fa-1x m-2"></i>
                </MDBMedia>
                <MDBMedia body>
                    <MDBMedia heading>Working with Text</MDBMedia>
                    <footer className="text-muted">
                        3 mins
                    </footer>
                </MDBMedia>
              </MDBMedia>

              <MDBMedia  className="m-3">
                <MDBMedia left>
                    <i className="fas fa-video fa-1x m-2"></i>
                </MDBMedia>
                <MDBMedia body>
                    <MDBMedia heading>Channging the code</MDBMedia>
                    <footer className="text-muted">
                        3:50
                    </footer>
                </MDBMedia>
              </MDBMedia>

              <MDBMedia  className="m-3">
                <MDBMedia left>
                    <i className="far fa-file-alt fa-1x m-2"></i>
                </MDBMedia>
                <MDBMedia body>
                    <MDBMedia heading>Reading Material</MDBMedia>
                </MDBMedia>
              </MDBMedia>

            </MDBMedia>
          </MDBMedia>
          </div>
        </div>
    )
}
export default CourseShow