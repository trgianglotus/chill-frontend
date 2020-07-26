import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'

import 'semantic-ui-css/semantic.min.css'
import Routes from './routes'
import client from './apollo'
import * as serviceWorker from './serviceWorker'

const App = (
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
)

ReactDOM.render(App, document.getElementById('root'))
serviceWorker.unregister()
