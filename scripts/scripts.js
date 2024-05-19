// COPYRIGHT TO FOOTER
const currentYear = new Date().getFullYear()
const copyright = document.querySelector('#copyright')
copyright.innerHTML = `© Copyright ${currentYear}`


// ACTIVE LIGHT OR DARK MODE
const lightDarkSwitch = document.querySelector('#light-dark-switch')
lightDarkSwitch.addEventListener('click', () => {
  const html = document.documentElement
  html.classList.toggle('light')
})