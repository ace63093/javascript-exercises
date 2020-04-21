const sumAll = function(big,small) {
    let sum =0;
    if (big < 0 || small < 0)
    {return 'ERROR'}
console.log(big,small)
    if (typeof big != 'number' || typeof small != 'number'){
        return 'ERROR'
    }  
    if (big>small){
    for (i=big;i>small-1;i--){
       console.log(sum)
       sum+=i;
    }}
    else for (i=small;i>big-1;i--){
        console.log(sum)
        sum+=i;
     }

console.log(sum)

return sum



}


console.log(sumAll(1,4))


module.exports = sumAll
