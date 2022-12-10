let numberOfButtons=document.querySelectorAll(".drum").length;

for(let i=0;i<numberOfButtons;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var key_clicked=this.innerHTML;
        switch(key_clicked)
        {
            case "w":
                let tom_1=new Audio('sounds/tom-1.mp3');
                tom_1.play();
                break;
            case "a":
                let tom_2=new Audio('sounds/tom-2.mp3');
                tom_2.play();
                break;
            case "s":
                let tom_3=new Audio('sounds/tom-3.mp3');
                tom_3.play();
                break;
            case "d":
                let tom_4=new Audio('sounds/tom-4.mp3');
                tom_4.play();
                break;
            case "j":
                let crash=new Audio('sounds/crash.mp3');
                crash.play();
                break;
            case "k":
                let kickbass=new Audio('sounds/kick-bass.mp3');
                kickbass.play();
                break;
            case "l":
                let snare=new Audio('sounds/snare.mp3');
                snare.play();
                break;
            default:
                console.log(key_clicked);
                break;

        }

    });
    
}

document.addEventListener("keypress",   function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})
function makeSound(key)
{
    switch(key)
        {
            case "w":
                let tom_1=new Audio('sounds/tom-1.mp3');
                tom_1.play();
                break;
            case "a":
                let tom_2=new Audio('sounds/tom-2.mp3');
                tom_2.play();
                break;
            case "s":
                let tom_3=new Audio('sounds/tom-3.mp3');
                tom_3.play();
                break;
            case "d":
                let tom_4=new Audio('sounds/tom-4.mp3');
                tom_4.play();
                break;
            case "j":
                let crash=new Audio('sounds/crash.mp3');
                crash.play();
                break;
            case "k":
                let kickbass=new Audio('sounds/kick-bass.mp3');
                kickbass.play();
                break;
            case "l":
                let snare=new Audio('sounds/snare.mp3');
                snare.play();
                break;
            default:
                console.log(key_clicked);
                break;

        }

}

function buttonAnimation(currKey)
{
    var activeBtn = document.querySelector("."+currKey);
    activeBtn.classList.add("pressed");
    setTimeout(function(){
        activeBtn.classList.remove("pressed");
    },100)

}








