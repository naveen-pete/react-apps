class PostService {
  apiUrlPosts = `${process.env.REACT_APP_API_BASE_URL}/posts`;

  getAll = () => {
    return fetch(this.apiUrlPosts)
      .then(response => response.json());
  }

  get = id => {
    return fetch(`${this.apiUrlPosts}/${id}`)
      .then(response => response.json());
  }

  create = post => {
    return fetch(this.apiUrlPosts, {
      method: 'POST',
      body: JSON.stringify(post),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json());
  }

  update = post => {
    return fetch(`${this.apiUrlPosts}/${post.id}`, {
      method: 'PATCH',
      body: JSON.stringify(post),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json());
  }

  delete = id => {
    return fetch(`${this.apiUrlPosts}/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json());
  }
}

export default new PostService();
