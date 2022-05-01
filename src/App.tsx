import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import './App.scss'
type Props = {}

const App = (props: Props) => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>   /Dashboard contains all the components to be rendered*/
      </Routes>
    </Router>
  )
}

export default App