export default class API {
    async getCharacter(url) {
      const response = await fetch(url)
      const data = await response.json()
      return data
    }
  }