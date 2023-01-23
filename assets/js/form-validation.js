// const numInput = document.querySelector("#num-input");
// console.log(numInput);
const btnValidation = document.querySelector("#btn-validation");
// console.log(btnValidation);

btnValidation.addEventListener("click", (e) => {
  e.preventDefault();
  const numInput = document.querySelector("#num-input");
  const passwordInput = document.querySelector("#password");

  const inputValue = numInput.value;
  const inputToNum = parseInt(inputValue);

  if (
    inputValue.length < 16 ||
    inputToNum.toString().length < 16 ||
    inputValue === ""
  ) {
    numInput.style.backgroundColor = "red";
  } else if (passwordInput.value === "") {
    passwordInput.style.backgroundColor = "red";
  } else {
    alert("succes");
  }
});
