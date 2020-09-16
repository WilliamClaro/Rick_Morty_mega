  import API from './api.js'
  import Character from './character.js'
  const api = new API()
  fetch('http://localhost:5000').then(response => response.json())
    .then((jsonData) => {
      console.log(jsonData)
    var residents = jsonData;
    var walkback = false
  let currentCaracter = 1
  const $loadNext = document.querySelector('#load-next')
 $loadNext.addEventListener('click', async () => {
      if (walkback === false) {currentCaracter +=1} else {currentCaracter-=1} 
      if (currentCaracter === residents.length) {walkback = true} else { if (currentCaracter === 0)  {walkback = false}}
      new Character(residents[currentCaracter])
  })
  async function initApp(initCharacterId) {
    currentCaracter =0
    new Character(residents[currentCaracter])
  }
  initApp(currentCaracter)
  })
    .catch((error) => {
      // handle your errors here
      console.error(error)
    }); 