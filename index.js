const menu = document.getElementById("menu");
const span = document.getElementById("spam");
const barra = document.getElementsByClassName("barra-lateral")[0];
const corpo = document.getElementById("corpo");
const infov = document.getElementsByClassName("infov")[0];

function Menu() {
 if (menu.classList.contains("ativo")) {
   menu.classList.remove("ativo");
    span.classList.remove("ativo");
    barra.style.backgroundColor = getComputedStyle(corpo).backgroundColor;
  } else {
    menu.classList.add("ativo");
    span.classList.add("ativo");
    barra.style.backgroundColor = "#4d2a50";
  }
}

function inicio() {
  window.location.href = "index.html";
}

function selecionar() {
  infov.style.display = "none";
}