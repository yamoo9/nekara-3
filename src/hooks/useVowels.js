import useSWR from 'swr';

const {REACT_APP_API: ENDPOINT} = process.env;
const fetcher = (...args) => fetch(...args).then(response => response.json());

export const useVowels = () => {
  const { error, data, mutate } = useSWR(ENDPOINT, fetcher);
  return {
    error,
    vowels: data,
    setVowels: mutate,
    loading: !data && !error,
  }
}

export const useVowel = (id) => {
  const { error, data, mutate } = useSWR(`${ENDPOINT}/${id}`, fetcher);
  return {
    error,
    vowel: data,
    setVowel: mutate,
    loading: !data && !error,
  }
}