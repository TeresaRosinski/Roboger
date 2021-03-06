//Business Logic
 
function NumberTranslator (number) {
  let orderedNumberArray = createOrderedNumberArray(number); //to get all the numbers from 0 to inputted number
  let outputArray= createOutputArray(orderedNumberArray);
  return outputArray; 

  function createOrderedNumberArray(number){
    let orderedNumberArray = [];  // function to create array of numbers from 0 - user input
    for (let i = 0; i<=number; i++)
    orderedNumberArray.push(i);
    return orderedNumberArray;
  };

  function createOutputArray(orderedNumberArray) {
    let outputArray = [0];
    for (let i = 1; i <orderedNumberArray.length; i++) {
      if((orderedNumberArray[i]+ " ").includes("3")){
        outputArray.push(", Won't you be my neighbor?");
      }
      else if((orderedNumberArray[i] + " ").includes("2")){
        outputArray.push(", Boop!");
      }
      else if((orderedNumberArray[i] + " ").includes("1")){
        outputArray.push(", Beep!");
      } else {
        outputArray.push(", "  + orderedNumberArray[i] );
      }
    }
    return outputArray;
  };
};

//UI Logic

$(document).ready(function(){
  $("button#show").click(function(){
    $("body").remove("hero-image");
    $("body").addClass("background2");
    $("#hiddenForm").slideToggle(1000);
  });
  $("#inputNumberForm").submit(function(event){
    const numberInput =$("input#number").val();
    const uIResultsToShow = NumberTranslator(numberInput);

  $("#results").show();
  $(".yourNumber").empty().append(uIResultsToShow);
  event.preventDefault();
  });
});


