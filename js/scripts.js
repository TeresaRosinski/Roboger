//Business Logic
 
function NumberTranslator (number) {
  let orderedNumberArray = createOrderedNumberArray(number); //to get all the numbers from 0 to inputted number
  let outputArray= createOutputArray(orderedNumberArray);
  return outputArray; 

  function createOrderedNumberArray(number){
    let orderedNumberArray = [];  // function to create array of numbers from 0 - user input
    for (let i = 0; i<= number; i++)
    orderedNumberArray.push(i);
    return orderedNumberArray;
  };

  function createOutputArray(orderedNumberArray) {
    let outputArray = [];
    for (let i = 0; i <= orderedNumberArray.length; i++) {
      if((orderedNumberArray[i]+ " ").includes("3")){
      outputArray.push("Won't you be my neighbor");
      }
      else if((orderedNumberArray[i] + " ").includes("2")){
      outputArray.push("Beep!");
      }
      else if((orderedNumberArray[i] + " ").includes("1")){
      outputArray.push("Boop!");
      } else {
      outputArray.push(i);
      }
      console.log(outputArray);
    }
    return outputArray;
  };

};

console.log(NumberTranslator(5));

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


