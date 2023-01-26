// general elements
const passShowHide = document.querySelectorAll(".showHide");
const boxs = document.querySelector(".boxs");
// _________________________________________________________________
//_________________________login elements_______________________________
// _________________________________________________________________
const loginForm = document.querySelector(".form__login");
const loginPass = document.querySelector(".login__pass");
const loginEmail = document.querySelector(".login__email");
const loginBtn = document.querySelector(".form__login--link");
const loginSubmit = document.querySelector(".login-btn");
// _________________________________________________________________
//___________________signup elements_______________________________
// _________________________________________________________________
const signupName = document.querySelector(".signup__name");
const signupEmail = document.querySelector(".signup__email");
const signuppass = document.querySelector(".signup__pass");
const signupConfirm = document.querySelector(".signup__confirm");
const regBtn = document.querySelector(".reg-btn");
const logSignUp = document.querySelector(".log__email--input-signup");
const signupForm = document.querySelector(".form__signUp");
const signupBtn = document.querySelector(".form__sign--up");
const password = [loginPass, signuppass, signupConfirm];
// ________________________________________________________________
let check = true;
const arr = [];

// _____functions_________________________________

function showErorSignUp(input, msg) {
  const partElm = input.parentElement;
  const small = partElm.querySelector("small");
  small.textContent = msg;
  small.classList.add("error");
}
function accepted(input) {
  const partElm = input.parentElement;
  const small = partElm.querySelector("small");
  small.classList.remove("error");
}
function getmsg(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
function blurInputs() {
  signupEmail.value = "";
  signupName.value = "";
  signuppass.value = "";
  signupConfirm.value = "";
}
function checkRequired(arr) {
  for (cur of arr) {
    if (cur.value.trim() === "") {
      showErorSignUp(cur, `${getmsg(cur)} is required`);
      check = false;
      continue;
    } else {
      accepted(cur);
    }
    if (cur.type === "email") {
      if (!cur.value.includes("@")) {
        showErorSignUp(cur, `${getmsg(cur)} must include @`);
        check = false;
      } else if (!cur.value.includes(".")) {
        showErorSignUp(cur, `${getmsg(cur)} must include . like (.com) etc`);
        check = false;
      } else if (Number(cur.value[0])) {
        showErorSignUp(cur, `${getmsg(cur)} must not start with number`);
        check = false;
      }
    }
  }
}
function validDataLogin() {
  if (
    loginEmail.value.trim() !== "" &&
    loginEmail.value.includes(".") &&
    loginEmail.value.includes("@") &&
    loginPass.value.length >= 3 &&
    loginPass.value.length <= 15 &&
    !Number(loginEmail.value[0])
  ) {
    if (loginEmail.value.includes(".") && loginEmail.value.includes("@")) {
      const str = loginEmail.value.slice(
        loginEmail.value.indexOf("@") + 1,
        loginEmail.value.indexOf(".")
      );
      if (str.length >= 1) return true;
    }
  }
  return false;
}
function validDataSignUp() {
  if (
    signupEmail.value.trim() !== "" &&
    signupEmail.value.includes(".") &&
    signupEmail.value.includes("@") &&
    signuppass.value.length >= 3 &&
    signuppass.value.length <= 15 &&
    !Number(signupEmail.value[0]) &&
    signuppass.value === signupConfirm.value
  ) {
    console.log("okk");
    if (signupEmail.value.includes(".") && signupEmail.value.includes("@")) {
      const str = signupEmail.value.slice(
        signupEmail.value.indexOf("@") + 1,
        signupEmail.value.indexOf(".")
      );
      if (str.length >= 1) return true;
    }
  }
  console.log("erroe");
  return false;
}
function checkLength(input) {
  if (input.value.length < 3) {
    showErorSignUp(input, `${getmsg(input)} length is less than 3`);
    check = false;
  } else if (input.value.length > 15) {
    showErorSignUp(input, `${getmsg(input)} length must be less than 16`);
    check = false;
  } else {
    accepted(input);
  }
}
function checkConfirm(input) {
  if (input.value !== signuppass.value) {
    showErorSignUp(input, `${getmsg(input)} is not accurate`);
    check = false;
  } else {
    accepted(input);
  }
}
function validateLogin() {
  checkLength(loginPass);
  checkRequired([loginEmail, loginPass]);
}
function validateSignUp() {
  checkLength(signuppass);
  checkLength(signupName);
  checkRequired([signupName, signupEmail, signuppass, signupConfirm]);
  checkConfirm(signupConfirm);
}

// _____________event listener___________________________

// form rotation
signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.style.transform = "rotateY(180deg)";
  signupForm.style.transform = "rotateY(0deg)";
  signupName.focus();
});
// form reverse rotation
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.style.transform = "rotateY(0deg)";
  signupForm.style.transform = "rotateY(-180deg)";
  loginEmail.focus();
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
// check Login Inputs
loginSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  validateLogin();
  if (validDataLogin()) {
    console.log("hello");
    boxs.style.opacity = "0";
    boxs.style.visibility = "hidden";
  }
});
// check signUp Inputs
regBtn.addEventListener("click", (e) => {
  e.preventDefault();
  validateSignUp();
  const newobj = {
    email: signupEmail.value,
    pass: signuppass.value,
    name: signupName.value,
  };
  if (validDataSignUp()) {
    arr.push(newobj);
    console.log(newobj);
    blurInputs();
    loginBtn.click();
    loginEmail.focus();
  }
});

// blur inputs after click then go to login inputs
// change colors // remove repeated code
//
