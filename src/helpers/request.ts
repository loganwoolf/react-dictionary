interface Phonetic {
	text: string;
	audio?: string;
	sourceUrl?: string;
	license?: {
		name: string;
		url: string;
	};
}

interface Meaning {
	partOfSpeech: string;
	definitions: {
		definition: string;
		synonyms: string[];
		antonyms: string[];
		example?: string;
	}[];
	synonyms: string[];
	antonyms: string[];
}

export interface Definition {
	word: string;
	phonetic: string;
	phonetics: Phonetic[];
	meanings: Meaning[];
	license?: {
		name: string;
		url: string;
	};
	sourceUrls?: string[];
}

export default async function request(term): Promise<Definition[] | Error> {
	if (!term) return;

	const res = await fetch(
		`https://api.dictionaryapi.dev/api/v2/entries/en/${term}`,
	);

	return res.ok ? await res.json() : null;
}
