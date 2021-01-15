function loadGallery(){
    var curItem = '';
    var itemsList1 = ['cell1','cell2','cell3','cell4','cell5'];
    var itemsList2 = ['#gallery-pop1','#gallery-pop2','#gallery-pop3','#gallery-pop4','#gallery-pop5'];

    document.getElementById(itemsList1[0]).addEventListener("click",
        function()
        {
            document.querySelector('.bg-modal').style.display = 'flex';
            document.querySelector(itemsList2[0]).style.visibility = 'visible';
            curItem = itemsList2[0];
        });

    document.getElementById(itemsList1[1]).addEventListener("click",
        function()
        {
            document.querySelector('.bg-modal').style.display = 'flex';
            document.querySelector(itemsList2[1]).style.visibility = 'visible';
            curItem = itemsList2[1];
        });


    document.getElementById(itemsList1[2]).addEventListener("click",
        function()
        {
            document.querySelector('.bg-modal').style.display = 'flex';
            document.querySelector(itemsList2[2]).style.visibility = 'visible';
            curItem = itemsList2[2];
        });

    document.getElementById(itemsList1[3]).addEventListener("click",
        function()
        {
            document.querySelector('.bg-modal').style.display = 'flex';
            document.querySelector(itemsList2[3]).style.visibility = 'visible';
            curItem = itemsList2[3];
        });

    document.getElementById(itemsList1[4]).addEventListener("click",
        function()
        {
            document.querySelector('.bg-modal').style.display = 'flex';
            document.querySelector(itemsList2[4]).style.visibility = 'visible';
            curItem = itemsList2[4];
        });

    document.querySelector('.close').addEventListener("click", 
    function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector(curItem).style.visibility = 'hidden';
        curItem = '';
    });
}