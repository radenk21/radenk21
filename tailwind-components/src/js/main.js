var clicked = false;
function toggleMenu() {
    clicked = !clicked;
    const toogleMenu = document.getElementById('toggle-menu');
    const menu = document.getElementById('hidden-menu');
    console.log(clicked);
    if (clicked) {
        toogleMenu.classList.remove('hidden')
        menu.classList.remove('slide-out-top')
        menu.classList.add('slide-in-top')
    } else {
        menu.classList.remove('slide-in-top')
        menu.classList.add('slide-out-top')
        setTimeout(function() {
            toogleMenu.classList.add('hidden')
        }, 300);
    }
}

