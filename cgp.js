var numSquares = 6;
var colors = generateRandomColors(numSquares);
// SELECTION PROCESS
var square = document.querySelectorAll(".square");
var correctans = pickcolor();
var colorDisplay = document.querySelector("#two");
var message = document.querySelector("#Message");
var h1 = document.querySelector("h1");
var resetbtn = document.querySelector(".new")
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");
colorDisplay.textContent = correctans;

easybtn.addEventListener("click" , function(){
    hardbtn.classList.remove("selected");
    easybtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    correctans = pickcolor();
    colorDisplay.textContent = correctans;
    for(var i = 0; i< square.length ; i++){
         if(colors[i]){
             square[i].style.background = colors[i];
         }
         else{
            square[i].style.background = "none";
             
         }
    }    h1.style.background = "#232323";
         
});
hardbtn.addEventListener("click" , function(){
    easybtn.classList.remove("selected");
    hardbtn.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    correctans = pickcolor();
    colorDisplay.textContent = correctans;
    for(var i = 0 ; i < square.length ; i++){
     square[i].style.background = colors[i];
    }h1.style.background = "#232323";
});


resetbtn.addEventListener("click" , function(){
   colors = generateRandomColors(numSquares );
    correctans = pickcolor();   
    colorDisplay.textContent = correctans;
     for(var i = 0 ; i < square.length ; i++){
         square[i].style.background = colors[i];
     }
     h1.style.background = "#232323";
     resetbtn.textContent = "NEW GAME"; 
});
for(var i = 0 ; i < square.length ; i++){
    square[i].style.background = colors[i];
    square[i].addEventListener("click",function(){
    var userpick = this.style.background;
        if( userpick === correctans){
            message.textContent = "Correct!!";
            changecolors(userpick);      
            h1.style.background = userpick; 
            resetbtn.textContent = "Play Again?";
         }
        else{
            this.style.background = "#232323" ;
            message.textContent = "Try Again";
        }
    })
  
};
function changecolors(color){
    for(var i = 0 ; i < square.length ; i++){
        square[i].style.background = color;
    }
      
};
function pickcolor(){
   var randomno = Math.floor(Math.random() * colors.length);
   return colors[randomno]; 
};
function generateRandomColors(num){
    var arr = [];
    for(var i = 0 ; i < num ; i++){
    arr.push(randomColors());
    }
    return arr;
};

function randomColors(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256); 
    var b = Math.floor(Math.random()*256); 
    return "rgb(" + r + ", " + g + ", " + b + ")"; 

};
