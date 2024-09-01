function handelKeyboardKeyUpEvent(event)
{
    const playerPressed=event.key;
    console.log(playerPressed)
    if (playerPressed=='Escape')
    {
        gameOver();
    }
    //get the expected to press
    const currentAlphabetElement=document.getElementById('current-alphabet')
    const currentAlphabet=currentAlphabetElement.innerText
    const expectedAlphabet=currentAlphabet.toLowerCase()
    if(playerPressed===expectedAlphabet)
    {
        console.log('You win.you get a point')
        const currentScore=getTextElementValueById('current-score')
        const updatedScore= currentScore+1
        setTextElementValueById('current-score',updatedScore)
        
        // const currentScoreElement=document.getElementById('current-score')
        // const currentScoreText=currentScoreElement.innerText
        // const currentScore=parseInt(currentScoreText)
        // console.log(currentScore)

        const newScore=currentScore+1;
        // currentScoreElement.innerText=newScore;
        removeBackgroundColorById(expectedAlphabet)
        continueGame();
    }
    else{
        console.log('you lose.you missied a point',expectedAlphabet)

        const currentLife=getTextElementValueById('current-life')
        const updatedLife=currentLife-1
        setTextElementValueById('current-life',updatedLife)
        if(updatedLife==0)
        {
            gameOver();
        }
        
        // const currentLifeElement=document.getElementById('current-life')
        // const currentLifeText=currentLifeElement.innerText
        // const currentLife=parseInt(currentLifeText)
        // console.log(currentLife)

        // const newLife=currentLife-1;
        // currentLifeElement.innerText=newLife;
    }
    
}
document.addEventListener('keyup',handelKeyboardKeyUpEvent)



function continueGame()
{
    const alphabet= getARandomAlphabet();
    // console.log(alphabet)
    const currentAlphabetElement=document.getElementById('current-alphabet')
    currentAlphabetElement.innerText=alphabet;
    setBackgroundColorById(alphabet);
}



function play()
{
 hideElementById('home-screen')
 hideElementById('final-score')
 showElementById('play-ground')

setTextElementValueById('current-life',5)
setTextElementValueById('current-score',0)

 continueGame();
}
function gameOver()
{
hideElementById('play-ground')
showElementById('final-score')
const lastScore=getTextElementValueById('current-score')
console.log(lastScore)
setTextElementValueById('last-score',lastScore)
const currentAlphabet=getElementTextById('current-alphabet')
removeBackgroundColorById(currentAlphabet);
}

