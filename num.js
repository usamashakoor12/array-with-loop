var bigNumber=document.getElementById("show")
function clik(){
  bigNumber.innerHTML=""
let array=[2,45,76,3,8,2,0,2,12,89,4,6,7,4,5,45,34,8,67];
for(i=0; i<array.length; i++)
if (array[i]>7){
    bigNumber.innerHTML+=array[i]+"<br>"
  }  
}
function clik1(){
  bigNumber.innerHTML=""
    let fruit=["Guava","Orange","Pineapple","Apple","Banana",
     "Mango","Grapes","Papaya","Coconut","Graps","Kiwi"];
     for(let a=0; a<fruit.length; a++)
     if(fruit[a].includes("e"))
     {
     bigNumber.innerHTML+=fruit[a]+"<br>" 
     }
}
