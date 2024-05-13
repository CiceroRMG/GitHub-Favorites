// classe que contém a lógica dos dados e como eles serão estruturados
class Favorites {  
  constructor(root) {
    this.root = document.querySelector(root)
    this.load()
  }

  load() {
    this.entries = [
      {
        login: 'ciceroRMG',
        name: 'Cicero Gomes',
        public_repos: '04',
        followers: '10'
      },
      {
        login: 'maykbrito',
        name: 'Mayk Brito',
        public_repos: '76',
        followers: '120000'
      },
    ]
  }
}

// classe que vai criar a visualização e eventos do HTML
export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)
    this.tbody = this.root.querySelector('table tbody')
    this.update()
  }

  update() {
    this.removeAllTr()

    this.entries.forEach( user => {
      const row = this.createRow()

      row.querySelector('.user img').src = `https://github.com/${user.login}.png`
      row.querySelector('.user p').textContent = user.name
      row.querySelector('.user span').textContent = user.login
      row.querySelector('.repositories').textContent = user.public_repos
      row.querySelector('.followers').textContent = user.followers

      this.tbody.append(row)
    })


  }

  createRow() {
    const tr = document.createElement('tr')

    tr.innerHTML = `
      <td class="user">
        <img src="https://github.com/saske.png">
        <a href="https://github.com/saske" target="_blank">
          <p>Saske</p>
          <span>saske</span>
        </a>
      </td>
      <td class="repositories">
        78
      </td>
      <td class="followers">
        1290
      </td>
      <td>
        <button class="remove">&times;</button>
      </td>
    `

    return tr
  }

  removeAllTr() {
    this.tbody.querySelectorAll('tr')
      .forEach((tr) => {
        tr.remove()
      })
  }
}