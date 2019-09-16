const coins = require('./coinArray')

function getCoin(income) {
  let money = {}

  coins.forEach(note => {
    let countedNote = count(income, note.value, note.label)
    money = { ...money, ...countedNote }
    income -= countedNote[note.label] * note.value
  })

  return money
}

function count(income, value, label) {
  let difference = income % value
  let newIncome = income - difference
  let times = newIncome / value

  return income ? { [label]: times } : { [label]: 0 }
}

console.log(getCoin(230), getCoin(938), getCoin(21), getCoin(54), getCoin(292))
