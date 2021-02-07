document.getElementById("search").addEventListener("search", function(event) {
    search_word = this.value.toLowerCase();
    document.getElementById("topic").innerHTML = ("Current topic: " + search_word).bold();
    this.value = "";
    generateQuote();
});