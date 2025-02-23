# resumd
## Project Goal
**Creating a pdf resume from markdown.**

## Installing TailwindCSS
> [!NOTE]
> We will install **TailwindCSS v4** using the **standalone CLI** (without node.js) on **Windows**.

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
* Then update the linked stylesheet in the html:
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
