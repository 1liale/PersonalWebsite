
// API source
var search_word = "ability";
const url = "https://us-central1-fir-practice-67869.cloudfunctions.net/app/api/generate-quote/";

// Generates a random quote from API
var quote_list = [];
var author_list = [];
function generateQuote() {
    // Fetches from API
    fetch(url + search_word)
        .then(res => res.json())
        .then((out) => {
            console.log("word:"+search_word);
            quote_list = [];
            author_list = [];
            for (let j = 0; j < 15; j++) {
                quote_list.push(out.quotes[j]);
                author_list.push(out.authors[j]);
            }
            document.getElementById("quote").innerHTML = out.quotes[0];
            document.querySelector("#author").innerHTML = "- " + out.authors[0];
            console.log("quote response received")
        })
        .catch(function (err) {
            console.log(err);
            document.getElementById("quote").innerHTML = "API is currently under maintenance, will be available soon!";
            document.querySelector("#author").innerHTML = "- Not available"
        });
}
generateQuote();

function displayRandomQuote() {
    if(search_option == "topic") {
        const i = Math.floor(Math.random() * 15);
        document.getElementById("quote").innerHTML = quote_list[i];
        document.querySelector("#author").innerHTML = "- " + author_list[i];
    } else if(search_option == "relevance") {
        document.getElementById("quote").innerHTML = quote_list[0];
        document.querySelector("#author").innerHTML = "- " + author_list[0];
    } else{
        console.log("Error, search_option failed!");
    }
}

// Generate quote at set intervals (I set to 10 seconds)
setInterval(displayRandomQuote, 10000);

