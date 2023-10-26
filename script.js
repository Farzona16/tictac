let boxes=document.querySelectorAll(".shape");
let x=0;
let p1=document.getElementById('p1')
let number=0;
boxes.forEach((item)=>
item.addEventListener("click", ()=>{
if(x===0&&item.textContent===""){
    x=1;
    item.textContent="X";
    for(i=0;i<9;i++){} 
console.log(number++)
}
else if(x===1&&item.textContent===""){
    x=0;
    item.textContent="O";
    for(i=0;i<9;i++){} 
console.log(number++)
}
winner()}))
function winner(){
const winning=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [0,4,8],
    [2,4,6]
]
winning.map((item)=>
{
 if(boxes[item[0]].textContent===boxes[item[1]].textContent&&
    boxes[item[1]].textContent===boxes[item[2]].textContent&&
    boxes[item[2]].textContent==="X"){
    document.getElementById('p1').style.display="block"
    p1.innerHTML="X  winner!"
    document.getElementById('container').style.opacity='0.3'
    
}
 if(boxes[item[0]].textContent===boxes[item[1]].textContent&&
    boxes[item[1]].textContent===boxes[item[2]].textContent&&
    boxes[item[2]].textContent==="O"){ 
    document.getElementById('p1').style.display="block"
    p1.innerHTML="O  winner!"
    document.getElementById('container').style.opacity='0.3'
}
if(number===9){
    document.getElementById('p1').style.display="block"
    p1.innerHTML="No winner!"
    document.getElementById('container').style.opacity='0.3'
 }
}
)}


