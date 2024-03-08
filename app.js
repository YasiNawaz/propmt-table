const num = parseInt(prompt("Enter a number:"))

if (!isNaN(num)) {
    let table = ''
    for (let i = 1; i <= 10; i++) {
        result = num*i
        table += `${num} x ${i} = ${result}\n`
    }
    console.log(`Table of ${num}:\n${table}`)
}
else {
    console.log("Please enter a valid number.")
}