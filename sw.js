const version = 1.0

//install
self.addEventListener('install', e => {
  console.log('sw installed')
  return self.skipWaiting()
})

self.addEventListener('activate', e => {
  console.log('sw actived')
})