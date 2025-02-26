// Store the shared CSS so it's only fetched once:
let sharedStylesheet = null;

class FragmentTemplate extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    // Check if the stylesheet is already loaded:
    if (sharedStylesheet) {
      this.shadowRoot.adoptedStyleSheets = [sharedStylesheet];
    } else {
      // Fetch external CSS file:
      fetch('../assets/css/tailwind-output.css')
        .then(response => response.text())
        .then(cssText => {
          sharedStylesheet = new CSSStyleSheet();
          sharedStylesheet.replaceSync(cssText);
          this.shadowRoot.adoptedStyleSheets = [sharedStylesheet];
        })
        .catch(error => console.error('Error loading CSS:', error));
    }
  }

  connectedCallback() {
    const fragment = this.getAttribute('fragment');

    fetch(`../assets/html/${fragment}-template.html`)
      .then(response => response.text())
      .then(html => {
        const template = document.createElement('template');
        template.innerHTML = html;
        const clone = template.content.cloneNode(true);
        this.shadowRoot.appendChild(clone);
      })
      .catch(error => console.error('Error loading template:', error));
  }
}

// Define the custom element
customElements.define('fragment-template', FragmentTemplate);
