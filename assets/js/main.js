/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        // Use a quoted attribute selector and guard against null
        const sectionsClass = document.querySelector(`.nav__menu a[href*="${sectionId}"]`)

        if (sectionsClass) {
            if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
                sectionsClass.classList.add('active-link')
            } else {
                sectionsClass.classList.remove('active-link')
            }
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
/* Scroll reveal animations work perfectly with the light textured background */
/* Elements elegantly fade in from top with glass cards appearing smoothly */
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    // reset: true
});

// Section titles
sr.reveal('.section-title', {delay: 100}); 

// Home section
sr.reveal('.home__data', {delay: 200}); 
sr.reveal('.home__social-icon', {interval: 200}); 
sr.reveal('.home__img', {delay: 400}); 

// About section
sr.reveal('.about__img', {delay: 200}); 
sr.reveal('.about__text-content', {delay: 300}); 
sr.reveal('.about__objective', {delay: 400}); 

// Skills section
sr.reveal('.skills__subtitle', {delay: 200}); 
sr.reveal('.skills__text', {delay: 300}); 
sr.reveal('.skills__list li', {interval: 200}); 
sr.reveal('.skills__img', {delay: 400}); 

// Achievements section
sr.reveal('.achievement__item', {interval: 200}); 

// Projects section
sr.reveal('.projects__item', {interval: 200}); 

// Academics section
sr.reveal('.about__container', {delay: 200}); 

// Contact section
sr.reveal('.contact__info', {delay: 200}); 

/*==================== CONTACT FORM HANDLER ====================*/
const contactForm = document.getElementById('contact-form')
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault()

        const name = document.getElementById('contact-name').value.trim()
        const email = document.getElementById('contact-email').value.trim()
        const message = document.getElementById('contact-message').value.trim()

        // Build mailto link (basic fallback) - subject and body encoded
        const subject = encodeURIComponent(`Message from ${name || 'Website Visitor'}`)
        const body = encodeURIComponent(`Name: ${name}%0AEmail: ${email}%0A%0A${message}`)
        const mailto = `mailto:sawantaditya458@gmail.com?subject=${subject}&body=${body}`

        // Open user's mail client
        window.location.href = mailto
    })
}
