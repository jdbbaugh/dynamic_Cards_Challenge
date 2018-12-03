const body = document.querySelector('body');
const userInput = document.querySelector("#userText");


const createButton = document.querySelector("#submitText");

createButton.addEventListener('click', () => {
    userReturn(userInput.textContent);
})

//begin function
let userReturn = () => {
    //article (aka container for displayed content)
    const article = document.createElement('article');
    article.setAttribute('id', 'card--1');
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
    article.appendChild(deleteButton);
    deleteButton.textContent = 'delete';
};
//end function
