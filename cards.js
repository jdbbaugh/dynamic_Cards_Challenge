const body = document.querySelector('body');
const userInput = document.querySelector("#userText");


const createButton = document.querySelector("#submitText");

createButton.addEventListener('click', () => {
    userReturn(userInput.textContent);
})
//end eventListener
let counter = 0;
//begin function
let userReturn = () => {
    //counter for div and button
    counter = counter + 1;
    console.log(counter)
    
    //article (aka container for displayed content)
    const article = document.createElement('article');
    article.setAttribute('id', `card--${counter}`);
    article.classList.add('card');
    body.appendChild(article);
    //article complete

    // div with user echo
    const echoDiv = document.createElement('div');
    article.appendChild(echoDiv);
    echoDiv.textContent = userInput.value;
    // div complete

    //delete button
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('id', `delete--${counter}`);
    article.appendChild(deleteButton);
    deleteButton.textContent = 'delete';
    //delete button complete

    //clear usertext box cache
    userInput.value = '';

    //function called from delete eventlistener
    function removeElement(elementId) {
        // Removes an element from the document
        console.log(elementId)
        var element = document.getElementById(elementId);
        element.parentNode.removeChild(element);
    };
    //end of function called from delete event listener
    

    //delete button eventListener
    deleteButton.addEventListener('click', (event) => {
        let gotToGo = event.target.id.split("--");
        let newId = `card--${gotToGo[1]}`;
        removeElement(newId);
        
    });
};
//end of delete button eventlistener
