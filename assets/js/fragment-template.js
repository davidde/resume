import data from './data.js';


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
    const lang = document.documentElement.lang == 'en' ? 0 : 1;

    fetch(`../assets/html/${fragment}-template.html`)
      .then(response => response.text())
      .then(html => {
        const template = document.createElement('template');
        template.innerHTML = html;
        const clone = template.content.cloneNode(true);
        clone.querySelectorAll('[data-resume]').forEach(
          element => {
            const keys = element.getAttribute('data-resume');
            let value = data[fragment];
            // Recursively find the "leaf value" ARRAY:
            keys.split(".").forEach(key => value = value[key]);
            // Default to English value if Dutch one doesn't exist:
            value = value[lang] ? value[lang] : value[0];
            // Only update the HTML if the data actually contains a value:
            if (value) element.innerHTML = value;
          }
        );
        this.shadowRoot.appendChild(clone);
      })
      .catch(error => console.error('Error loading template:', error));
  }
}

// Define the custom element
customElements.define('fragment-template', FragmentTemplate);
