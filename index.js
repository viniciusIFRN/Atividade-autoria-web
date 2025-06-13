const menu = document.getElementById("menu");
const span = document.getElementById("spam");
const barra = document.getElementsByClassName("barra-lateral")[0];
const corpo = document.getElementById("corpo");
const infov = document.getElementsByClassName("infov")[0];

function Menu() {
  if (menu.style.display === "block") {
    menu.style.display = "none";
    barra.style.backgroundColor = getComputedStyle(corpo).backgroundColor;
    span.style.display = "none";
  } else {
    menu.style.display = "block";
    barra.style.backgroundColor = "#4d2a50";
    span.style.display = "block";
  }
}

function inicio() {
  window.location.href = "index.html";
}

function selecionar() {
  infov.style.display = "none";
}