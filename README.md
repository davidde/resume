# Resume
## Project Goal
* Recreate my fancy [Canva](https://www.canva.com) resume in pure HTML + CSS.
* Test PDF export.
* Ultimately, creating a vscode extension for **markdown resume to pdf conversion** with a live preview (similar to `Markdown PDF` + `Markdown Preview Github Styling`).  
  This will likely involve digging into existing markdown to HTML parsers and try to nudge them in the right direction for a better html resume layout. Look into [PANDOC](https://pandoc.org/MANUAL.html) first, as well as [Markdown PDF](https://github.com/yzane/vscode-markdown-pdf) and [Markdown Preview Github Styling](https://github.com/mjbvz/vscode-github-markdown-preview-style).

&nbsp;
> [!IMPORTANT]
> Because CSS by itself gets unwieldy fast, we are choosing to install **TailwindCSS v4** using the [**standalone CLI**](https://tailwindcss.com/blog/standalone-cli), meanig no javascript or node.js is involved.  
> We're currently working on **Windows 11**.
> 
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
  tailwindcss -i resume.css -o assets/css/tailwind-output.css --watch

  # To compile and minify the CSS for production:
  # tailwindcss -i resume.css -o assets/css/tailwind-output.css --minify
  ```
* Update the linked stylesheet in the html:
  ```html
  <!-- Replace the input stylesheet: -->
  <!-- <link rel='stylesheet' href='resume.css'> -->

  <!-- with the output stylesheet: -->
  <link rel='stylesheet' href='assets/css/tailwind-output.css'>
  ```
  Note that `src` paths in the CSS file will not be updated by Tailwind, so you need to manually replace paths like this:
  ```
  src: url(assets/fonts/Inter/Inter-VariableFont_wght.ttf)
  =>
  src: url(../fonts/Inter/Inter-VariableFont_wght.ttf)
  ```
