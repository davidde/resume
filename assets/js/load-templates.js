import data from './data.js';


function loadTemplate(template) {
  const templatePath = `../assets/html/${template}-template.html`;
  const targetElement = template === 'sidebar' ? 'aside' : template;
  const lang = document.documentElement.lang == 'en' ? 0 : 1;

  fetch(templatePath)
    .then(response => response.text())
    .then(html => {
      const target = document.getElementsByTagName(targetElement)[0];
      const clone = target.cloneNode(true);
      clone.innerHTML = html;
      clone.querySelectorAll('[data-resume]').forEach(
        element => {
          const keys = element.getAttribute('data-resume');
          let value = data[template];
          // Recursively find the "leaf value" ARRAY:
          keys.split(".").forEach(key => value = value[key]);
          // Default to English value if Dutch one doesn't exist:
          value = value[lang] ? value[lang] : value[0];
          // Only update the HTML if the data actually contains a value:
          if (value) element.innerHTML = value;
        }
      );
      target.innerHTML = clone.innerHTML;
      if (template === 'sidebar') inlineSvgIcons();
    })
    .catch(error => console.error('Error loading template:', error));
}

function inlineSvgIcons() {
  document.querySelectorAll("[data-svg]")
    .forEach(icon => {
      const url = icon.getAttribute("data-svg");
      fetch(url)
        .then(response => {
          if (!response.ok) {
            console.error(`SVG URL '${url}' Not Found`);
            return null;
          }
          return response.text()
        })
        .then(html => icon.innerHTML = html)
        .catch(err => console.error(`Error loading SVG: ${url}`, err));
    });
}

document.addEventListener('DOMContentLoaded', () => {
  loadTemplate('header');
  loadTemplate('sidebar');
  loadTemplate('main');
});
