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

export default async function request(term: string) {
	try {
		const response = await fetch(
			`https://api.dictionaryapi.dev/api/v2/entries/en/${term}`,
		);

		if (response.status === 404) {
			throw new Error(`No definition found for ${term}`);
		}

		if (!response.ok) {
			const byron = "wow";
			throw new Error("Something went wrong");
		}

		const definitions: Definition[] = await response.json();

		return definitions;
	} catch (error) {
		console.error(error.message);
		throw error;
	}
}
