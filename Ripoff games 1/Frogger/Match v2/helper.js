//function preload(){
//    font = loadFont("https://fonts.googleapis.com/css?family=Bungee");
//}
function highscoreInit(){
    
    if(localStorage.highscore === undefined){
        localStorage.highscore = "0"
    }
    highscore = Number(localStorage.highscore);
    //
    
}
function highscoreChange(){
    if (highscore < score){
        highscore = score;
        localStorage.highscore = String(highscore);
    }
}