# Parcel Starter Template

This is now a developer environment starter template featuring Parcel, Nodejs, bootstrap, jQuery , Font Awesome 5, Parcel bundler, postcss module and SCSS compilation included. Custom scrollbar mixin also added.

### Importent note

- need to config bootstrap scss file on `_imports.scss`
- js will be imported on `bundle.js` file and css/scss/sass files will be imported on `_imports.scss` file
- if localhost doesn't load index page then on `npm run dev` command files can be accessed with http://localhost:1234/page.html

#### Warning

- don't import scss or css file to main bundle.js because it won't render css to other html files. So scss file should be linked to every html file with link tag.
- font awesome 5 scss files will be imported on \_imports.scss file and have to set `$fa-font-path` path correctly
