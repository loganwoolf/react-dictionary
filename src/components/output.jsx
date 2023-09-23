import Footer from './footer'

export default function Output(props) {
  const { error, term, definition } = props

  return (
    <>
      {error && <p className="not-found">Word not found</p>}
      {term && definition && (
        <>
          <main className="main">
            <dl className="flex-column">
              <dt>
                {definition.word}: <span>{definition.phonetic}</span>{' '}
              </dt>
              <dd>
                {definition.meanings[0].partOfSpeech}:{' '}
                {definition.meanings[0].definitions[0].definition}
              </dd>
            </dl>
          </main>

          <Footer />
        </>
      )}
    </>
  )
}
