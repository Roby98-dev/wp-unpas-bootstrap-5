const scriptURL =
  "https://script.google.com/macros/s/AKfycbzE8PXtRHrgrS-HbOxnKQivQTVVZY0aBAJCUf3uLUnYNeW4LDGcBCgVa2KYNfWCUql1/exec";
const form = document.forms["submit-to-google-sheet"];
const btnLoading = document.querySelector(".btn-loading");
const btnKirim = document.querySelector(".btn-kirim");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", e => {
  e.preventDefault();

  btnKirim.classList.toggle(".d-none");
  btnLoading.classList.toggle(".d-none");

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(response => console.log("Success!", response))
    .catch(error => console.error("Error!", error.message));
});
