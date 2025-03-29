import { useEffect, useRef } from "react";

export default function Form({ term, setTerm, setDefinition }) {
	const inputElement = useRef();
	const focusInput = () => inputElement.current.focus();

	useEffect(() => focusInput(), []);

	return (
		<form className="form flex-column" onSubmit={(e) => e.preventDefault()}>
			<input
				ref={inputElement}
				placeholder="Get a definition"
				autocomplete="off"
				name="define"
				value={term}
				onChange={(e) => setTerm(e.target.value)}
			/>
			<button
				type="button"
				onClick={() => {
					setTerm("");
					setDefinition("");
					focusInput();
				}}
			>
				Clear
			</button>
		</form>
	);
}
