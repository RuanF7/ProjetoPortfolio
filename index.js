const navToggle = document.querySelector('.nav-toggle')
const navLinks = document.querySelectorAll('.nav-link')

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open')
})

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open')
  })
})

const counterElement = document.querySelector('.count')

async function updateCounter() {
  try {
    const response = await fetch('https://api.github.com/repos/RuanF7/RuanF7.github.io')
    const repoData = await response.json()
    document.querySelector('.count').textContent = repoData.stargazers_count || 0
  } catch (error) {
    console.log("Using simple counter")
    let count = localStorage.getItem('pageViews') || 0
    count = parseInt(count) + 1
    localStorage.setItem('pageViews', count)
    document.querySelector('.count').textContent = count
  }
}

function createTechCarousel() {
  const techGroups = [
    {
      title: "Frontend",
      icons: [
        "html.png",
        "css-3.png", 
        "icons8-javascript-48.png",
        "icons8-typescript-48.png",
        "react.png",
        "icons8-nextjs-48.png",
        "icons8-tailwind-css-48.png"
      ]
    },
    {
      title: "Backend",
      icons: [
        "nest.png",
        "python.png",
        "icons8-docker-48.png"
      ]
    },
    {
      title: "Databases",
      icons: [
        "mysqlworkbench_93532.png",
        "postgre.png",
        "icons8-prisma-orm-50.png"
      ]
    },
    {
      title: "Testing",
      icons: [
        "icons8-jest-24.png"
      ]
    }
  ]

  const carouselContainer = document.createElement('div')
  carouselContainer.className = 'tech-carousel'
  
  const carouselInner = document.createElement('div')
  carouselInner.className = 'tech-carousel-container'

  techGroups.forEach(group => {
    const groupDiv = document.createElement('div')
    groupDiv.className = 'tech-group'
    
    const title = document.createElement('h4')
    title.textContent = group.title
    groupDiv.appendChild(title)
    
    const iconsDiv = document.createElement('div')
    iconsDiv.className = 'tech-icons'
    
    group.icons.forEach(icon => {
      const img = document.createElement('img')
      img.src = `./images/logos/${icon}`
      img.alt = icon.replace('.png', '')
      img.loading = "lazy"
      iconsDiv.appendChild(img)
    })
    
    groupDiv.appendChild(iconsDiv)
    carouselInner.appendChild(groupDiv)
  })

  const clonedGroups = carouselInner.cloneNode(true)
  carouselInner.appendChild(clonedGroups)

  carouselContainer.appendChild(carouselInner)

  const aboutMe = document.querySelector('.about-me')
  const aboutMeBody = document.querySelector('.about-me-body')
  if (aboutMe && aboutMeBody) {
    aboutMe.insertBefore(carouselContainer, aboutMeBody)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  updateCounter()
  createTechCarousel()
})
