if('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then( (registration)=> {
        console.log('sw enregistré')
        console.log(registration)
      })
      .catch( err=> {
        console.log('sw registration failed : ' + err)
      })
  })
}