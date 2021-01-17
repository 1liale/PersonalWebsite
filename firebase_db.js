(function() {
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var firebaseConfig = {
        apiKey: "AIzaSyAkoqxL9mHzfU_C2svNCjN_BSisnHBJy9U",
        authDomain: "fir-practice-67869.firebaseapp.com",
        databaseURL: "https://fir-practice-67869-default-rtdb.firebaseio.com",
        projectId: "fir-practice-67869",
        storageBucket: "fir-practice-67869.appspot.com",
        messagingSenderId: "599690870992",
        appId: "1:599690870992:web:6a377521e6f2c4e02c9ed5",
        measurementId: "G-T534RVFLC5"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    // alert("firebase initialized");

    const database = firebase.database();
    var id = 0;
    var totalIntro = 0, totalAbout = 0, totalExp = 0, totalProject = 0, 
    totalQuote = 0, totalTime = 0;

    const dbRefObject = database.ref().child('users');
    var query = dbRefObject.orderByKey();

    query.once("value").then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {

            id = parseInt(childSnapshot.key) + 1;
            childSnapshot.forEach(function(child)
            {    
                if(child.key == 'intro') {
                    totalIntro += parseFloat(child.val());
                }
                else if(child.key == 'about') {
                    // console.log("about detected");
                    totalAbout += parseFloat(child.val());
                }
                else if(child.key == 'experience') {
                    totalExp += parseFloat(child.val());
                }
                else if(child.key == 'project') {
                    totalProject += parseFloat(child.val());
                }
                else if(child.key == 'quotes') {
                    totalQuote += parseFloat(child.val());
                }
                else if(child.key == 'total') {
                    totalTime += parseFloat(child.val());
                }
            })  
        });
    });

    var timeSpentOnPage, introTime, aboutTime, expTime, galleryTime, quoteTime;
    var percentIntro = 1, percentAbout = 1, percentExp = 1, percentGallery = 1, percentQuote = 1;
    var percentIntro2 = 1, percentAbout2 = 1, percentExp2 = 1, percentGallery2 = 1, percentQuote2 = 1;

    TimeMe.initialize({currentPageName: "my-home-page", 
    idleTimeoutInSeconds: 60,
    });

    window.onload = function() {
        TimeMe.trackTimeOnElement('intro');
        TimeMe.trackTimeOnElement('about');
        TimeMe.trackTimeOnElement('coding-exp');
        TimeMe.trackTimeOnElement('gallery');
        TimeMe.trackTimeOnElement('inspiring-quote');

        setInterval(function() {

            timeSpentOnPage = parseFloat(TimeMe.getTimeOnCurrentPageInSeconds());
            introTime = parseFloat(TimeMe.getTimeOnElementInSeconds('intro'));
            aboutTime = parseFloat(TimeMe.getTimeOnElementInSeconds('about'));
            expTime = parseFloat(TimeMe.getTimeOnElementInSeconds('coding-exp'));
            galleryTime = parseFloat(TimeMe.getTimeOnElementInSeconds('gallery'));
            quoteTime = parseFloat(TimeMe.getTimeOnElementInSeconds('inspiring-quote'));
            let subTotal = introTime + aboutTime + expTime + galleryTime + quoteTime;
            let avgSubTotal = totalIntro + totalAbout + totalExp + totalQuote +totalProject; 

            if (timeSpentOnPage != 0) {
                percentIntro = Math.round (10 * introTime / subTotal);
                percentAbout = Math.round (10 * aboutTime / subTotal);
                percentExp = Math.round (10 * expTime / subTotal);
                percentGallery = Math.round (10 * galleryTime / subTotal);
                percentQuote = Math.round (10 * quoteTime / subTotal);

                percentIntro2 = Math.round (10 * totalIntro / avgSubTotal);
                percentAbout2 = Math.round (10 * totalAbout / avgSubTotal);
                percentExp2 = Math.round (10 * totalExp / avgSubTotal);
                percentGallery2 = Math.round (10 * totalProject / avgSubTotal);
                percentQuote2 = Math.round (10 * totalQuote / avgSubTotal);
            }
        }, 25);;

        setInterval(function(){
            loadAvgChart(percentIntro2, percentAbout2, percentExp2, percentGallery2, percentQuote2);
            loadChart(percentIntro, percentAbout, percentExp, percentGallery, percentQuote);
        }, 2000);
    };

    window.addEventListener('beforeunload', function (e) {
        firebase.database().ref('/users/'+id).set({
            intro: introTime,
            about: aboutTime,
            experience: expTime,
            project: galleryTime,
            quotes: quoteTime,
            total: timeSpentOnPage,
        });
        
        // Cancel the event
        e.preventDefault(); // If you prevent default behavior in Mozilla Firefox prompt will always be shown
        // Chrome requires returnValue to be set
        e.returnValue = 'quit';
    });


}());


