import install from './install.js'

fetch('https://ingrwf12.cepegra-frontend.xyz/cockpit1/api/content/item/voyages')
.then(r => r.json())
.then(r => {
  console.log(r)
  document.querySelector('.voyage').innerHTML = r['voyages-label']
  document.querySelector('.description').innerHTML = r['voyages-description']
  document.querySelector('.prix').innerHTML = r['voyages-prix']
})

install()