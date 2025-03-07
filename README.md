# Resume
> [!NOTE]
> This entire endeavour has been slightly more complicated than I had anticipated.  
> At least now I know why people generally don't write their resumes in HTML + CSS... 😬

## Project Goals
* Create my resume as a webpage.
* Optimize the code for a clean single page "Print to PDF" browser export.
* Import all data efficiently from a file that can be easily modified.

&nbsp;
> [!IMPORTANT]
> * Because CSS by itself gets unwieldy fast, we are choosing to install **TailwindCSS v4** using the [**standalone CLI**](https://tailwindcss.com/blog/standalone-cli), meaning no javascript or node.js is involved. We're currently working on **Windows 11**.
> * Because the HTML gets large really fast (especially with inlined svg's), we're splitting them into several "template" files and using Javascript to inject them into the page. This approach also allows importing the data from the `data.js` file.
&nbsp;

## Installing TailwindCSS
* Download the latest release from https://github.com/tailwindlabs/tailwindcss/releases, and rename it to simply `tailwindcss.exe`.
* Move this executable to somewhere in your path, e.g. `C:\Windows\System32\WindowsPowerShell\v1.0`.
* Verify if it runs from anywhere:
  ```powershell
  tailwindcss -h
  ```
* Specify use of TailwindCSS in your root CSS file:
  ```css
  @import "tailwindcss";
  ```
* Start a watcher to compile Tailwind on the fly, so you don't have to run `tailwindcss` after every code change:
  ```powershell
  tailwindcss -i assets/css/main.css -o assets/css/tailwind-output.css --watch

  # To compile and minify the CSS for production:
  # tailwindcss -i assets/css/main.css -o assets/css/tailwind-output.css --minify
  ```
* Update the linked stylesheet in the html:
  ```html
  <!-- Replace the input stylesheet: -->
  <!-- <link rel='stylesheet' href='assets/css/main.css'> -->

  <!-- with the output stylesheet: -->
  <link rel='stylesheet' href='assets/css/tailwind-output.css'>
  ```
  Note that if the input and output CSS files are not in the same folder, the `src` paths (e.g. for images and fonts) in the CSS file will not be updated by Tailwind, so you'll need to manually update them.

## Template injection
The templates are loaded by the `load-templates.js` file, using the following templates:
* `aside-template.html`
* `header-template.html`
* `main-template.html`

They are injected directly in the `<aside>`, `<header>` and `<main>` tags in the `dutch/index.html` or `english/index.html` files by an EventListener on `DOMContentLoaded`.

Note that this will not work when just opening the files in the browser; a server needs to be running. You can use the excellent VScode [Live Preview](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) extension for this. (The [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension seemed to throw incorrect errors).

## Data import
The `load-templates.js` file also imports the relevant data from the `data.js` file using the `data-resume` attributes that are present in the template files.

All **values** in the `data.js` file are arrays; index 0 contains the English value, while index 1 contains the Dutch value. If no Dutch value is present, the page will default to the English value.

## SVG inlining
The `load-templates.js` script also inlines the `svg`'s from the `assets/images` folder directly into the HTML, using the `data-svg` attributes from the template files. This way, the template files aren't polluted with hundreds of lines of svg code, while the svg's can still be styled with TailwindCSS. The TailwindCSS classes are directly embedded into the svg code itself.
