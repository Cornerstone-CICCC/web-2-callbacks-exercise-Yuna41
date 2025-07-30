const fs = require("fs");

fs.readFile("firstname.txt", "utf-8", (err, data) => {
  console.log(data)
})
fs.readFile("lastname.txt", "utf-8", (err, data) => {
  console.log(data)
})
fs.readFile("age.txt", "utf-8", (err, data) => {
  console.log(data)
})
fs.readFile("hobbies.txt", "utf-8", (err, data) => {
  console.log(data)
})


fs.readFile("firstname.txt", "utf-8", (err, data1) => {
  fs.readFile("lastname.txt", "utf-8", (err, data2) => {
    fs.readFile("age.txt", "utf-8", (err, data3) => {
      fs.readFile("hobbies.txt", "utf-8", (err, data4) => {
        const Hobbies = JSON.parse(data4)
        console.log(`${data1} ${data2} is ${data3} years old and his hobbies are ${Hobbies[0]} and ${Hobbies[1]} on the terminal.`)
      })
    })
  })
})