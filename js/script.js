// -----------------About-----------
var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabname) {
  for (tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }
  for (tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// -------------------Small Device Menu---------------------
var sideBar = document.getElementById("sideBar");

function openMenu() {
  sideBar.style.right = "0";
}

function closeMenu() {
  sideBar.style.right = "-200px";
}
