import { useState } from 'react'

import './App.css'
import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenitcate'

function App() {
  const [token, setToken] = useState(null);
  return (
    <>
      <SignUpForm setToken={setToken}/>
      <Authenticate token={token}/>
    </>
  )
}

export default App
