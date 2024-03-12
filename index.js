// function that generates random number
function generateRandomNumber() {
    var firstName = document.getElementById("firstName").value;
    var secondName = document.getElementById("secondName").value;
    
    // If one name is missing, ask the user to enter both names.
    if (firstName.trim() === "" || secondName.trim() === "") {
        alert("Please enter both names.");
        return;
    }

    var randomNumber = Math.floor(Math.random() * 100) + 1;

    // Result of the function - generateRandomNumber
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Calculation complete: " + randomNumber + "%";

    // Condition, to display different message depending on percentage that user gets
    if ( randomNumber <= 20 ) {
        var resultElement = document.getElementById("message");
        resultElement.innerHTML = "Horrible! Get out of there";
        }
        else if ( randomNumber > 20 && randomNumber <= 49 ){
            var resultElement = document.getElementById("message");
            resultElement.innerHTML = "You shouldn't go on a date!";
        }
        else if ( randomNumber > 49 && randomNumber <= 69 ){
            var resultElement = document.getElementById("message");
            resultElement.innerHTML = "NICE, TRY THAT";
        }
        else if ( randomNumber > 69 && randomNumber <= 100 ){
            var resultElement = document.getElementById("message");
            resultElement.innerHTML = "Proposal? When?";
        }
}