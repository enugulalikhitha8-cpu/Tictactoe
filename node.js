let btn1=document.getElementById("1")
let btn2=document.getElementById("2")
let btn3=document.getElementById("3")
let btn4=document.getElementById("4")
let btn5=document.getElementById("5")
let btn6=document.getElementById("6")
let btn7=document.getElementById("7")
let btn8=document.getElementById("8")
let btn9=document.getElementById("9")
let res=document.getElementById("result")
let turnO=true
function checkwinner(){
    if(btn1.innerText==btn2.innerText&& btn2.innerText==btn3.innerText&&btn1.innerText!=""){
        res.innerText="Game over !  You are the winner"
        res.style.backgroundColor="green"
        btn1.disabled=true;
        btn2.disabled=true;
        btn3.disabled=true
        btn4.disabled=true;
        btn5.disabled=true;
        btn6.disabled=true;
        btn7.disabled=true;
        btn8.disabled=true;
        btn9.disabled=true;
    }
    if(btn4.innerText==btn5.innerText&& btn5.innerText==btn6.innerText&&btn4.innerText!="")
    {
     res.innerText="Game over !  You are the winner"
        res.style.backgroundColor="green"
        btn1.disabled=true;
        btn2.disabled=true;
        btn3.disabled=true
        btn4.disabled=true;
        btn5.disabled=true;
        btn6.disabled=true;
        btn7.disabled=true;
        btn8.disabled=true;
        btn9.disabled=true;   
    }
    if(btn7.innerText==btn8.innerText&& btn8.innerText==btn9.innerText&&btn9.innerText!="")
    {
     res.innerText="Game over !  You are the winner"
        res.style.backgroundColor="green"
        btn1.disabled=true;
        btn2.disabled=true;
        btn3.disabled=true
        btn4.disabled=true;
        btn5.disabled=true;
        btn6.disabled=true;
        btn7.disabled=true;
        btn8.disabled=true;
        btn9.disabled=true;
    }
    if(btn1.innerText==btn4.innerText&& btn4.innerText==btn7.innerText&&btn4.innerText!="")
    {
        res.innerText="Game over !  You are the winner"
        res.style.backgroundColor="green"
        btn1.disabled=true;
        btn2.disabled=true;
        btn3.disabled=true
        btn4.disabled=true;
        btn5.disabled=true;
        btn6.disabled=true;
        btn7.disabled=true;
        btn8.disabled=true;
        btn9.disabled=true;
    }
    if(btn2.innerText==btn5.innerText&& btn5.innerText==btn8.innerText&&btn2.innerText!="")
    {
        res.innerText="Game over !  You are the winner"
        res.style.backgroundColor="green"
        btn1.disabled=true;
        btn2.disabled=true;
        btn3.disabled=true
        btn4.disabled=true;
        btn5.disabled=true;
        btn6.disabled=true;
        btn7.disabled=true;
        btn8.disabled=true;
        btn9.disabled=true;
        
    }
    if(btn3.innerText==btn6.innerText&& btn6.innerText==btn9.innerText&&btn3.innerText!="")
    {
        res.innerText="Game over !  You are the winner"
        res.style.backgroundColor="green"
        btn1.disabled=true;
        btn2.disabled=true;
        btn3.disabled=true
        btn4.disabled=true;
        btn5.disabled=true;
        btn6.disabled=true;
        btn7.disabled=true;
        btn8.disabled=true;
        btn9.disabled=true;
    }
    if(btn1.innerText==btn5.innerText&& btn5.innerText==btn9.innerText&&btn1.innerText!="")
    {
        res.innerText="Game over !  You are the winner"
        res.style.backgroundColor="green"
        btn1.disabled=true;
        btn2.disabled=true;
        btn3.disabled=true
        btn4.disabled=true;
        btn5.disabled=true;
        btn6.disabled=true;
        btn7.disabled=true;
        btn8.disabled=true;
        btn9.disabled=true;
        
    }
    if(btn3.innerText==btn5.innerText&& btn5.innerText==btn7.innerText&&btn3.innerText!="")
    {
        res.innerText="Game over !  You are the winner"
        res.style.backgroundColor="green"
        btn1.disabled=true;
        btn2.disabled=true;
        btn3.disabled=true
        btn4.disabled=true;
        btn5.disabled=true;
        btn6.disabled=true;
        btn7.disabled=true;
        btn8.disabled=true;
        btn9.disabled=true; 
    }
    else if(btn1.innerText!=""&&btn2.innerText!=""&&btn3.innerText!=""&&btn4.innerText!=""&&btn5.innerText!=""&&btn6.innerText!=""&&btn7.innerText!=""&&btn8.innerText!=""&&btn9.innerText!=""){
        res.innerText="Its a draww!"
        res.style.backgroundColor="purple"
        res.style.color="white"
    }

}
btn1.addEventListener("click",()=>{
    if(turnO==true){
    btn1.append("O")
    btn1.style.backgroundColor="#FFB347"
    turnO=false
    }
    else{
    btn1.append("X")
    turnO=true
btn1.style.backgroundColor="pink"}
    
    btn1.disabled=true;
checkwinner()}
)
    
btn2.addEventListener("click",()=>{
    if(turnO==true){
    btn2.append("O")
    turnO=false
    btn2.style.backgroundColor="#FFB347"
    }else{
    btn2.append("X")
    turnO=true
btn2.style.backgroundColor="pink"}
    btn2.disabled=true;checkwinner()})
btn3.addEventListener("click",()=>{
    if(turnO==true){
    btn3.append("O")
    turnO=false
    btn3.style.backgroundColor="#FFB347"
    }
    else{
    btn3.append("X")
    turnO=true
btn3.style.backgroundColor="pink"}checkwinner();
    
btn3.disabled=true;})
btn4.addEventListener("click",()=>{
    if(turnO==true){
    btn4.append("O")
    turnO=false
    btn4.style.backgroundColor="#FFB347"
    }
    else{
    btn4.append("X")
    turnO=true
btn4.style.backgroundColor="pink"}
    
    btn4.disabled=true;checkwinner()}) 
btn5.addEventListener("click",()=>{
    if(turnO==true){
    btn5.append("O")
    turnO=false
    btn5.style.backgroundColor="#FFB347"
    }
    else{
    btn5.append("X")
    turnO=true
btn5.style.backgroundColor="pink"}
    
    checkwinner()
btn5.disabled=true;})
btn6.addEventListener("click",()=>{
    if(turnO==true){
    btn6.append("O")
    turnO=false
    btn6.style.backgroundColor="#FFB347"
    }
    else{
    btn6.append("X")
    turnO=true
btn6.style.backgroundColor="pink"}checkwinner()
    
btn6.disabled=true;})
btn7.addEventListener("click",()=>{
    if(turnO==true){
    btn7.append("O")
    turnO=false
    btn7.style.backgroundColor="#FFB347"
    }
    else{
    btn7.append("X")
    turnO=true
btn7.style.backgroundColor="pink"}
    
    btn7.disabled=true;checkwinner()})
btn8.addEventListener("click",()=>{
    if(turnO==true){
    btn8.append("O")
    turnO=false
    btn8.style.backgroundColor="#FFB347"
    }
    else{
    btn8.append("X")
    turnO=true
btn8.style.backgroundColor="pink"}
    btn8.disabled=true;checkwinner()})  
btn9.addEventListener("click",()=>{
    if(turnO==true){
    btn9.append("O")
    turnO=false
    btn9.style.backgroundColor="#FFB347"
    }
    else{
    btn9.append("X")
    turnO=true
btn9.style.backgroundColor="pink"}
    btn9.disabled=true;checkwinner()})          






