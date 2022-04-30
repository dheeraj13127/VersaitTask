import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import './App.scss'
type Props = {}

const App = (props: Props) => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
      </Routes>
    </Router>
  )
}

export default App