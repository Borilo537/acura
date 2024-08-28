localStorage.setItem('mode','normal');
let normal = true
let hardcore = false
let Mercenario = 0
function myFunction()
{

    if (normal) {
    document.getElementById("img1").src="hardcore.png";
    normal = false
    hardcore = true
    localStorage.setItem('mode','hardcore');
    }
    else if (hardcore) {
    document.getElementById("img1").src="normal.png";
    normal = true
    hardcore = false
    localStorage.setItem('mode','normal');
    }
}





function select()
{
    
    document.getElementById("page").href='../jogo/index.html';
    document.getElementById("play").src="playerSelected.png";
    document.getElementById("play2").src="player2.png";

}   

function select2()
{
    
    document.getElementById("page").href='../jogo/index2.html';
    document.getElementById("play2").src="playerSelected.png";
    document.getElementById("play").src="player1.png";

}