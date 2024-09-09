var textoDisplay = "";
var valor1 = 0;
var operador ="";

$(document).on("click",".botao",function(){
    textoDisplay += $(this).val();
    $(".display").val(textoDisplay);
})

$(document).on("click",".opera", function(){
    operador = $(this).html();
    valor1 = textoDisplay;
    textoDisplay ="";
    $(".display").val("");
})

$(document).on("click","#igual",function(){
var valor2 = textoDisplay;
textoDisplay = "";
$(".display").val("");

if (operador == "-"){
    textoDisplay = parseFloat(valor1)-parseFloat(valor2)
  }
  if (operador == "+"){
    textoDisplay = parseFloat(valor1)+parseFloat(valor2)
  }
if (operador == "x"){
    textoDisplay = parseFloat(valor1)*parseFloat(valor2)
  }
if (operador == "/"){
    textoDisplay = parseFloat(valor1)/parseFloat(valor2)
  }
    $(".display").val(textoDisplay);
})