const ftoc = function(farenheight) {
temp = (farenheight-32)/(9/5)
rtemp=Math.round(temp*10)/10
return rtemp
}

const ctof = function(celcius) {
let temp = (celcius*(9/5))+32;
rtemp=Math.round(temp*10)/10
return rtemp 
}

console.log(ftoc(27))
console.log(ctof(93))

module.exports = {
  ftoc,
  ctof
}
