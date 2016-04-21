
//create button
var button = document.getElementById("growYourTree");
//create user spec object so it can be used in all the functions.
var treeSpecs = {
  height:  "",
  character:  ""
}


var runTreeGrower = function() {
//this part gets the keys from the dom. Entirely inside the function so it will get the user's input and not a blank.
  treeSpecs.height = parseInt(document.getElementById("treeHeight").value), 
  treeSpecs.character = document.getElementById("treeCharacter").value

  runIfPopulated();
}

 //this function prevents the tree creator from running unless both fields are populated.
 var runIfPopulated = function() {
  
  if (treeSpecs.height == "" || treeSpecs.character == "") {
    alert("Both fields must have a value.")
    //add a focus thingie here?
  } else {
  
    letsMakeATree();
  }
}

//prints the tree into the console based on the determined correct user input.
var letsMakeATree = function() {
  
  for (var i = 1; i < treeSpecs.height + 1; i++) {
    var output = []; //remake this variable each time you loop, otherwise you make a parabola
    //note: moved these three 'output' variable editors in a tab, but not sure if that's what needed to happen.
      output.unshift(" ".repeat(treeSpecs.height-i)); 
      output.push(treeSpecs.character.repeat(i+(i-1)));
      output = output.join("")//converts entire array into a string and makes the separator nothing.
    console.log(output);
  }
}
//event listener that makes "enter" work

var enterKeyListener = function(event){
  if(event.keyCode == 13) {
  button.click();
  }
}

document.getElementById("treeHeight").onkeydown = enterKeyListener; //calling function, but no () due to syntax.
document.getElementById("treeCharacter").onkeydown = enterKeyListener;

//submit button listener   
button.addEventListener("click", runTreeGrower);

