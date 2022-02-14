let guessNode=document.getElementById("guessNum")
let num=Math.floor(Math.random()*6);
let count=0
let resultNode=document.getElementById("result")
let btnGuessNode=document.getElementById("btnGuess")
let div3Node=document.getElementById("div3")
let summaryNode=document.getElementById("summary")

btnGuessNode.onclick=function(){
    console.log(num)
    console.log(guessNode.value)
    if(guessNode.value==num){
        resultNode.textContent="you are right go on!"
        guessNode.value=""
        count=count+1
    }
    else{
        summaryNode.textContent="Game Completed"
        resultNode.textContent="your score is "+count
        guessNode.value=""
        num=Math.floor(Math.random()*6);

    }
}