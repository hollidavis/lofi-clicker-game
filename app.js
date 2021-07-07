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
    price: 100,
    quantity: 0,
    multiplier: 5
  },
  upgradeChair: {
    price: 1000,
    quantity: 0,
    multiplier: 50
  },
};

let automaticUpgrades = {
  magicPen: {
    price: 15,
    quantity: 0,
    multiplier: 10
  },
  assistant: {
    price: 100,
    quantity: 0,
    multiplier: 50
  },
  ghostWriter: {
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
  drawClickCount(item)
}

function buyAutoUpgrade(item) {
  if (beats >= automaticUpgrades[item].price) {
    automaticUpgrades[item].quantity++
    autoClick += automaticUpgrades[item].multiplier
    beats -= automaticUpgrades[item].price
  }
  update()
  drawAutoCount(item)
}

function update() {
  document.getElementById('beats').innerText = beats.toString()
  document.getElementById('clicks').innerText = click.toString()
  document.getElementById('autoClicks').innerText = autoClick.toString()
}

function drawClickCount(id) {
  let count = clickUpgrades[id].quantity
  document.getElementById(id).innerText = count.toString()
}

function drawAutoCount(id) {
  let autoCount = automaticUpgrades[id].quantity
  document.getElementById(id).innerText = autoCount.toString()
}

function drawClickCost()