let beats = 0

let clickUpgrades = {
  deluxepen: {
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
  coffee: {
    price: 100,
    quantity: 0,
    multiplier: 50
  },
  assistant: {
    price: 1000,
    quantity: 0,
    multiplier: 100
  },
  ghostwriter: {
    price: 10000,
    quantity: 0,
    multiplier: 1000
  }
};

function mine() {
  beats++
  update()
}

function update() {
  document.getElementById('beats').innerText = beats.toString()
}

function buyClickUpgrade(item) {
  let cost = clickUpgrades[item].price
  let count = clickUpgrades[item].quantity
  if (beats >= cost) {
    count++
    beats -= cost
  }
  update()
}