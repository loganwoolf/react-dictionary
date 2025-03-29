import { render } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import Footer from './components/footer';
import Form from './components/form';
import Header from './components/header';
import Output from './components/output';
import request from './helpers/request';
import './styles.css';

export function App() {
  const [term, setTerm] = useState('')
  const [definition, setDefinition] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    request(setDefinition, setError, term);
  }, [term])

  return (
	<div className="App flex-column">
	  <Header />
	  <Form term={term} setTerm={setTerm} setDefinition={setDefinition} />
	  <Output error={error} term={term} definition={definition} />
    {term && definition && <Footer />}
	</div>
  )
}

render(<App />, document.getElementById('app'));
