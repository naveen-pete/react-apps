const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

export const getTodos = (page, limit) => {
  let url = limit > 0
    ? `${apiUrl}?_page=${page}&_limit=${limit}`
    : apiUrl;

  return fetch(url);
};
