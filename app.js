let beats = 0

function mine() {
  beats++
  update()
}

function update() {
  document.getElementById('beats').innerText = beats.toString()
}