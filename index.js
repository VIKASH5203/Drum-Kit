
for(var i=0;i<document.querySelectorAll(".drum").length;i++){

   document.querySelectorAll(".drum")[i].addEventListener("click",function (e){

      var buttonInnerHtml=this.innerHTML;
      makesound(buttonInnerHtml);
      buttonanimation(buttonInnerHtml);
   });

}

document.addEventListener("keydown",function(eventt){
  makesound(eventt.key);
  buttonanimation(eventt.key);
})

function makesound(key){

  switch (key) {
    case "w":
        var audio=new Audio('sounds/tom-1.mp3');
        audio.play();
    break;
    case "a":
        var audio=new Audio('sounds/tom-2.mp3');
        audio.play();
    break;
    case "s":
        var audio=new Audio('sounds/tom-3.mp3');
        audio.play();
    break;
    case "d":
        var audio=new Audio('sounds/tom-4.mp3');
        audio.play();
    break;
    case "j":
        var audio=new Audio('sounds/snare.mp3');
        audio.play();
    break;
    case "k":
        var audio=new Audio('sounds/crash.mp3');
        audio.play();
    break;
    case "l":
        var audio=new Audio('sounds/kick-bass.mp3');
        audio.play();
    break;

    default:

  }
}

function buttonanimation(key){
    var activekey=document.querySelector("."+key);
    /*activekey.remove("."+key);*/
    activekey.classList.add("pressed");
    setTimeout(function(){
      activekey.classList.remove("pressed");
    },100)
}
