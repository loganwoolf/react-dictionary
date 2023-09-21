import { useEffect, useRef } from 'react'

export default function Form(props) {
  const { term, setTerm, setDefinition } = props

  const inputElement = useRef()
  const focusInput = () => inputElement.current.focus()

  useEffect(() => focusInput(), [])

  return (
    <>
      <input
        ref={inputElement}
        placeholder="Get a definition"
        name="define"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button
        type="button"
        onClick={() => {
          setTerm('')
          setDefinition('')
          focusInput()
        }}
      >
        Clear
      </button>
    </>
  )
}
