import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import ErrorBoundary from 'components/ErrorBoundary'
import Layout from 'components/Layout'

import SvgSprites from 'components/SvgSprites'

import Home from 'components/Home'
import Page from 'components/Page'
import Error404 from 'components/Error404'

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/:slug">
              <Page />
            </Route>
            <Route path="*">
              <Error404 />
            </Route>
          </Switch>
        </Layout>
      </Router>
      <SvgSprites />
    </ErrorBoundary>
  )
}

export default App
