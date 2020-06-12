//Business Logic
function NumberTranslator (number) {
  let displayedOutput= " ";
  if (number === NaN || number < 0) {
    displayedOutput+= "Please input a whole number greater than 0";
  } 
  for (const digit of number){
    if (digit === "3"){
      displayedOutput = displayedOutput.concat("Won't you be my neighbor");
      return displayedOutput; 
    } else  if (digit === "2"){
      displayedOutput = displayedOutput.concat("Boop!");
      return displayedOutput;
    }else if (digit === "1") {
      displayedOutput = displayedOutput.concat("Beep!");
      return displayedOutput;
    }
  }
}

//UI Logic
$(document).ready(function(){
  $("#inputNumberForm").submit(function(event){
    const numberInput =$("input#number").val();
    const uIResultsToShow = NumberTranslator(numberInput);

  $("#results").show();
  $(".yourNumber").empty().append(uIResultsToShow);
  event.preventDefault();
  });
});