export default function Form(props) {
  const { term, setTerm, setDefinition } = props

  return (
    <>
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
    </>
  )
}
