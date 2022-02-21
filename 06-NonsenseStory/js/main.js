
// document.querySelector('#title').innerHTML = "Nonsense Story"
// document.querySelector('#slogan').innerHTML = "String Manipulation"


//main function

function tellStory() {  

    let nounsArray = document.querySelector("#nouns").value.toLowerCase().split(/\s*[,\n." "]+\s*/);
    console.log(nounsArray)

    let adjectivesArray = document.querySelector('#adjectives').value.toLowerCase().split(/\s*[,\n." "]+\s*/)
    console.log(adjectivesArray)

    let verbsArray = document.querySelector('#verbs').value.toLowerCase().split(/\s*[,\n." "]+\s*/)
    console.log(verbsArray)

//Using string interpoltation - with template literal 
myStory = `Once upon a time the King ${nounsArray[0]} was ${adjectivesArray[0]}, but the ${nounsArray[1]} 
begged the king to not be. After much contemplation, King ${nounsArray[0]} decided to ${verbsArray[0]} 
to make his ${adjectivesArray[1]} family feel better. Unfortunately nothing seemed to ${verbsArray[1]}. 
${nounsArray[3]} at ${nounsArray[1]} but ${nounsArray[1]}, noved to fast. He called his friends ${nounsArray[4]}, ${nounsArray[5]}, 
and ${nounsArray[6]}, to dethrown the king and make thier own empire. The END. `

const output = document.querySelector("#results");
output.innerHTML = myStory;


};