/* Hot Module Replacement */
if (module.hot) {
  module.hot.accept();
}
/*============================= */
/* Required Environment setup */
/*=============================*/

window.$ = window.jQuery = require("jquery"); //import jQuery globaly
import bootstrap from "bootstrap"; // import bootstrap js (scss on scss file)
//to import js plugins
// const plugin_name = require("plugin-name");
/* =============== */
/* MAIN FUNCTIONS */
/* =============== */
$(function () {
  /* Variables */

  /*  100vh unit for css height */
  let setVHunit = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    console.log(
      `viewport height: ${vh}`,
      `Usage:   
       height: 100vh;
       height: calc(var(--vh, 1vh) * 100);`
    );
  };
  setVHunit();

  window.addEventListener("resize", () => {
    setVHunit();
  });

  /* Other functions */
});
