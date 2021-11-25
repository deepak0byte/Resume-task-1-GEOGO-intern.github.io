let button = document.getElementById('btn');
button.addEventListener('click', download);

function download() {
    let container = document.getElementsByClassName('container');
    button.style.display = 'none';
    print();
    button.style.display = '';
}