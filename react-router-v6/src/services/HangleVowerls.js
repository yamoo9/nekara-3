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
