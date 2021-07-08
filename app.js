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
    drawClickCost(item)
  }
  update()
  drawClickCount(item)
}

function buyAutoUpgrade(item) {
  if (beats >= automaticUpgrades[item].price) {
    automaticUpgrades[item].quantity++
    autoClick += automaticUpgrades[item].multiplier
    beats -= automaticUpgrades[item].price
    drawAutoCost(item)
  }
  update()
  collectAutoUpgrades()
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

function drawClickCost(item) {
  clickUpgrades[item].price *= 2
  document.getElementById(item + 'Cost').innerText = clickUpgrades[item].price.toString()
  console.log(clickUpgrades[item].price)
}

function drawAutoCost(item) {
  automaticUpgrades[item].price *= 2
  document.getElementById(item + 'Cost').innerText = automaticUpgrades[item].price.toString()
  console.log(automaticUpgrades[item].price)
}

function startInterval() {
  // collectionInterval = (do I need??)
  setInterval(collectAutoUpgrades, 1000);
}

function collectAutoUpgrades() {

}