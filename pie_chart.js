var percentIntro1 = 0, percentAbout1 = 0, percentExp1 = 0, percentGallery1 = 0, percentQuote1 = 0;
var percentIntro2 = 0, percentAbout2 = 0, percentExp2 = 0, percentGallery2 = 0, percentQuote2 = 0;

function loadChart(intro, about, exp, gallery, quote)
{
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    percentIntro1 = intro;
    percentAbout1 = about;
    percentGallery1 = gallery;
    percentExp1 = exp;
    percentQuote1 = quote;
    drawChart();
}

function drawChart() { 

    let data = google.visualization.arrayToDataTable([
        ['Task', 'Time Per Section'],
        ['Intro', percentIntro1],
        ['About', percentAbout1],
        ['Experience', percentExp1],
        ['Projects', percentGallery1],
        ['Quotes', percentQuote1],
    ]);
    let options = {'title':'Your Time per Section %', 'width':600, 'height':400};
    
    let chart = new google.visualization.PieChart(document.getElementById('piechart1'));
    chart.draw(data, options);
}

function loadAvgChart(intro, about, exp, gallery, quote)
{
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawAvgChart);
    percentIntro2 = intro;
    percentAbout2 = about;
    percentGallery2 = gallery;
    percentExp2 = exp;
    percentQuote2 = quote;
    drawAvgChart();
}

function drawAvgChart()
{
    let data = google.visualization.arrayToDataTable([
        ['Task', 'Time Per Section'],
        ['Intro', percentIntro2],
        ['About', percentAbout2],
        ['Experience', percentExp2],
        ['Projects', percentGallery2],
        ['Quotes', percentQuote2],
    ]);
    var options = {'title':'Avg Time per Section %', 'width':600, 'height':400};
    
    let chart = new google.visualization.PieChart(document.getElementById('piechart2'));
    chart.draw(data, options);   
}

// function resize () {
//     // change dimensions if necessary
//     chart.draw(data, options);
// }
// if (window.addEventListener) {
//     window.addEventListener('resize', resize);
// }
// else {
//     window.attachEvent('onresize', resize);
// }





