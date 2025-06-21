import type { Definition } from "../helpers/request";

interface OutputProps {
	definition: Definition | null;
	isPending: boolean;
	term: string;
}

export default function Output({ isPending, term, definition }: OutputProps) {
	if (!term) return null;

	return (
		<>
			{definition ? (
				<main className="main">
					<dl className="flex-column">
						<dt>
							{definition.word}: <span>{definition.phonetic}</span>{" "}
						</dt>
						{definition.meanings.map(({ partOfSpeech, definitions }, index) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: definitions can't change
							<dd key={index}>
								{partOfSpeech}:
								<ol>
									{definitions.map(({ definition }) => (
										<li key={definition}>{definition}</li>
									))}
								</ol>
							</dd>
						))}
					</dl>
				</main>
			) : (
				!isPending && <p className="not-found">Word "{term}" not found</p>
			)}
		</>
	);
}
