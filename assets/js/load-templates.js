import data from './data.js';


function loadTemplate(template) {
  const templatePath = `../assets/html/${template}-template.html`;
  const targetElement = template === 'sidebar' ? 'aside' : template;
  const lang = document.documentElement.lang == 'en' ? 0 : 1;

  fetch(templatePath)
    .then(response => response.text())
    .then(html => {
      const target = document.getElementsByTagName(targetElement)[0];
      target.innerHTML = html;
      target.querySelectorAll('[data-resume]').forEach(
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
    })
    .catch(error => console.error('Error loading template:', error));
}

document.addEventListener('DOMContentLoaded', () => {
  loadTemplate('header');
  loadTemplate('sidebar');
  loadTemplate('main');
});
