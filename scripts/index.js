let sounds = []

fetch('../sounds.json').then(response => response.json()).then(data => {
  sounds = data

  sounds.map(sound => {
    const li = document.createElement('li')
    const button = document.createElement('button')

    button.setAttribute('onClick', '')
    
  })
})