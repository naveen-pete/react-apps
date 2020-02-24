import { categories } from '../data/store';

import { apiBaseUrl } from '../constants';

class CategoryService {
  apiUrlCategories = `${apiBaseUrl}/categories`;

  getAll() {
    return fetch(this.apiUrlCategories)
      .then(response => response.json());
  }

  get(id) {
    const category = categories.find(c => c.id === id);
    return category;
  }
}

export default new CategoryService();
