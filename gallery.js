/*
* Author: Alex Li
* Created On: January 9, 2021
* Purpose: Manages 
*/

var curItem = '';

function loadModal(i) {
    document.getElementById('cell'+i).addEventListener("click",
        function()
        {
            document.querySelector('.bg-modal').style.display = 'flex';
            document.querySelector('#gallery-pop'+i).style.visibility = 'visible';
            curItem = '#gallery-pop'+i;
        });
}

function loadGallery(size){

    for (var i = 1; i < size + 1; i++)
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