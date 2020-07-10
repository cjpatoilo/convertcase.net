import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

const App = () => <>My App</>

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
