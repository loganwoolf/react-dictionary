import { render } from "preact";
import { useEffect, useState } from "preact/hooks";
import Footer from "./components/footer";
import Form from "./components/form";
import Header from "./components/header";
import Output from "./components/output";
import type { Definition } from "./helpers/request";
import request from "./helpers/request";
import { useSearchTerm, useTransition } from "./hooks";
import "./styles.css";

export function App() {
	const [isPending, startTransition] = useTransition();

	const [term, setTerm] = useSearchTerm();
	const [definition, setDefinition] = useState<Definition | null>(null);

	useEffect(() => {
		if (!term) return;

		startTransition(async () => {
			try {
				const [definition] = await request(term);
				setDefinition(definition);
			} catch (error) {
				setDefinition(null);
			}
		});
	}, [term, startTransition]);

	function handleInput(event: InputEvent) {

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
