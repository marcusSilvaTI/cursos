// var paciente = document.getElementsByClassName('paciente');
// var posicaoAtual = 0;
// while (posicaoAtual <= paciente.length-1) {
//
//   var pessoaAtual = paciente[posicaoAtual];
//
//   var nome = pessoaAtual.getElementsByClassName('info-nome')[0];
//   var peso = pessoaAtual.getElementsByClassName('info-peso')[0];
//   var altura = pessoaAtual.getElementsByClassName('info-altura')[0];
//   var imcCalculado = pessoaAtual.getElementsByClassName('info-imc')[0];
//
//   var pacienteAtual =  {nome:nome.textContent, peso:peso.textContent, altura:altura.textContent};
//   var imc = calcularIMC(pacienteAtual.altura, pacienteAtual.peso);
//   imcCalculado.textContent = imc;
//
//   posicaoAtual++;
// }
//
// function calcularIMC(altura, peso){
//   if (altura!==0) {
//     var imc = parseFloat(peso) / parseFloat(parseFloat(altura) * parseFloat(altura));
//     return imc;
//   }else {
//     console.log("Altura deve ser superior a 0!");
//   }
// }
function calcularTodosImc(){
  var paciente = document.getElementsByClassName('paciente');
  for (var posicaoAtual = 0; posicaoAtual < paciente.length; posicaoAtual++) {
    var pessoaAtual = paciente[posicaoAtual];

    var nome = pessoaAtual.getElementsByClassName('info-nome')[0];
    var peso = pessoaAtual.getElementsByClassName('info-peso')[0];
    var altura = pessoaAtual.getElementsByClassName('info-altura')[0];
    var imcCalculado = pessoaAtual.getElementsByClassName('info-imc')[0];

    var pacienteAtual =  {nome:nome.textContent, peso:peso.textContent, altura:altura.textContent};
    var imc = calcularIMC(pacienteAtual.altura, pacienteAtual.peso);
    imcCalculado.textContent = imc;
  }
}

function calcularIMC(altura, peso){
  if (altura!==0) {
    var imc = parseFloat(peso) / parseFloat(parseFloat(altura) * parseFloat(altura));
    return imc;
  }else {
    console.log("Altura deve ser superior a 0!");
  }
}

var botao = document.getElementById('calcula-imcs');
botao.onclick = calcularTodosImc();
