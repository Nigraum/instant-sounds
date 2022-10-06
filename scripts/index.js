let sounds = []

let soundsCache = new Map()

function onSound(index) {
  const pathSound = sounds[index].path

  let sound = soundsCache.get(index)
  
  if(!sound) {
    sound = new Audio(pathSound)
    soundsCache.set(index, sound)
  }
  
  sound.currentTime = 0
  sound.play()
}

document.addEventListener('keydown', ({ key }) => {
  console.log(key)
})

fetch('../sounds.json').then(response => response.json()).then(data => {
  sounds = data

  const elementSounds = document.querySelector('.sounds')

  sounds.map((sound, index) => {
    const li = document.createElement('li')

    const button = document.createElement('button')
    button.setAttribute('onClick', `onSound(${index})`)

    const span = document.createElement('span')
    span.innerHTML = sound.hotkey
    button.appendChild(span)

    const label = document.createElement('label')
    label.innerHTML = sound.label
    button.appendChild(label)

    li.appendChild(button)

    elementSounds.appendChild(li)
  })
})