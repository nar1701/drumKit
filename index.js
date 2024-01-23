// add the eventListner to each and every button 
var numberOfDrumButtons=document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrumButtons;i++){
   document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        // this is to make sound using the click event 
        var buttonInnerHTML=this.innerHTML;
        makeSound(buttonInnerHTML);  
        add_animation(buttonInnerHTML);
   })
}

// this is to make sound using the keyboard event listener
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    add_animation(event.key);
})
function makeSound(key){
        switch (key) {
                case "w": 
                        var audio= new Audio("sounds/tone1.mp3");
                        audio.play();
                        break;
               
                case "a": 
                       var audio= new Audio("sounds/tone2.mp3");
                       audio.play();
                        break;
                 
                case "s": 
                        var audio= new Audio("sounds/tone2.mp3");
                        audio.play();
                        break;
               
                case "d": 
                        var audio= new Audio("sounds/tone4.mp3");
                        audio.play();
                        break;
               
                case "j": 
                        var audio= new Audio("sounds/tone3.mp3");
                        audio.play();
                        break;
               
                 case "k": 
                        var audio= new Audio("sounds/tone6.mp3");
                        audio.play();
                        break;
               
                case "l": 
                        var audio= new Audio("sounds/tone7.mp3");
                        audio.play();
                        break;
               
                default:
                        console.log("key");
                        break;
        }
};

// Now adding little bit of animatins in out websites
function add_animation(curr_key){
  var activeButton=document.querySelector("."+curr_key);
  activeButton.classList.add("pressed");
  setTimeout(function(){
        activeButton.classList.remove("pressed");
  },100);
}

