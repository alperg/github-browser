const BASE_URL =' https://api.github.com/';

export default {
  get: function(params) {
    return fetch(`${BASE_URL}${params}`)
      .then(response => response.json());
  }
}