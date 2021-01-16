var curItem = '';

function loadModal(i) {
    var itemsList1 = ['cell1','cell2','cell3','cell4','cell5'];
    var itemsList2 = ['#gallery-pop1','#gallery-pop2','#gallery-pop3','#gallery-pop4','#gallery-pop5'];

    document.getElementById(itemsList1[i]).addEventListener("click",
            function()
            {
                document.querySelector('.bg-modal').style.display = 'flex';
                document.querySelector(itemsList2[i]).style.visibility = 'visible';
                curItem = itemsList2[i];
            });
}

function loadGallery(size){

    for (var i = 0; i < size; i++)
    {
        loadModal(i);
    }

    document.querySelector('.close').addEventListener("click", 
    function() {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector(curItem).style.visibility = 'hidden';
        curItem = '';
    });
}