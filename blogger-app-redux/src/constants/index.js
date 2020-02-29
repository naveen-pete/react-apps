export const categoryAll = {
  id: 'all',
  name: 'All'
};

export class CategoryAction {
  static SELECT_CATEGORY = 'SELECT_CATEGORY';

  static GET_CATEGORIES = 'GET_CATEGORIES';
  static SET_CATEGORIES = 'SET_CATEGORIES';
}

export class PostAction {
  static GET_POSTS = 'GET_POSTS';
  static SET_POSTS = 'SET_POSTS';

  static GET_POST = 'GET_POST';
  static SET_POST = 'SET_POST';

  static CREATE_POST = 'CREATE_POST';
  static SET_CREATED_POST = 'SET_CREATED_POST';

  static UPDATE_POST = 'UPDATE_POST';
  static SET_UPDATED_POST = 'SET_UPDATED_POST';

  static DELETE_POST = 'DELETE_POST';
  static REMOVE_DELETED_POST = 'REMOVE_DELETED_POST';
}

