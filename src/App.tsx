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
		if (!(event.target instanceof HTMLInputElement)) return;

		setTerm(event.target.value);
		if (!event.target.value) handleClear();
	}

	function handleClear() {
		setTerm("");
		setDefinition(null);
	}

	return (
		<div className="App flex-column">
			<Header />

			<Form term={term} onInput={handleInput} onClick={handleClear} />
			<Output definition={definition} isPending={isPending} term={term} />

			{definition && <Footer />}
		</div>
	);
}

render(<App />, document.getElementById("app"));
