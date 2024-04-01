export class NavegationBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        header {
          overflow: hidden;
          display: flex;
          justify-content: flex-end; 
          padding-top: 0.75rem;
          padding-bottom: 0.75rem;
          min-width: 100vh;
        }
        header nav {
          display: flex;
          display-direction: row; 
          column-gap: 2.5rem; /* 40px */
          opacity: 0.9;
        }
        header nav a {
          color: #fff
        }
      </style>
      <header>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
        </nav>
      </header>
    `
  }
}
customElements.define('navigation-bar', NavegationBar)
