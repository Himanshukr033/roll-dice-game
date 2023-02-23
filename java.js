let left_number = Math.floor(Math.random()*6)+1;
let right_number = Math.floor(Math.random()*6)+1;
switch(left_number){
    case 1: 
        document.querySelector(".left img").setAttribute("src", "img/dice1.png"); 
        break;
    case 2: 
        document.querySelector(".left img").setAttribute("src", "img/dice2.png"); 
        break;
    case 3: 
        document.querySelector(".left img").setAttribute("src", "img/dice3.png"); 
        break;
    case 4: 
        document.querySelector(".left img").setAttribute("src", "img/dice4.png"); 
        break;
    case 5: 
        document.querySelector(".left img").setAttribute("src", "img/dice5.png"); 
        break;
    case 6: 
        document.querySelector(".left img").setAttribute("src", "img/dice6.png"); 
        break;
}
switch(right_number){
    case 1:
        document.querySelector(".right img").setAttribute("src", "img/dice1.png"); 
        break;
    case 2:
        document.querySelector(".right img").setAttribute("src", "img/dice2.png"); 
        break;
    case 3:
        document.querySelector(".right img").setAttribute("src", "img/dice3.png"); 
        break;
    case 4:
        document.querySelector(".right img").setAttribute("src", "img/dice4.png"); 
        break;
    case 5:
        document.querySelector(".right img").setAttribute("src", "img/dice5.png"); 
        break;
    case 6:
        document.querySelector(".right img").setAttribute("src", "img/dice6.png"); 
        break;

}