import { categories } from '../data/store';

export const getCategories = () => categories;

export const getCategory = id => {
  const category = categories.find(c => c.id === id);
  return category;
};
