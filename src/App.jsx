import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './styles.css'
import Header from './components/header'
import Form from './components/form'
import Output from './components/output'

export default function App() {
  const [term, setTerm] = useState('')
  const [definition, setDefinition] = useState(null)
  const [error, setError] = useState(null)

  function request() {
    if (!term) {
      return
    }
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${term}`
    axios
      .get(url)
      .then((res) => {
        console.log(res.data[0])
        setDefinition(res.data[0])
        setError(null)
      })
      .catch((err) => {
        console.log('api error')
        setDefinition(null)
        setError(err.message)
      })
  }
  useEffect(request, [term])

  return (
    <div className="App">
      <Header />
      <Form term={term} setTerm={setTerm} setDefinition={setDefinition} />
      <Output error={error} term={term} definition={definition} />
    </div>
  )
}
