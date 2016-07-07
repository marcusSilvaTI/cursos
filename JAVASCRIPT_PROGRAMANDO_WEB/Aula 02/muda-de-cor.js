var trs = document.getElementsByTagName("tr");
calcularTodosImc(trs, function(tr){
  tr.addEventListener("mouseover", function(){
    this.setAttribute("bgcolor", "grey");
  })
})
