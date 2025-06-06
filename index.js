function funcao() {
    const menu = document.getElementById("menu");
    const span = document.getElementById("spam");
    const barra = document.getElementsByClassName("barra-lateral")[0];
    
    if (menu.style.display === "block") {
      menu.style.display = "none";
      barra.style.backgroundColor = "white";
      span.style.display = "none"
    } else {
      menu.style.display = "block";
      barra.style.backgroundColor = "#3462b0";
      span.style.display = "block"
    }
  }

  function recarregar(){
     location.reload()
  }