class CategoryService {
  apiUrlCategories = `${process.env.REACT_APP_API_BASE_URL}/categories`;

  getAll = () => {
    return fetch(this.apiUrlCategories)
      .then(response => response.json());
  }
}

export default new CategoryService();
