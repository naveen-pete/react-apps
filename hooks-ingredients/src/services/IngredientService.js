class IngredientService {
  apiUrl = 'https://react-apps-b3243.firebaseio.com/ingredients';

  async getAll() {
    const response = await fetch(`${this.apiUrl}.json`);
    return await response.json();
  }

  async create(ingredient) {
    const response = await fetch(`${this.apiUrl}.json`, {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return await response.json();
  }

  async search(searchText) {
    const url = searchText.length > 0
      ? `${this.apiUrl}.json?orderBy="name"&equalTo="${searchText}"`
      : `${this.apiUrl}.json`;

    const response = await fetch(url);
    return await response.json();
  }

  async delete(id) {
    const response = await fetch(
      `${this.apiUrl}/${id}.json`,
      {
        method: 'DELETE'
      }
    );

    return await response.json();
  }
}

export default new IngredientService();
