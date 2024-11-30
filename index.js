const form=document.querySelector("#registration-form");
const nameInput=document.querySelector("#name");
const usernameInput=document.querySelector("#username");
const emailInput=document.querySelector("#email");
const passwordInput=document.querySelector("#password");
const confirmPasswordInput=document.querySelector("#confirm-password");
const submitButton=document.querySelector("#submit-btn");
const prefillBtn = document.querySelector("#prefill-btn");

submitButton.disabled= true;

document.querySelectorAll("label").forEach((label)=>{
  label.addEventListener("click", ()=>{
    const input=label.nextElementSibling;
    input.focus();
  });
});


function checkInputs(){
  const isComplete=
  nameInput.value.trim() &&
  usernameInput.value.trim() &&
  emailInput.value.trim() &&
  passwordInput.value.trim() &&
  confirmPasswordInput.value.trim();
  return isComplete;
}

function validatePassword(){
  if(passwordInput.value.length >=8){
    passwordInput.classList.remove("error");
    passwordInput.classList.add("success");
    return true;
  }
   else{
    passwordInput.classList.remove("success");
    passwordInput.classList.add("error")
    return false;
  }
}

function validateConfirmPassword(){
  if (passwordInput.value === confirmPasswordInput.value){
    confirmPasswordInput.classList.remove("error");
    confirmPasswordInput.classList.add("success");
    return true;
  }
  else{
    confirmPasswordInput.classList.remove("success");
    confirmPasswordInput.classList.add("error");
    return false;
  }
}


function updateSubmitButton(){
  if(checkInputs () && validatePassword()
   && validateConfirmPassword()
  ){
    submitButton.disabled=false;
  }else {
    submitButton.disabled=true;
  }
}


form.addEventListener("input", ()=> {
  validatePassword();
  validateConfirmPassword();
  updateSubmitButton();
});

form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const registrationData = {
      name: document.querySelector('#name').value,
      username: document.querySelector('#username').value,
      email: document.querySelector('#email').value,
      password: passwordInput.value,
  };

  console.log(registrationData); 
  alert(JSON.stringify(registrationData, null, 2)); 
});