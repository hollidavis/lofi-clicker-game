let beats = 0
let click = 1
let autoClick = 0

let clickUpgrades = {
  coffee: {
    price: 15,
    quantity: 0,
    multiplier: 1
  },
  upgradeHeadphones: {
    price: 50,
    quantity: 0,
    multiplier: 5
  },
  upgradeChair: {
    price: 100,
    quantity: 0,
    multiplier: 50
  },
};

let automaticUpgrades = {
  magicpen: {
    price: 15,
    quantity: 0,
    multiplier: 10
  },
  assistant: {
    price: 100,
    quantity: 0,
    multiplier: 50
  },
  ghostwriter: {
    price: 1000,
    quantity: 0,
    multiplier: 100
  }
};

function mine() {
  beats += click
  update()
}

function buyClickUpgrade(item) {
  if (beats >= clickUpgrades[item].price) {
    clickUpgrades[item].quantity++
    click += clickUpgrades[item].multiplier
    beats -= clickUpgrades[item].price
  }
  update()
  drawCount(item)
}

function buyAutoUpgrade(item) {
  let cost = automaticUpgrades[item].price
  let bonus = automaticUpgrades[item].multiplier
  if (beats >= cost) {
    automaticUpgrades[item].quantity++
    autoClick += bonus
    beats -= cost
  }
  update()
}

function update() {
  document.getElementById('beats').innerText = beats.toString()
  document.getElementById('clicks').innerText = click.toString()
  document.getElementById('clicks').innerText = autoClick.toString()
}

function drawCount(id) {
  let count = clickUpgrades[id].quantity
  document.getElementById(id).innerText = count.toString()
}