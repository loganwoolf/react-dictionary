import { useCallback, useEffect, useRef } from "preact/hooks";

interface FormProps {
	term: string;
	onInput: (e: InputEvent) => void;
	onClick: () => void;
}

export default function Form({ term, onInput, onClick }: FormProps) {
	const inputRef = useRef<HTMLInputElement>();

	const focusInput = useCallback(() => {
		if (inputRef.current) inputRef.current.focus();
	}, []);

	// focus input on load
	useEffect(() => focusInput(), [focusInput]);

	return (
		<form className="form flex-column" onSubmit={(e) => e.preventDefault()}>
			<input
				ref={inputRef}
				placeholder="Get a definition"
				autocomplete="off"
				name="define"
				value={term}
				onInput={onInput}
			/>
			<button
				type="button"
				onClick={() => {
					onClick();
					focusInput();
				}}
			>
				Clear
			</button>
		</form>
	);
}
