const reverseString = function(string) {
    length=string.length
    let backwards=['']
    for (i=length;i>-1;i--){
        backwards.push(string.slice(i-1,i))
    }
backwards=backwards.join('')
return backwards

}



module.exports = reverseString
