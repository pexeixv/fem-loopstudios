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

var device;
if (document.documentElement.clientWidth > 1000)
    device = 'desktop';
else device = 'mobile';


var folios = document.querySelectorAll('.folio_img');

for (i = 0; i < folios.length; i++) {
    folios[i].style.background = `linear-gradient( rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55) ), url('../img/` + device + `/` + paths[i] + `') no-repeat center center/cover`;

}

folios.forEach(folio => {
    var defBG = folio.style.background;
    var newBG = defBG.replace(`rgba(0, 0, 0, 0.55)`, `rgba(100, 100, 100, 0.6)`);
    var newBG = newBG.replace(`rgba(0, 0, 0, 0.55)`, `rgba(100, 100, 100, 0.6)`);
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


if (device == 'mobile') {
    details = document.querySelector('.details_title');
    detailsTitle = details.innerHTML;
    detailsTitle = detailsTitle.replace('<br>', '');
    details.innerHTML = detailsTitle;
}



bars = document.querySelector('.bars');
nav = document.querySelector('.main_nav');
bars.addEventListener('click', () => {
    nav.classList.toggle('show');
})