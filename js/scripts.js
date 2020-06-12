//Business Logic
function NumberTranslator (number) {
  if (number === NaN || number < 0) {
    alert ("Please input a whole number greater than 0")
    
  }


}

//UI Logic
$(document).ready(function(){
  $("#inputNumberForm").submit(function(event){
    const numberInput =$("input#number").val();
    const results = NumberTranslator(numberInput);

  $("#results").show();
  $(".yourNumber").empty().append(numberInput);
  event.preventDefault();
  });
});