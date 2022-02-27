import Footer from "./footer"

export default function Output(props) {
  const { error, term, definition } = props

  return (
    <>
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
        <Footer />
      </>
    )}    
    </>
  )
}
