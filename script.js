document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector(".card");
  const signupBtn = document.querySelector(".show-signup");
  const loginBtn = document.querySelector(".show-login");

  signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    card.classList.add("signup-mode");
  });

  loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    card.classList.remove("signup-mode");
  });
});
