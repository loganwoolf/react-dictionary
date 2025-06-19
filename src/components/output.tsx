export default function Output({ term, definition }) {
	return (
		<>
			{definition ? (
				<main className="main">
					<dl className="flex-column">
						<dt>
							{definition.word}: <span>{definition.phonetic}</span>{" "}
						</dt>
						{definition.meanings.map(({ partOfSpeech, definitions }) => (
							<dd key={partOfSpeech}>
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
				<p className="not-found">Word "{term}" not found</p>
			)}
		</>
	);
}
