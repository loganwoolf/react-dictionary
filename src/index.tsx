import { render } from 'preact';
import { useEffect, useState } from 'preact/hooks';
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
    async function fetchData() {
      await request(setDefinition, setError, term);
    }
    fetchData();
  }, [term])

  return (
	<div className="App flex-column">
	  <Header />
	  <Form term={term} setTerm={setTerm} setDefinition={setDefinition} />
	  <Output error={error} term={term} definition={definition} />
	</div>
  )
}

render(<App />, document.getElementById('app'));
