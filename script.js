const numberOfButtons = document.querySelectorAll('.drum').length;

for(let i = 0 ; i < numberOfButtons; i++){
  document.querySelectorAll('.drum')[i].addEventListener("click",function(){
    let innerButton = this.innerHTML
    makeSound(innerButton)
  })
}
document.addEventListener("keypress",function(event){
  makeSound(event.key)
})
function makeSound(event){
    switch(event){
      case "w":
        let tom1 = new Audio("./Assets/tom-1.mp3")
        tom1.play()
        break;
      case "a":
        let tom2 = new Audio("./Assets/tom-2.mp3")
        tom2.play()
        break;
      case "s":
        let tom3 = new Audio("./Assets/tom-3.mp3")
        tom3.play()
        break;   
      case "d":
        let tom4 = new Audio("./Assets/tom-4.mp3")
        tom4.play()
        break;
      case "j":
        let snare = new Audio("./Assets/snare.mp3")
        snare.play()
        break;   
      case "k":
        let crash = new Audio("./Assets/crash.mp3")
        crash.play()
        break;   
      case "l":
        let kick = new Audio("./Assets/kick-bass.mp3")
        kick.play()
        break; 
        default:
          console.log(innerButton)             
    }
}