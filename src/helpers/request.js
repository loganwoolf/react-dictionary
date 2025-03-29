export default async function request(setDefinition, setError, term) {
  if (!term) return;

  try {
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${term}`);
    const json = await res.json();
    console.log({ json });

    setDefinition(json[0]);
    setError(null);
  } catch (err) {
    setDefinition(null);
    setError(err.message);
  }
}
