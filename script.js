var score,activePlayer,cscore,c1,c2,prev,target;
var gameover;
init();
document.querySelector(".roll-dice").addEventListener("click",function(){
    if(gameover===false)
    {
        var diceDOM=document.querySelector(".dice-img");
        diceDOM.style.display="block";
        var dice=Math.ceil(Math.random()*6);
        diceDOM.src="Assets/dice-"+dice+".png";
        cscore+=dice;
        var targetDOM=document.querySelector(".winning-score");
        if(!targetDOM.value||targetDOM.value==0)
            target=100;
        else
            target=parseInt(targetDOM.value);
        if(prev==6&&dice==6)
        {
            cscore=0;
            changePlayer();
            prev=0;
        }
        else if(dice===1)
        {
            prev=dice;
            changePlayer();
        }
        else
        {
            prev=dice;
            activePlayer===0?document.getElementById("cscore-0").textContent=cscore:document.getElementById("cscore-1").textContent=cscore;
            if(cscore+score[activePlayer]>=target)
                changePlayer();
        }
    }
});
function changePlayer()
{
    score[activePlayer]+=cscore;
    console.log(score[activePlayer]);
    console.log(target);
    if(score[activePlayer]<target){
        document.querySelector(".score-"+activePlayer).textContent=score[activePlayer];
        cscore=0;
        c1.textContent="0";
        c2.textContent="0";
        activePlayer=activePlayer===0?1:0;
        document.querySelector(".container1").classList.toggle("active");
        document.querySelector(".container2").classList.toggle("active");
    }
    else
    {
        document.querySelector(".dice-img").style.display="none";
        var playerid=document.getElementById("player-"+activePlayer);
        document.querySelector(".score-"+activePlayer).textContent=score[activePlayer];
        c1.textContent=0;
        c1.textContent=0;
        playerid.textContent="WINNER!";
        playerid.classList.add("winner");
        gameover=true;
    }
}
document.querySelector(".hold").addEventListener("click",function(){
    prev=0;
    if(gameover===false)
        changePlayer();
});
document.querySelector(".new-game").addEventListener("click",init);
function init()
{
    prev=0;
    target=1;
    gameover=false;
    score=[0,0];
    activePlayer=0;
    cscore=0;
    document.querySelector(".dice-img").style.display="none";
    document.querySelector(".score-0").textContent="0";
    document.querySelector(".score-1").textContent="0";
    c1=document.getElementById("cscore-0");
    c1.textContent="0";
    c2=document.getElementById("cscore-1");
    c2.textContent="0";
    var p1=document.querySelector("#player-0");
    var p2=document.querySelector("#player-1");
    p2.textContent="Player 2";
    p1.textContent="Player 1";
    p1.classList.remove("winner");
    p2.classList.remove("winner");
    document.querySelector(".container1").classList.add("active");
    document.querySelector(".container2").classList.remove("active");
}




