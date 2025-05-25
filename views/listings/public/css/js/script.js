
// under views , under listings, under public ,under css , under js script.js file
(() => {
  "use strict";

  
  const forms = document.querySelectorAll(".needs-validation");

  
  Array.from(forms).forEach(form => {
    form.addEventListener(
        "submit", 
        (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add("was-validated");
    }, 
    false);
  });
})();