import { render } from "preact";
import { useEffect, useState } from "preact/hooks";
import Footer from "./components/footer";
import Form from "./components/form";
import Header from "./components/header";
import Output from "./components/output";
import request, { type Definition } from "./helpers/request";
import "./styles.css";

export function App() {
	const [term, setTerm] = useState<string>("");
	const [definition, setDefinition] = useState<Definition | null>(null);

	useEffect(() => {
		(async function getDefinition() {
			const result = await request(term);
			setDefinition(result ? result[0] : null);
		})();
	}, [term]);

	return (
		<div className="App flex-column">
			<Header />
			<Form term={term} setTerm={setTerm} setDefinition={setDefinition} />
			{term && <Output term={term} definition={definition} />}
			{term && definition && <Footer />}
		</div>
	);
}

render(<App />, document.getElementById("app"));
