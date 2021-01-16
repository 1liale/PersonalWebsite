/*
* Purpose: For testing and learning api (not my code)
* Credited to: Asaolu Elijah 
* link at: https://dev.to/asaoluelijah/understanding-fetch-2-building-a-random-quote-generator-app-25nj
* Note: I am currently learning to make my own web api in .Net
*/

// API source
const url = "https://api.quotable.io/random"

// Generates a random quote from API
function generateQuote() {
    // Fetches from API
    fetch(url)
    .then(function(data){
        // Retrieves data from the Json file
        return data.json();
    })
    // retrieves content and writes to html
    .then(function(data) {
        document.getElementById("quote").innerHTML = data.content;
        document.querySelector("#author").innerHTML = "- " + data.author;
    })
    .catch(function(err) {
        console.log(err);
    });
    
}

generateQuote();

// Generate quote at set intervals (10 seconds)
setInterval(generateQuote, 7000);

