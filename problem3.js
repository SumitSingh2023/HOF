/*Problem 3: Taking the following array into consideration get the output as given below:
arr = [3,4,5,6,7]
Output ==> 3 - 5 - 7*/

let arr=[3,4,5,6,7]
let add=""
let ans=arr.forEach(function(ele,i){
    if(i%2==0){
        add=add+ele
    }else{
        add=add+" - "
    }
})
console.log(add)