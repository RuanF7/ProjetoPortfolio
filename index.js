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

 
function updateCounter() {
   
    fetch('https://api.countapi.xyz/update/ruanf7.github.io/github/?amount=1')
        .then(res =>  res.json())
        .then(data => counterElement.innerHTML = data.value)
        }

updateCounter()

counterElement = document.getElementsByClassName('count')[0]


