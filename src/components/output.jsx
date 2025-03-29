import Footer from './footer';

export default function Output(props) {
  const { error, term, definition } = props;

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
              {definition.meanings.map(({ partOfSpeech, definitions }) => (
                <dd>
                  {partOfSpeech}:
                  <ol>
                    {definitions.map(({ definition }) => (
                      <li>{definition}</li>
                    ))}
                  </ol>
                </dd>
              ))}
            </dl>
          </main>

          <Footer />
        </>
      )}
    </>
  );
}
