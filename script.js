function getcube(){  
var number=document.getElementById("number").value;  
alert(number*number*number);  
}  
var color=["#222f3e","#f368e0","#ee5253","#0abde3","#10ac84","#222f3e","#5f27cd"]
var i=0;
document.querySelector("button").addEventListener("click",function(){
i=1<color.length ? ++i:0;
document.querySelector("body").style.background=color[i];
})
