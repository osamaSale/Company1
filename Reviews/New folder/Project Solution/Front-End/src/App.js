import React, { useState } from 'react';
import Login from './components/signIn'
import SignUp from './components/signUp'
import Home from './components/home'
import Article from './components/article'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

const App = props => {
  const [state, setState] = useState({
    isLogin: false,
    userName: ''
  })
  const content = (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" >
          <Redirect to="/home" />
        </Route>
        <Route path="/login" component={Login} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/home" component={Home} />
        <Route path="/article/:id" component={Article} />
      </Switch>
    </BrowserRouter>

  )

  return content;
}

export default App

