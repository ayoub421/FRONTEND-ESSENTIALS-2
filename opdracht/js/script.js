strAlfabet = "_ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var strInput = "";          //input string
var strCodeword = "";       //codeword string
var strCodewordFull = "";   //output string

arrInputPosities = [];      //array van input posities
arrCodewordPosities = [];   //array van codeword posities
arrOutputPosities = [];     //array van output posities

//Zet een string om naar een array met posities
function stringNaarPosities(str){
    outputArray = [];
    for (let i = 0; i < str.length; i++){
        for (let j = 0; j < strAlfabet.length; j++) {
            if(str[i].toUpperCase() == strAlfabet[j]){
                outputArray.push(j);
                // console.log("Letter: " + i + " = " + str[i] + " -> positie in alfabet = " + j);
            }
        }
    }
    console.log("berekende posities: " + outputArray.toString())
    return outputArray;
}

//Zet een array met posities om naar een string
function positiesNaarString(arr){
    var outputString = "";
    //TODO: opdracht 1
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < strAlfabet.length; j++) {
            if (arr[i] == j){ 
                outputString = outputString + strAlfabet[j];
            }
            
        }
        
    }

    return outputString;
}

//Geeft een array terug waarbij het codeword herhaald wordt totdat de lengte overeenkomt met het te versleutelen bericht
//Dus als het bericht STUDENT (7 letters) is en het codeword KLAS dan krijg je KLASKLA (7 letters) terug van deze functie.
function vermenigvuldigCodeword(strInput, strCodeword){
    var outputString = "";
    
    var inputLength = strInput.length;
    var codewordLength = strCodeword.length;

    var intDiv = Math.floor(inputLength / codewordLength); //het aantal keer dat het codeword in zijn geheel in het bericht past
    var intMod = inputLength % codewordLength; //het aantal letters dat overblijft die nog moeten worden aangevuld

    for (let i = 0; i < intDiv; i++) {
        outputString=outputString+strCodeword;
    }
    for (let i = 0; i < intMod; i++) {
        outputString=outputString+strCodeword[i];
    }

    //TODO: opdracht 2
   // console.log(inputLength + " " + codewordLength );
    console.log("Codeword full: " + outputString);
   // console.log(intDiv + " " + intMod);
    return outputString;
}

//functie die een een bericht versleuteld.
function versleutel(){
    strInput = document.querySelector("#input").value; 
    strCodeword = document.querySelector("#codeword").value;   

    console.log("input: " + strInput);
    console.log("codeword: " + strCodeword);

    strCodewordFull = vermenigvuldigCodeword(strInput, strCodeword);
    arrCodewordPosities = stringNaarPosities(strCodewordFull);//codeword
    arrInputPosities = stringNaarPosities(strInput);//input

    //console.log(arrCodewordPosities + "         " +arrInputPosities);

    outputArray = [];
    for (let i = 0; i < arrInputPosities.length; i++) {
        if(arrInputPosities[i] + arrCodewordPosities[i] > 26){
            outputArray.push((arrInputPosities[i] + arrCodewordPosities[i])-26);
        }
        else{ 
            outputArray.push(arrInputPosities[i] + arrCodewordPosities[i]);
        }
        console.log(outputArray);
        document.querySelector("#output").value=positiesNaarString(outputArray);
    }

    console.log(outputArray);
    console.log("versleuteld bericht: " + positiesNaarString(outputArray));
    document.querySelector("#output").value = positiesNaarString(outputArray);
    strCodewordFull = [];
}

function ontsleutel(){
    //TODO: opdracht 3
        strInput = document.querySelector("#input").value; 
        strCodeword = document.querySelector("#codeword").value;   
    
        console.log("input: " + strInput);
        console.log("codeword: " + strCodeword);
    
        strCodewordFull = vermenigvuldigCodeword(strInput, strCodeword);
        arrCodewordPosities = stringNaarPosities(strCodewordFull);//codeword
        arrInputPosities = stringNaarPosities(strInput);//input

    outputArray = [];
    for (let i = 0; i < arrInputPosities.length; i++) {
        if(arrInputPosities[i] - arrCodewordPosities[i] < 0){
            outputArray.push((arrInputPosities[i] - arrCodewordPosities[i])+26);
        }
        else{ 
            outputArray.push(arrInputPosities[i] - arrCodewordPosities[i]);
        }
        document.querySelector("#output").value=positiesNaarString(outputArray);
    }
} 