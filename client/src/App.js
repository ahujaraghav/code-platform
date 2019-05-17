import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Courses from './component/courses/Library'
import Course from './component/courses/Show'
import Header from './component/common/Header'
import AdminDashboard from './component/admin/Dashboard'
import AdminColleges from './component/admin/Colleges';
import CollegeNew from './component/admin/CollegeNew';
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isAuthenticated: !!localStorage.getItem('token'),
    }
  }
  handleIsAuthenticated = (bool) => {
    this.setState(() => ({
      isAuthenticated: bool
    }))
  }
  render() {
    console.log(this.props)
    return (
      <BrowserRouter>
        <div>
          <div className="mb-3" style={{margin:"5rem"}}>
            <Header />
            
          </div>

          <Switch>
            <Route path="/admin/colleges" component={AdminColleges} exact />
            <Route path="/admin/college/add" component={CollegeNew} exact />
            <Route path="/admin" component={AdminDashboard} exact />
            <Route path="/courses" component={Courses} exact />
            <Route path="/course/:id" component={Course} exact />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
