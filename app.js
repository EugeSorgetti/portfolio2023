let btn = document.getElementById('burger');
let nav = document.getElementById('nav');
let main = document.querySelector('main');

btn.addEventListener('click', toggleClass);
nav.addEventListener('click', toggleClass);

function toggleClass () {
    btn.classList.toggle('fa-xmark');
    nav.classList.toggle('active');
    main.classList.toggle('darken');
}

var paths = document.querySelectorAll('svg path'), i = 0;

paths.forEach(function(item, index){

    i++;

    var pathLength = item.getTotalLength();

    item.setAttribute("stroke-dasharray", pathLength);
    item.setAttribute("stroke-dashoffset", pathLength);

    item.innerHTML = "<animate attributeName='stroke-dashoffset' begin='0s' dur='1s' to='0' fill='freeze' />";
    console.log(index, pathLength);
})