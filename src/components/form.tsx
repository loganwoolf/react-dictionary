import { useCallback, useEffect, useRef } from "preact/hooks";
import type { Definition } from "../helpers/request";

interface Props {
	term: string;
	setTerm: (term: string) => void;
	setDefinition: (definition: Definition | null) => void;
}

export default function Form({ term, setTerm, setDefinition }: Props) {
	const inputRef = useRef<HTMLInputElement>();
	const focusInput = useCallback(() => {
		if (inputRef.current) inputRef.current.focus();
	}, []);

	useEffect(() => focusInput(), [focusInput]);

	return (
		<form className="form flex-column" onSubmit={(e) => e.preventDefault()}>
			<input
				ref={inputRef}
				placeholder="Get a definition"
				autocomplete="off"
				name="define"
				value={term}
				onInput={(e) => {
					if (e.target instanceof HTMLInputElement) setTerm(e.target.value);
				}}
			/>
			<button
				type="button"
				onClick={() => {
					setTerm("");
					setDefinition(null);
					focusInput();
				}}
			>
				Clear
			</button>
		</form>
	);
}
