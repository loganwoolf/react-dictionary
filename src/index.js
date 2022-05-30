import { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import Footer from './components/footer'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <StrictMode>
    <App />
    <Footer />
  </StrictMode>,
  rootElement
)
