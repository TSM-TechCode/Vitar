let excelBasico = document.querySelector('.excelBasico');

let vezesTroca = 0;

excelBasico.onclick = function exibirExcelBasico() {
  
  const habilitar = function habilitarExcelBasico() {

    document.querySelector('.navbar').style.display = 'none';
    document.querySelector('.secHome').style.display = 'none';
    document.querySelector('.secSobre').style.display = 'none';
    document.querySelector('#ExcelBasico').style.display = 'block';
  }

  const desabilitar = function desabilitarExcelBasico() {
    document.querySelector('#ExcelBasico').style.display = 'none';
    document.querySelector('.navbar').style.display = 'block';
    document.querySelector('.secHome').style.display = 'block';
    document.querySelector('.secSobre').style.display = 'block';
  }
  if (vezesTroca === 0) {
    habilitar();
    vezesTroca += 1;
  }
  else if (vezesTroca > 0) {
    desabilitar();
    vezesTroca = 0;
  } else {
    console.log('Ocorreu algum erro!');
  }
}
