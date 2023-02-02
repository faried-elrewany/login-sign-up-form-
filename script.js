// box
const boxLoginForm = document.querySelector(".form__login");
const boxSignupFormm = document.querySelector(".form__signUp");
//  login form
const loginForm = document.getElementById("loginForm");
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const loginRemember = document.getElementById("loginRemember");
// signup form
const signupForm = document.getElementById("signupForm");
const signupEmail = document.getElementById("signupEmail");
const signupPassword = document.getElementById("signupPassword");
const signupConfirmPassword = document.getElementById("signupConfirmPassword");
const terms = document.getElementById("terms");

//  links
const loginLink = document.querySelector(".form__login--link");
const signupLink = document.querySelector(".form__sign--up");

// password show and hide
const passShowHide = document.querySelectorAll(".showHide");

// _____________________________________________
// _____________________________________________
// _____________________________________________
// _____________________________________________
// _____________________________________________

// form rotation
signupLink.addEventListener("click", (e) => {
  e.preventDefault();
  boxLoginForm.style.transform = "rotateY(180deg)";
  boxSignupFormm.style.transform = "rotateY(0deg)";
});
// form reverse rotation
loginLink.addEventListener("click", (e) => {
  e.preventDefault();
  boxLoginForm.style.transform = "rotateY(0deg)";
  boxSignupFormm.style.transform = "rotateY(-180deg)";
});

//  show and hide password
passShowHide.forEach((eye) => {
  eye.addEventListener("click", () => {
    const parentEl = eye.parentElement;
    const passinput = parentEl.querySelector("input");
    if (passinput.type === "password") {
      passinput.type = "text";
      eye.name = "eye-outline";
    } else {
      passinput.type = "password";
      eye.name = "eye-off-outline";
    }
  });
});
// make validation to email
function testEmail(email) {
  if (!email.value) {
    alert("Email is required");
    return false;
  } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    alert("Please enter a valid email address");
    return false;
  }
  return true;
}
// make validation to password
function testPassword(password) {
  if (!password.value) {
    alert("Password is required");
    return false;
  } else if (password.value.length < 8) {
    alert("Password must be at least 8 characters long");
    return false;
  } else if (!/^(?=.*[A-Z])(?=.*\d).{8,}$/.test(password.value)) {
    alert("Password must contain at least one uppercase letter and one number");
    return false;
  }
  return true;
}
function testRememberMe(terms) {
  if (!terms.checked) {
    alert("Please accept the terms and conditions");
    return false;
  }
  return true;
}

function testConfirmPassowrd(signupConfirmPassword, signupPassword) {
  if (signupConfirmPassword.value !== signupPassword.value) {
    alert("Passwords don't match");
    return false;
  }
  return true;
}
function formValidation(
  form,
  email,
  password,
  confirm = 1,
  terms = 1,
  signup = true
) {
  // check email
  if (!testEmail(email)) return false;
  // check password
  if (!testPassword(password)) return false;

  // if it is a signup form
  if (signup) {
    //check confirm password
    if (!testConfirmPassowrd(confirm, password)) return false;
    // check terms
    if (!testRememberMe(terms)) return false;
  }
  // reset inputs
  form.reset();
  alert("Have a Good Day MY Friend");
}

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation(loginForm, loginEmail, loginPassword, 1, 1, false);
});
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation(
    signupForm,
    signupEmail,
    signupPassword,
    signupConfirmPassword,
    terms,
    true
  );
});
