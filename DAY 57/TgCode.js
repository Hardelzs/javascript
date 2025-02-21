const number = [1 ,2, 3, 4, 5]

const result = number
    .filter(num => num % 2 === 0)  //  Keeps only the even numbers (2, 4)
    .map(num => num * num) // Squares each remaining number (4, 16)
    .reduce((acc, num) => acc + num, 0) // Adds up all the numbers

console.log(result); // 16 + 4 = 20 
