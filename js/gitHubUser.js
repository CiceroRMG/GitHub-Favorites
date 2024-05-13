export class GithubUser {
    // o static serve para tornar o método estático, sendo assim não precisamos colocar o new antes da classe
    static search(username) {
      const endpoint = `https://api.github.com/users/${username}`
  
      return fetch(endpoint)
      .then(data => data.json())
      .then(({ login, name, public_repos, followers }) => ({
        login,
        name,
        public_repos,
        followers
      }))
    }
  }