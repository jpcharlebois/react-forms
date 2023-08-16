import { useState } from 'react'

import './App.css'
import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenitcate'

function App() {

  return (
    <>
      <SignUpForm />
      <Authenticate />
    </>
  )
}

export default App
