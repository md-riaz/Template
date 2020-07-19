# Parcel Starter Template

This is now a developer environment starter template featuring Parcel, Nodejs, bootstrap, jQuery , Font Awesome 5, Parcel bundler, postcss module and SCSS compilation included. Custom scrollbar mixin also added.

### Importent note

- need to config bootstrap scss file on `_imports.scss`
- need to check file path for font awesome 5 scss files on bundle.js

#### Warning

- don't import scss or css file to main bundle.js because it won't render css to other html files. So scss file should be linked to every html file with link tag.
- only fontawesome 5 scss file will be imported with bundle.js
