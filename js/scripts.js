//Business Logic

function NumberTranslator (number) {
  let orderedNumberArray = createOrderedNumberArray(number); //to get all the numbers from 0 to inputted number
  let outputArray= createOutputArray(orderedNumberArray);
  //const textAndNumberArray = []; // final array  with all ints + words from 0 to user number
  
  function createOrderedNumberArray(number){
    let orderedNumberArray = [];  // function to create array of numbers from 0 - user input
    for (let i = 0; i<= number; i++)
    orderedNumberArray.push(i);
    return orderedNumberArray;
  };
  debugger;

  function createOutputArray (orderedNumberArray) {
    let outputArray = [];
      orderedNumberArray.forEach(function(element){
        for (const digit of element){ 
          if (digit === "3"){
            return "Won't you be my neighbor";
          } else  if (digit === "2"){
            return "Boop!";
          }else if (digit === "1") {
            return "Beep!"
          } else return digit;
      };
      });

  };
  /*
  outputArray = orderedNumberArray.map(function(element){ 
    for (const digit of element){ 
      if (digit === "3"){
        return "Won't you be my neighbor";
      } else  if (digit === "2"){
        return "Boop!";
      }else if (digit === "1") {
        return "Beep!"
      } else return digit;
  };
  */

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


