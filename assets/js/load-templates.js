import data from './data.js';


function loadTemplate(template) {
  const templatePath = `../assets/html/${template}-template.html`;
  const lang = document.documentElement.lang == 'en' ? 0 : 1;

  fetch(templatePath)
    .then(response => response.text())
    .then(html => {
      const target = document.getElementsByTagName(template)[0];
      target.insertAdjacentHTML('afterbegin', html);
      target.querySelectorAll('[data-resume]').forEach(
        element => {
          const keys = element.getAttribute('data-resume');
          let value = data[template];
          // Recursively find the "leaf value" key to the ['en', 'nl'] ARRAY:
          keys.split(".").forEach(key => value = value[key]);
          // Default to English value if Dutch one doesn't exist:
          value = value[lang] ? value[lang] : value[0];
          element.insertAdjacentHTML('afterbegin', value);
        }
      );
      if (template === 'aside') inlineSvgIcons();
    })
    .catch(error => console.error('Error loading template:', error));
}

function inlineSvgIcons() {
  document.querySelectorAll("[data-svg]")
    .forEach(icon => fetch(icon.getAttribute("data-svg"))
      .then(response => response.text())
      .then(html => icon.insertAdjacentHTML('afterbegin', html))
      .catch(err => console.error('Error loading SVG:', err))
    );
}

document.addEventListener('DOMContentLoaded', () => {
  loadTemplate('aside');
  loadTemplate('header');
  loadTemplate('main');
});
