let sounds = []

function onSound(index) {
  console.log('tocar o som', index)
}

fetch('../sounds.json').then(response => response.json()).then(data => {
  sounds = data

  const elementSounds = document.querySelector('.sounds')

  sounds.map((sound, index) => {
    const li = document.createElement('li')
    const button = document.createElement('button')

    button.setAttribute('onClick', `onSound(${index})`)
    
    li.appendChild(button)
    elementSounds.appendChild(li)
  })
})