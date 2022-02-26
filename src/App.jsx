import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './styles.css'

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
      <h1>World's Fastest React Dictionary</h1>
      <h2>Definitions before you can even think!</h2>
      <input
        placeholder="Get a definition"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button
        onClick={() => {
          setTerm('')
          setDefinition('')
        }}
      >
        Clear
      </button>

      {error && <h3>Word not found</h3>}
      {term && definition && (
        <>
          <h3>
            {definition.word}: <span>{definition.phonetic}</span>{' '}
          </h3>
          <p>
            {definition.meanings[0].partOfSpeech}:{' '}
            {definition.meanings[0].definitions[0].definition}
          </p>
          <footer>
            Coded by <a href="http://github.com/loganwoolf">Logan Woolf</a>
          </footer>
        </>
      )}
    </div>
  )
}
