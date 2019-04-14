//redball
let red=document.querySelectorAll(".redball");
let move3=setInterval(function(){
    red.forEach(function(value){
        let pozx=(Math.random()*550).toFixed(0);
        let pozy=(Math.random()*1270).toFixed(0);
        value.style.left=pozy+"px";
        value.style.top=pozx+"px"
    })
},2000)
//greenball
let green=document.querySelectorAll(".greenball");
let move2=setInterval(function(){
    green.forEach(function(value){
        let ozmox=(Math.random()*550).toFixed(0);
        let ozmoy=(Math.random()*1270).toFixed(0);
        value.style.left=ozmoy+"px";
        value.style.top=ozmox+"px"; 
    })
},1000)
//yellowball
let yellow=document.querySelectorAll(".yellowball");
let move1=setInterval(function(){
    yellow.forEach(function(value){
        let ozmx=(Math.random()*550).toFixed(0);
        let ozmy=(Math.random()*1270).toFixed(0);
        value.style.left=ozmy+"px";
        value.style.top=ozmx+"px";
    })  
},2000)
//blueball
let blue=document.querySelectorAll(".blueball");
let move=setInterval(function(){
    blue.forEach(function(value){
        let ozx=(Math.random()*550).toFixed(0);
        let ozy=(Math.random()*1270).toFixed(0);
        value.style.left=ozy+"px";
        value.style.top=ozx+"px";
    })
},2000)
//black-botton-1
let black1=document.querySelector(".black1");
black1.addEventListener("click",function(){
    clearInterval(move)
    blue.forEach(function(value){
    value.style.left="160px";
    value.style.top="673px";
    })
    //blackball
    let black=document.querySelectorAll(".blackball");
    let move7=setInterval(function(){
      black.forEach(function(velu){
        let posx=(Math.random()*550).toFixed(0);
        let posy=(Math.random()*1270).toFixed(0);
        velu.style.left=posy+"px";
        velu.style.top=posx+"px";

        black1.addEventListener("click",function(){
            black.forEach(function(velu){ 
                velu.style.left="160px";
                velu.style.top="670px";
               setTimeout(function(){
                   velu.style.display="none"
               },2000)
                clearInterval(move7);  
            }) 
        })
        
    })
    
},2000)
});
//black-botton-2
let black2=document.querySelector(".black2");
black2.addEventListener("click",function(){
    clearInterval(move1)
    yellow.forEach(function(value){
        value.style.left="390px";
        value.style.top="670px"; 
    })
    //goldball
    let gold=document.querySelectorAll(".goldball");
    let move6=setInterval(function(){
      gold.forEach(function(vel){
        let poisx=(Math.random()*550).toFixed(0);
        let poisy=(Math.random()*1270).toFixed(0);
        vel.style.left=poisy+"px";
        vel.style.top=poisx+"px";

        black2.addEventListener("click",function(){
            gold.forEach(function(vel){ 
                vel.style.left="390px";
                vel.style.top="670px";
               setTimeout(function(){
                   vel.style.display="none"
               },2000)
                clearInterval(move6);  
            }) 
        }) 
    })
},2000)
});
//black-botton-3
let black3=document.querySelector(".black3");
black3.addEventListener("click",function(){
    clearInterval(move2)
    green.forEach(function(value){
        value.style.left="900px";
        value.style.top="675px";
    })
    //akuaball
    let akua=document.querySelectorAll(".akuaball");
    let move5=setInterval(function(){
      akua.forEach(function(val){
        let pox=(Math.random()*550).toFixed(0);
        let poy=(Math.random()*1270).toFixed(0);
        val.style.left=poy+"px";
        val.style.top=pox+"px";

        black3.addEventListener("click",function(){
            akua.forEach(function(val){ 
                val.style.left="900px";
                val.style.top="675px";
               setTimeout(function(){
                   val.style.display="none"
               },2000)
                clearInterval(move5);  
            }) 
        })
    }) 
},2000)
})      
//black-botton-4.
let black4=document.querySelector(".black4");
black4.addEventListener("click",function(){
    clearInterval(move3)
    red.forEach(function(value){
        value.style.left="1120px";
        value.style.top="675px";
        })        
//purpleball        
let purple=document.querySelectorAll(".purpleball");
let move4=setInterval(function(){
    purple.forEach(function(value){
        let pozx=(Math.random()*550).toFixed(0);
        let pozy=(Math.random()*1270).toFixed(0);
        value.style.left=pozy+"px";
        value.style.top=pozx+"px";

        black4.addEventListener("click",function(){
            purple.forEach(function(value){ 
                value.style.left="1120px";
                value.style.top="675px";
               setTimeout(function(){
                   value.style.display="none"
               },2000)
                clearInterval(move4);  
            }) 
        })
    })
},2000)
    })