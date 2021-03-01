paths = [
    'image-deep-earth.jpg',
    'image-night-arcade.jpg',
    'image-soccer-team.jpg',
    'image-grid.jpg',
    'image-from-above.jpg',
    'image-pocket-borealis.jpg',
    'image-curiosity.jpg',
    'image-fisheye.jpg'
]


var folios = document.querySelectorAll('.folio_img');

for (i = 0; i < folios.length; i++) {
    folios[i].style.background = `linear-gradient( rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55) ), url('../img/desktop/` + paths[i] + `') no-repeat center center/cover`;

}

folios.forEach(folio => {
    var defBG = folio.style.background;
    var newBG = defBG.replace(`rgba(0, 0, 0, 0.55)`, `rgba(100, 100, 100, 0.6)`);
    var newBG = newBG.replace(`rgba(0, 0, 0, 0.55)`, `rgba(100, 100, 100, 0.6)`);
    console.log(newBG)
    var h4 = folio.querySelector('h4')
    folio.addEventListener('mouseenter', () => {
        folio.style.background = newBG;
        h4.style.color = 'black';
    })
    folio.addEventListener('mouseleave', () => {
        folio.style.background = defBG;
        h4.style.color = 'white';
    })
})