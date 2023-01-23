// *** devenir client open form functions *** //

const btnForm = document.querySelector(".open-form");
const upContainer = document.querySelector(".up-container");
const downContainer = document.querySelector(".down-container");
const formContainer = document.querySelector(".devenir-client-form");

btnForm.addEventListener("click", () => {
  if (
    upContainer.classList.contains("up-animation") &&
    downContainer.classList.contains("down-animation")
  ) {
    upContainer.classList.remove("up-animation");
    downContainer.classList.remove("down-animation");

    upContainer.classList.add("up-animation-reverse");
    downContainer.classList.add("down-animation-reverse");

    formContainer.style.display = "none";
    btnForm.innerHTML = "Ouverir un compte en ligne";
    btnForm.classList.remove("btn-open-position");
  } else {
    upContainer.classList.remove("up-animation-reverse");
    downContainer.classList.remove("down-animation-reverse");

    upContainer.classList.add("up-animation");
    downContainer.classList.add("down-animation");

    upContainer.style.position = "relative";
    formContainer.style.display = "flex";
    btnForm.innerHTML = "Fermer le formulaire";
    btnForm.classList.add("btn-open-position");
  }
});
