import React, { useState, useEffect } from 'react'
import request from './helpers/request'

import './styles.css'
import Header from './components/header'
import Form from './components/form'
import Output from './components/output'

export default function App() {
  const [term, setTerm] = useState('')
  const [definition, setDefinition] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => request(setDefinition, setError, term), [term])

  return (
    <div className="App">
      <Header />
      <Form term={term} setTerm={setTerm} setDefinition={setDefinition} />
      <Output error={error} term={term} definition={definition} />
    </div>
  )
}
