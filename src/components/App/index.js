import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import ErrorBoundary from 'components/ErrorBoundary'
import Layout from 'components/Layout'

import SvgSprites from 'components/SvgSprites'

import Home from 'components/Home'
import Page from 'components/Page'

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/:slug">
              <Page />
            </Route>
          </Switch>
        </Layout>
      </Router>
      <SvgSprites />
    </ErrorBoundary>
  )
}

export default App
