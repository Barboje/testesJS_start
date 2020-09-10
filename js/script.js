// Função para soma
function clicarSomar() {
  var num1 = document.querySelector("#num1").value.replace(',', '.');
  var num2 = document.querySelector("#num2").value.replace(',', '.');

  var resultado = parseFloat(num1) + parseFloat(num2);
  document.querySelector(".resultado").innerHTML = resultado;
}

// Função para alert - Nome completo
function clicarNomeCompleto() {
  var nome = document.querySelector("#nome").value;
  var sobrenome = document.querySelector("#sobrenome").value;

  alert(`Seu nome completo é ${nome} ${sobrenome}`);

}

// Função para contagem "option" dias do mês de 1 a 31
function populaDias() {
  var inputDay = document.querySelector("#inputDay");
  for (let index = 0; index < 31; index++) {
    var myOption = document.createElement("option");
    myOption.text = index + 1;
    myOption.value = index + 1;
    inputDay.appendChild(myOption);
  }
}

function seuSigno() {
  var diaSelecionado = document.querySelector("#inputDay").value;
  var mesSelecionado = document.querySelector("#inputMonth").value;

  var dataNascimento = RetornaData(diaSelecionado, mesSelecionado);


  if (dataNascimento >= RetornaData(21, 3) && dataNascimento <= RetornaData(19, 4)) {
    MostraSigno('Áries');
  } else if (dataNascimento >= RetornaData(20, 4) && dataNascimento <= RetornaData(20, 5)) {
    MostraSigno('Touro');
  } else if (dataNascimento >= RetornaData(21, 5) && dataNascimento <= RetornaData(20, 6)) {
    MostraSigno('Gêmeos');
  } else if (dataNascimento >= RetornaData(21, 6) && dataNascimento <= RetornaData(22, 7)) {
    MostraSigno('Câncer');
  } else if (dataNascimento >= RetornaData(23, 7) && dataNascimento <= RetornaData(22, 8)) {
    MostraSigno('Leão');
  } else if (dataNascimento >= RetornaData(23, 8) && dataNascimento <= RetornaData(22, 9)) {
    MostraSigno('Virgem');
  } else if (dataNascimento >= RetornaData(23, 9) && dataNascimento <= RetornaData(22, 10)) {
    MostraSigno('Libra');
  } else if (dataNascimento >= RetornaData(23, 10) && dataNascimento <= RetornaData(21, 11)) {
    MostraSigno('Escorpião');
  } else if (dataNascimento >= RetornaData(22, 11) && dataNascimento <= RetornaData(21, 12)) {
    MostraSigno('Sagitário');
  } else if (dataNascimento >= RetornaData(20, 1) && dataNascimento <= RetornaData(18, 2)) {
    MostraSigno('Aquário');
  } else if (dataNascimento >= RetornaData(19, 2) && dataNascimento <= RetornaData(20, 3)) {
    MostraSigno('Sagitário');
  } else {
    MostraSigno('Capricornio');
  }
}

// Função para otimizar o código a cima, para criar a frase padrão
function MostraSigno(signo) {
  var signoResultado = document.querySelector(".signo");
  signoResultado.innerHTML = "Seu signo é: <b>" + signo + "</b>";
}

// Função 
function RetornaData(dia, mes) {
  return new Date(2020, mes - 1, dia);
}

var quebrada = false;
function acendeLampada() {
  if (quebrada == false) {
    document.querySelector("#luz").src = "img/lampada-acesa.jpg";
  }
}
function apagaLampada() {
  if (quebrada == false) {
    document.querySelector("#luz").src = "img/lampada-apagada.jpg";
  }
}
function quebraLampada() {
  document.querySelector("#luz").src = "img/lampada-quebrada.jpg";
  quebrada = true;
}

