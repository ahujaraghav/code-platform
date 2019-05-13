import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Courses from './component/courses/Library'
import Course from './component/courses/Show'

import Header from './component/common/Header'

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
    return (
      <BrowserRouter>
        <div>
          <div className="mb-3" style={{margin:"5rem"}}>
            <Header />
          </div>

          <Switch>
            <Route path="/courses" component={Courses} exact={true} />
            <Route path="/course/:id" component={Course} exact={true} />
          </Switch>

        </div>
      </BrowserRouter>
    )
  }
}

export default App;
