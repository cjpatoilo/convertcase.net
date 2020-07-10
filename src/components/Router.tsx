import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components/macro'

type PropType = {
}

const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #222;
    --color-second: #222;

    --font-family: Heveltica;
    --font-code: monospace;

    --spacing: 2.0rem;
  }

  *,
  *:after,
  *:before {
    box-sizing: content-box;
    border: 0;
    margin: 0;
    padding: 0;
  }

  body {
  }
`

export default (props: PropType) => (
  <BrowserRouter>
    <GlobalStyle />
    <Switch>
      <Route component={() => <>My App</>} exact path="/" />
      <Route component={() => <>Not Found</>} />
    </Switch>
  </BrowserRouter>
)
