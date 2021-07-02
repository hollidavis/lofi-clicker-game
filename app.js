let beats = 0
let click = 1
let autoClick = 0

let clickUpgrades = {
  coffee: {
    price: 15,
    quantity: 0,
    multiplier: 1
  },
  upgradeheadphones: {
    price: 50,
    quantity: 0,
    multiplier: 5
  },
  upgradechair: {
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

function update() {
  document.getElementById('beats').innerText = beats.toString()
}

function buyClickUpgrade(item) {
  let cost = clickUpgrades[item].price
  let amount = clickUpgrades[item].quantity
  let bonus = clickUpgrades[item].multiplier
  if (beats >= cost) {
    amount++
    click += bonus
    beats -= cost
  }
  update()
}

function buyAutoUpgrade(item) {
  let cost = automaticUpgrades[item].price
  let amount = automaticUpgrades[item].quantity
  let bonus = automaticUpgrades[item].multiplier
  if (beats >= cost) {
    amount++
    autoClick += bonus
    beats -= cost
  }
  update()
}