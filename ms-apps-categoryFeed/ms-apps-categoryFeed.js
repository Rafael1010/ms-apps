class CategoryFeed extends HTMLElement {

    constructor() {
        super()

        const SHADOW = this.attachShadow({"mode": "open"})

        let imagem1 = this.getAtribute("data-imagem1")
        let imagem2 = this.getAtribute("data-imagem2")
        let imagem3 = this.getAtribute("data-imagem3")

        const CSS = `
        <style>
        section {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 2px;
          }
          img {
            max-width: 100%;
          }
        </style>
    `

        const HTML =  document.createElement("section")
        HTML.innerHTML = `
        ${CSS}
        <section>
            <img src="${imagem1}" alt="Categoria">
            <img src="${imagem2}" alt="Categoria">
            <img src="${imagem3}" alt="Categoria">
        </section>
    `

    SHADOW.appendChild(HTML)

    }


}

customElements.define("ms-apps-categoryFeed", CategoryFeed)
