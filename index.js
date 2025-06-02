function funcao() {
    const menu = document.getElementById("menu");
    const barra = document.getElementsByClassName("barra-lateral")[0];
    
    if (menu.style.display === "block") {
      menu.style.display = "none";
      barra.style.backgroundColor = "white";
    } else {
      menu.style.display = "block";
      barra.style.backgroundColor = "#3462b0";
    }
  }