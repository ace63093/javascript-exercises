const repeatString = function(str,iterations) {
let ans=''

if (iterations <0){
return "ERROR"
}
else for(let i=0;i<iterations;i++){
    ans+=str
}

return ans
}


module.exports = repeatString
