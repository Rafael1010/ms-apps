class CategoryFeed extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
      const css = `
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
      `;
      const section = document.createElement('section');
      shadow.appendChild(section);
      shadow.innerHTML = css;
      this.imagem1 = this.getAttribute('ms-atributo-data-imagem1');
      this.imagem2 = this.getAttribute('ms-atributo-data-imagem2');
      this.imagem3 = this.getAttribute('ms-atributo-data-imagem3');
      this.render();
    }
  
    static get observedAttributes() {
      return ['ms-atributo-data-imagem1', 'ms-atributo-data-imagem2', 'ms-atributo-data-imagem3'];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      switch (name) {
        case 'ms-atributo-data-imagem1':
          this.imagem1 = newValue;
          break;
        case 'ms-atributo-data-imagem2':
          this.imagem2 = newValue;
          break;
        case 'ms-atributo-data-imagem3':
          this.imagem3 = newValue;
          break;
      }
      this.render();
    }
  
    render() {
      this.shadowRoot.querySelector('section').innerHTML = `
        <img src="${this.imagem1}" alt="Categoria">
        <img src="${this.imagem2}" alt="Categoria">
        <img src="${this.imagem3}" alt="Categoria">
      `;
    }
  }
  
  customElements.define('ms-apps-categoryFeed', CategoryFeed);
  