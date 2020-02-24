export const getCategoryName = (categories, id) => {
  const category = categories.find(c => c.id === id);
  return category ? category.name : '';
}
