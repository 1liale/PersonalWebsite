
// API source
// const url = "https://api.quotable.io/random" 
const url = "https://us-central1-fir-practice-67869.cloudfunctions.net/app/api/generate-quote"
// Generates a random quote from API
function generateQuote() {
    // Fetches from API
    fetch(url)
    .then(res => res.json())
    .then((out) => {
        document.getElementById("quote").innerHTML = out[0].quote;
        document.querySelector("#author").innerHTML = "- " + out[0].author;
    })
    .catch(function(err) {
        console.log(err);
        document.getElementById("quote").innerHTML = "Sorry Api.quotable.io is currently down, server not responding";
    });
    
}

generateQuote();

// Generate quote at set intervals (I set to 7 seconds)
setInterval(generateQuote, 7000);

