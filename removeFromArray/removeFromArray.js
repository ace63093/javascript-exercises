const removeFromArray = function(arr,value,other,one,two,three) {
 
    len = arr.length;
    a=[]
    b=arguments
    console.log(b)
   for (i=0;i<len;i++){
    if (arr[i]==other ){
        continue;
    }
    if (arr[i]==one ){
        continue;
    }
    if (arr[i]==two ){
        continue;
    }    

   if (arr[i]==three ){
       continue;
   }
   if (arr[i]==value ){
    continue;
}

   else a.push(arr[i])
   }
console.log(typeof _other)


   return a


}

console.log(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4))

/*const parse = function(group,value){
    len = group.length;
     a=[]
    for (i=0;i<len;i++){

    if (group[i]==value){
        continue;
    }

    else a.push(group[i])
    }
    return a
}
*/






module.exports = removeFromArray
