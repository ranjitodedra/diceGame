player1Score = Math.floor((Math.random()*6)+1);
player2Score = Math.floor((Math.random()*6)+1);

if(player1Score === 1){
    document.querySelector("img.dice1").setAttribute("src","images/1.jpeg");
}
else if(player1Score === 2){
    document.querySelector("img.dice1").setAttribute("src","images/2.jpeg");
}
else if(player1Score === 3){
    document.querySelector("img.dice1").setAttribute("src","images/3.jpeg");
}
else if(player1Score === 4){
    document.querySelector("img.dice1").setAttribute("src","images/4.jpeg");
}
else if(player1Score === 5){
    document.querySelector("img.dice1").setAttribute("src","images/5.jpeg");
}
else if(player1Score === 6){
    document.querySelector("img.dice1").setAttribute("src","images/6.jpeg");
}

if(player2Score === 1){
    document.querySelector("img.dice2").setAttribute("src","images/1.jpeg");
}
else if(player2Score === 2){
    document.querySelector("img.dice2").setAttribute("src","images/2.jpeg");
}
else if(player2Score === 3){
    document.querySelector("img.dice2").setAttribute("src","images/3.jpeg");
}
else if(player2Score === 4){
    document.querySelector("img.dice2").setAttribute("src","images/4.jpeg");
}
else if(player2Score === 5){
    document.querySelector("img.dice2").setAttribute("src","images/5.jpeg");
}
else if(player2Score === 6){
    document.querySelector("img.dice2").setAttribute("src","images/6.jpeg");
}

if(player1Score > player2Score){
    document.querySelector("h1").innerHTML = "🚩 Player 1 won";
}
else if(player1Score < player2Score)
{
    document.querySelector("h1").innerHTML = "player 2 won 🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw !";
}