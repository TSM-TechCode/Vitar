let vezesTroca = 0;
let excelBasico = document.querySelector(".excelBasico");

excelBasico.onclick = function exibirExcelBasico() {
  
  const habilitar = function habilitarExcelBasico() {

    document.querySelector(".other").style.display = "none";
    document.querySelector("#ExcelBasico").style.display = "block";
  }

  const desabilitar = function desabilitarExcelBasico() {
    document.querySelector("#ExcelBasico").style.display = "none";
    document.querySelector(".other").style.display = "block";
  }
  if (vezesTroca === 0) {
    habilitar();
    vezesTroca = vezesTroca + 1;
  }
  else if (vezesTroca > 0) {
    desabilitar();
    vezesTroca = vezesTroca - 1;
  } else {
    console.log("Ocorreu algum erro!");
  }
      }
