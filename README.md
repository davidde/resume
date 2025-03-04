# Resume
> [!NOTE]
> This entire endeavour has been slightly more complicated than I had anticipated.  
> At least now I know why people generally don't write their resumes in HTML + CSS... 😬

## Project Goal
* Recreate my [canva](https://www.canva.com) resume in pure HTML + CSS.
* Optimize the code for a clean single page "Print to PDF" browser export.

&nbsp;
> [!IMPORTANT]
> * Because CSS by itself gets unwieldy fast, we are choosing to install **TailwindCSS v4** using the [**standalone CLI**](https://tailwindcss.com/blog/standalone-cli), meaning no javascript or node.js is involved. We're currently working on **Windows 11**.
> * Because the HTML gets large really fast (especially with inlined svg's), we're opting to split it into several web component templates, which can then be filled with data from a `.json` file.
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

## Web component set-up
The web components are created by the `fragment-template.js` file, using the following templates:
* `header-template.html`
* `main-template.html`
* `sidebar-template.html`

These web components are then called like e.g. `<fragment-template fragment='sidebar'>` in the `dutch/index.html` and `english/index.html` files.

Note that this will not work when just opening the files in the browser; a server needs to be running. You can use the excellent VScode [Live Preview](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) extension for this. (The [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension seemed to throw incorrect errors).

## Data import
The `fragment-template.js` web components import the relevant data from the `data-resume.js` file using the `data-resume` attributes that are present in the template files. The `data-resume.js` file contains both the English and Dutch data for the resume; if no Dutch data value is present, it will default to the English value.