import axios from 'axios'

export default function request(setDefinition, setError, term) {
  if (!term) {
    return
  }
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${term}`
  axios
    .get(url)
    .then((res) => {
      console.log(res.data[0])
      setDefinition(res.data[0])
      setError(null)
    })
    .catch((err) => {
      console.log('api error')
      setDefinition(null)
      setError(err.message)
    })
}
