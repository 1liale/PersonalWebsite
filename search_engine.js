const fuzzy_url = "https://us-central1-fuzzysearch-46fc8.cloudfunctions.net/app/api/keyword-match/";
const custom_url = "https://customsearch.googleapis.com/customsearch/v1?cx=35ca492bccd258410&key=AIzaSyD-_xQ5-tmBRWZfNdHOyO7Nu4-GlaHW06k&q=";
var current_word = "";
var search_option = "topic";
var select_option = "topic";

// Fuzzy search string
function get_topic_search() {
    fetch(fuzzy_url + search_word)
    .then(res => res.json())
    .then((out) => {
        current_word = out[0].kw;
        console.log(current_word);
        document.getElementById("topic").innerHTML = ("Current topic: " + current_word).bold();
        search_word = current_word;
        generateQuote();
    })
    .catch(function (err) {
      alert("No matching result found, try another word or search by relevance");
      console.log(err);
    }) 
}

function get_relevance_search() {
  fetch(custom_url + search_word, {
    method: 'GET',
    mode: 'cors',
  })
    .then(res => res.json())
    .then((out) => {
        let str = out.items[0].link;
        let pos1 = str.search("quotes");
        let pos2 = str.search(".html");
        current_word = str.slice(pos1 + 7, pos2);
        console.log(current_word);
        document.getElementById("topic").innerHTML = ("Current topic: " + current_word).bold();
        search_word = current_word;
        generateQuote();
    })
    .catch(function (err) {
        console.log(err);
    }) 
}

document.getElementById("search").addEventListener("search", function(event) {
    search_word = this.value;
    this.value = "";
    search_option = select_option;
    if (select_option == "topic") {
      get_topic_search();
    } 
    else if (select_option == "relevance") {
      get_relevance_search();
    }
});

function makeVisible() {
    document.getElementById("dropbtn").style.display = "block";
}

const target1 = document.querySelector('#by-topic');
const target2 = document.querySelector('#by-relevance');
const target3 = document.querySelector('#dropbtn');
const target4 = document.getElementById("search");
var clicked = false;

document.addEventListener('click', (event) => {
    const withinBoundaries1 = event.composedPath().includes(target1);
    const withinBoundaries2 = event.composedPath().includes(target2);
    const withinBoundaries3 = event.composedPath().includes(target3);

  if (withinBoundaries1) {
    target4.focus();
    target4.placeholder = "Search by topic...";
    select_option = "topic";
    clicked = true;
  } 

  if (withinBoundaries3) {
    target4.focus();
  }

  if (withinBoundaries2) {
    target4.focus();
    target4.placeholder = "Search by relevance...";
    select_option = "relevance";
    clicked = true;
  } 

  if(!(withinBoundaries1 || withinBoundaries2 || withinBoundaries3) && !event.composedPath().includes(target4)) {
    document.getElementById("dropbtn").style.display="none";
    clicked = !clicked;
  }
})
