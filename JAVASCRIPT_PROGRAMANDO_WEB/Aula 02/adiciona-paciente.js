var botao = document.querySelector('#adicionar-paciente');
botao.addEventListener('click', function(event){
  event.preventDefault();

  var nome = document.querySelector('#campo-nome');
  var peso = document.querySelector('#campo-peso');
  var altura = document.querySelector('#campo-altura');


  var pacienteNovo = "	<tr class='paciente'>"+
  "<td class='info-nome'>"+nome.value+"</td>"+
  "<td class='info-peso'>"+peso.value+"</td>"+
  "<td class='info-altura'>"+altura.value+"</td>"+
  "<td class='info-imc'></td>"+
  "</tr>";

  var tabela = document.querySelector('table');
  tabela.innerHTML = tabela.innerHTML + pacienteNovo;

  nome.value = "";
  peso.value = "";
  altura.value = "";
});
