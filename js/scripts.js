//Business Logic
function NumberTranslator (number) {
  let displayedOutput= " ";
  /*const userNumberArray = number.split('');
  console.log(userNumberArray);
  if (number === NaN || number < 0) {
    displayedOutput+= "Please input a whole number greater than 0";
  }
  userNumber.forEach(function(numeral){
    if(numeral === 3){
      displayedOutput = displayedOutput.concat("Won't you be my neighbor");
      displayedOutput; 
    } else  if (numeral === 2){
      displayedOutput = displayedOutput.concat("Boop!");
      return displayedOutput;
    }else if (numeral === 1) {
      displayedOutput = displayedOutput.concat("Beep!");
      return displayedOutput;
    }
  });
  */
  
  for (const digit of number){
    debugger;
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
  };
};

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