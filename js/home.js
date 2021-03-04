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

if (device == 'mobile') {
    details = document.querySelector('.details_title');
    detailsTitle = details.innerHTML;
    detailsTitle = detailsTitle.replace('<br>', '');
    details.innerHTML = detailsTitle;
}



bars = document.querySelector('.bars');
nav = document.querySelector('.main_nav');
bars.addEventListener('click', () => {
    if (nav.classList.toggle('show'))
        bars.src = '../img/icon-close.svg';
    else bars.src = '../img/icon-hamburger.svg';
})