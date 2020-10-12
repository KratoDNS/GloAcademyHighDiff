let num=266219
let str= String(num)


let calc=1
 for ( let i = 0; i < str.length; i++){
     console.log(calc *=str[i])
 }
let final=String(calc**3)


console.log(str)
console.log(str.split('',6))
console.log(final)
console.log(final[0],final[1])
console.log(calc**3)
console.log('' + final.slice(0, 2))