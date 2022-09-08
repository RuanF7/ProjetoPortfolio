const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

 const countElement = 
document.getElementById('count');

update();

function update() {
    fetch('https://api.countapi.xyz/create?namespace=ruanf7.github.io&value=1').then((res) => 
    res.json()).then((res) => {
        countElement.innerHTML = 
    res.value;
    });
}