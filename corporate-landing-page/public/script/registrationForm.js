document.addEventListener("DOMContentLoaded", function() {
  const disabledClassName = 'button_disabled';
  const formList = [
    document.querySelector('.registration-form'),
    document.querySelector('.newsletter-form'),
  ];

  for (const form of formList) {
    if (form) {
      form.oninput = function() {
        let submitButton = form.querySelector('button');
        if (form.checkValidity()) {
          submitButton.classList.remove(disabledClassName);
        } else {
          submitButton.classList.add(disabledClassName);
        }
      };
    }
  }
});