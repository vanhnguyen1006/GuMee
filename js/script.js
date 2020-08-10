function view(divId) {
    divs = document.querySelectorAll('.drop-menu');
    for (var i = 0; i < divs.length; ++i) {
        if (divs[i].id == divId) {
            if (divs[i].style.display == 'block') {
                divs[i].style.display = 'none';
            }
            else {
                divs[i].style.display = 'block';
            }
        }
        else {
            divs[i].style.display = 'none';
        }
    }
}
