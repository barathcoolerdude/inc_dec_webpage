const decrease_button=document.getElementById("decrease_button");
const increase_button=document.getElementById("increase_button");
const reset=document.getElementById("reset");
const countlabel=document.getElementById("countlabel");
let count=0;

increase_button.onclick=function(){
    count++;
    countlabel.textContent=count;
}

decrease_button.onclick=function(){
    count--;
    countlabel.textContent=count;
}

reset.onclick=function(){
    count=0;
    countlabel.textContent=count;
}