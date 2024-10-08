const yearInFooter = document.querySelector(".footer__year");
const menuBtn = document.getElementById("menubtn");
const sideNav = document.getElementById("sideNav");
const menu = document.getElementById("menu");

sideNav.style.right = "-250px";

menuBtn.onclick = function () {
  if (sideNav.style.right === "-250px") {
    sideNav.style.right = "0";
    menu.src = "images/x.svg";
  } else {
    sideNav.style.right = "-250px";
    menu.src = "images/menu.svg";
  }
};

function clickOutside(event) {
  const isClickInside = sideNav.contains(event.target);
  const isMenuButtonClicked = menuBtn.contains(event.target);

  if (!isClickInside && !isMenuButtonClicked) {
    sideNav.style.right = "-250px";
    menu.src = "images/menu.svg";
  }
}

document.addEventListener("click", clickOutside);

const CurrentYear = () => {
  yearInFooter.innerText = new Date().getFullYear();
};

CurrentYear();
