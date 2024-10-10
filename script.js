let activeAbout = false;
let activePay = false;

function aboutActive() {
  var about = document.getElementById("about");
  if (activeAbout) {
    about.classList.add("active-about");
    document.body.classList.add("no-scroll");
  } else {
    about.classList.remove("active-about");
    document.body.classList.remove("no-scroll");
  }
}

function payActive() {
  var pay = document.getElementById("pay");
  if (activePay) {
    pay.classList.add("active-pay");
    document.body.classList.add("no-scroll");
  } else {
    pay.classList.remove("active-pay");
    document.body.classList.remove("no-scroll");
  }
}

function toggleAbout() {
  activeAbout = !activeAbout;
  activePay=false;
  payActive();
  aboutActive();
}

function home() {
  activeAbout = false;
  aboutActive();
  activePay=false;
  payActive();
}

function togglePayment() {
  activePay = !activePay;
  activeAbout = false;
  aboutActive();
  payActive();
}

function popup(){
  alert("Please place your order at the manager desk!!!")
}