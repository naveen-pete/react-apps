import { posts } from '../data/store';

export const getPosts = () => posts;

export const getPost = id => {
  const post = posts.find(p => p.id === id);
  return post;
};

export const addPost = post => {
  const newPost = {
    ...post,
    id: Date.now()
  };

  posts.push(newPost);
};

export const updatePost = post => {
  const postToUpdate = posts.find(p => p.id === post.id);

  if (postToUpdate) {
    const { title, body, author, category } = post;
    postToUpdate.title = title;
    postToUpdate.body = body;
    postToUpdate.author = author;
    postToUpdate.category = category;
  }
};

export const deletePost = id => {
  const index = posts.findIndex(p => p.id === id);
  if (index >= 0) {
    posts.splice(index, 1);
  }
};
