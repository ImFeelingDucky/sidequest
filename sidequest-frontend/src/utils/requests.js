const API_ENDPOINT =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001/api'
    : 'https://prod/api'

const DEFAULT_FETCH_OPTIONS = {
  // mode: 'no-cors' // Definitely don't set this! This disables cross origin resource sharing or something
}

export default {
  get (path) {
    return fetch(`${API_ENDPOINT}/${path}`, DEFAULT_FETCH_OPTIONS).then(res => {
      return res.json()
    })
  },
  post (path, data) {
    return this.postToEndpoint(API_ENDPOINT, path, data)
  },
  postToEndpoint (endpoint, path, data) {
    return fetch(`${endpoint}/${path}`, {
      ...DEFAULT_FETCH_OPTIONS,
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json'
      },
      credentials: 'include' //	 send cookies
    }).then(res => res.json())
  }
}
