import useSWR from 'swr';

const endpoints = process.env.REACT_APP_API;
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const useVowels = () => {
  const { data, error } = useSWR(endpoints, fetcher);
  return {
    vowels: data,
    isLoading: !data && !error,
    isError: error,
  };
};

export const useVowel = (id) => {
  const { data, error } = useSWR(`${endpoints}/${id}`, fetcher);
  return {
    vowel: data,
    isLoading: !data && !error,
    isError: error,
  };
};

/* -------------------------------------------------------------------------- */

class HangleVowels {
  static API = process.env.REACT_APP_API;

  async getVowelAll() {
    try {
      const response = await fetch(HangleVowels.API);
      const json = await response.json();
      return json;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getVowel(id) {
    try {
      const response = await fetch(`${HangleVowels.API}/${id}`);
      const json = await response.json();
      return json;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

const singleton = new HangleVowels();

export { singleton as hangleVowels };
