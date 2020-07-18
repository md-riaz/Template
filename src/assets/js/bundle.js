/* Hot Module Replacement */
if (module.hot) {
  module.hot.accept();
}
/*============================= */
/* Required Environment setup */
/*=============================*/

window.$ = window.jQuery = require("jquery"); //import jQuery globaly
import bootstrap from "bootstrap"; // import bootstrap js (scss on scss file)
import style from "../scss/style.scss"; // import main scss file for compilation
// jquery countdown plugin
// require("../../../node_modules/jquery-countdown/dist/jquery.countdown");

/* importing Font Awesome 5  all scss files */
import "../../../node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss";
import "../../../node_modules/@fortawesome/fontawesome-free/scss/fa-brands.scss";
import "../../../node_modules/@fortawesome/fontawesome-free/scss/fa-regular.scss";
import "../../../node_modules/@fortawesome/fontawesome-free/scss/fa-solid.scss";

/* =============== */
/* MAIN FUNCTIONS */
/* =============== */
$(function () {
  /* Variables */

  /*  100vh unit for css height */
  let setVHunit = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    console.log(vh);
  };
  window.addEventListener("resize", () => {
    setVHunit();
  });
});
