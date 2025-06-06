

// PasCalCase
// enum Size { small = 1, medium, large }
// let muSize:Size = Size.medium
// console.log(muSize);



function calculateTax(income: number, tasyear: 2022) : number {
  if (tasyear < 2022)
    return income * 1.2
  return income * 1.5 // 15000
}

const total = calculateTax(10_00, 2022)
console.log(total);






