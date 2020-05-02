// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {



var passwordText = document.querySelector("#password");
var password = generate();

   passwordText.value = password;



 }
  


  


function generate(){
var password = "";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWZYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var num = "1234567890";
var special = "!@#$%^&*()_+";
var fullPass = "";


   var  lengthEl = parseInt(prompt("enter a length between 8 and 128"));
   console.log(lengthEl);
  if (isNaN(lengthEl)){
    alert("not a number");
    return "";
  }
     else if(lengthEl < 8){
    alert("must be greater than 8");
    return "";
  }else if (lengthEl > 128){
    alert("must be less than 128");
    return "";
  }
  if(confirm("uppercase?")){
  fullPass += upperCase;
  }
  
  if(confirm("lowercase?")){
    fullPass += lowerCase;
  }
  
  if(confirm("numbers?")){
    fullPass += num;
  }
  
  if(confirm("special?")){
    fullPass += special;
  }

  if(fullPass == ""){
    alert("need at least one type of character to generate a password")
    return "";
  }






    
    for(var i = 0; i < lengthEl; i++){
      var randIdx = Math.floor(Math.random()*fullPass.length);
      password += fullPass.charAt(randIdx);
     //password = password + values.writePassword(Math.floor(Math.random() * Math.floor(values.length - 1)))

    }
    return password;
  }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


