// Assignment Code
//Declaring Array variables for Special charaters, Uppercase letters, lowercase letters & numbers
var specialCharactersArray=['\\','!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}','~',']'];
var lowerCaseLettersArray=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseLettersArray=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbersArray=['0','1','2','3','4','5','6','7','8','9'];
//declaring variable to hold the length of password entered by the user.
var passwordLength;
//declaring variable that holds random password based on user-selected criteria
var possiblePassword;

var generateBtn = document.querySelector("#generate");

//function generatePassword() is defined that will prompt user to enter the length of password needed !
function generatePassword(){
     passwordLength=0;
     var randomPassword="";

    passwordLength=window.prompt("How many charcters long would you like your password to be?\nPassword length must be 8 to 128 characters long!");
    //If the user has entered any input then execute the code within If ! else exit if clicked Cancel !
    if(passwordLength)
    {
        //check if the length entered by the user is valid else prompt the user to re enter the length!
        if(passwordLength >=8 && passwordLength <=128)
        {
            // invokes the passwordPrompts() function and assigns the return value to variabe ramdomPassword !
            randomPassword=passwordPrompts();
        }else{
            window.alert("Invalid Password length !\nPassword length must be 8 to 128 characters long!");
            generatePassword();
        }
        //return the ramdomPassword generated!!
        return randomPassword;
    }
    else{
        window.alert("Thank You !");
        return randomPassword;
    }
}
//function passwordPrompt() is defined that will ask the user to select few criteria to generate random password !
function passwordPrompts(){

    var randomArray=[];
    var criteriaConfirm="";
    possiblePassword="";
    var wantLower=confirm("Do you want LowerCase Letters in your password");
    if(wantLower)
    {
        randomArray=randomArray.concat(lowerCaseLettersArray);
    }
    var wantUpper=confirm("Do you want Uppercase Letters in your password");
    if(wantUpper)
    {
        randomArray=randomArray.concat(upperCaseLettersArray);
    }
    var wantNumbers=confirm("Do you want numbers in your password");
    if(wantNumbers)
    {
        randomArray=randomArray.concat(numbersArray);
    }
    var wantSpecialCharacters=confirm("Do you want special Characters in your password");
    if(wantSpecialCharacters)
    {
        randomArray=randomArray.concat(specialCharactersArray);
    }
    if(randomArray.length> 0 ){
        for(var i=0;i<passwordLength;i++){
            var randomIndex=Math.floor(Math.random()*randomArray.length);
            var randomLetter=randomArray[randomIndex];
            possiblePassword+=randomLetter;
        }
    }else{
        criteriaConfirm=window.confirm("At least one character type should be selected!\nPlease click 'OK' to Re-Select the Options.\nClick 'CANCEL' to exit !");
        if(criteriaConfirm){
            passwordPrompts();
        }
        else{
            window.alert("Thank You!");
            possiblePassword="";
        }
    }
    return possiblePassword;
}
// Write password to the #password input
//function writePassword() is defined to invoke the generatePassword() function and update the generated password on to the screen !
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);