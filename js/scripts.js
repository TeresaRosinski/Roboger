//Business Logic
function getNumbersToInput(number){
  let orderedNumberArray = [];  // function to create array of numbers from 0 - user input
  for (let i = 0; i<= number; i++)
  orderedNumberArray.push(i);
  console.log(orderedNumberArray);
  return orderedNumberArray;
};
function NumberTranslator (number) {
  let displayedOutput= " ";
  let orderedNumberArray = []; //to get all the numbers from 0 to inputted number
  const textAndNumberArray = []; // final array  with all ints + words from 0 to user number
  function getNumbersToInput(number){
    let orderedNumberArray = [];  // function to create array of numbers from 0 - user input
    for (let i = 0; i<= number.length; i++)
    orderedNumberArray.push(i);
  };
  /*
  const output = numberArray.map(number=>{ //
    ApplyRules(number)
  });
  
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
    } else return digit;
    
  };
  */
};

//UI Logic
$(document).ready(function(){
  $("#inputNumberForm").submit(function(event){
    const numberInput =$("input#number").val();
    const uIResultsToShow = getNumbersToInput(numberInput);

  $("#results").show();
  $(".yourNumber").empty().append(uIResultsToShow);
  event.preventDefault();
  });
});


//Old Code that may be useful
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