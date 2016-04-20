
//create button
var button = document.getElementById("growYourTree");
//create user spec object so it can be used in all the functions.
var treeSpecs = {
  height:  "",
  character:  ""
}
var stackofTree = [];


//EVENT HANDLER//
//
var runTreeGrower = function() {
//this part gets the keys from the dom. Inside the function so it will get the user's input and not a blank.
  treeSpecs.height = parseInt(document.getElementById("treeHeight").value), 
  treeSpecs.character = document.getElementById("treeCharacter").value

  console.log("making sure button works", treeSpecs.height, treeSpecs.character);

 //after key getting, this function runs to make sure the keys aren't blank.
  runIfPopulated();
}

 //this function prevents the tree creator from running unless  both fields are populated.
 var runIfPopulated = function() {
  if (treeSpecs.height == "" || treeSpecs.character == "") {
    alert("Both fields must have a value.")
  } else {
  
    console.log("making sure button works INSIDE IF STATEMENT", treeSpecs.height, treeSpecs.character);

    //treemaker function.
    letsMakeSomeTrees();

  }
}

//ok I need to make two nested for loops

var letsMakeSomeTrees = function() {
  
  for (var i = 1; i < treeSpecs.height; i++) {
    var output = [];
    output.unshift(" ".repeat(treeSpecs.height-i)); 
    output.push(treeSpecs.character.repeat(i+(i-1)));
    output = output.join("")
    console.log(output);
  }
}
//still need to make the event listener that makes "enter" work. again.

//submit button listener   
button.addEventListener("click", runTreeGrower);

