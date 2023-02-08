let paragraphElement = document.querySelector('p');

function changeParagraphText(event) {
    paragraphElement.textContent = 'Clicked!';
    console.log('Paragraph Clicked');
    // console.log(event);
}

function retrieveUserInput(event){
    let enteredText = inputElement.value;
    // let enteredText = event.target.value;
    // let enteredText = event.data; // This is a different (Only one cahr)
    console.log(enteredText);
    // console.log(event);
}
paragraphElement.addEventListener('click',changeParagraphText);

let inputElement = document.querySelector('input');
inputElement.addEventListener('input',retrieveUserInput);