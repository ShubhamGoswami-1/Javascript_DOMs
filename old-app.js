// document.body.children[1].children[0].href = 'https://google.com';

let anchorElement = document.getElementById('external-link');
anchorElement.href = 'https://google.com';

// anchorElement = document.querySelector('#external-id');
// anchorElement.href = 'https://codechef.com';

//Add Element:-

// 1. Create the new Element
let newAnchorElement = document.createElement('a');
newAnchorElement.href = 'https://google.com';
newAnchorElement.textContent = 'This leads to google';

// 2. Get access to the parent element that should hold the new element 
let firstParagraph = document.querySelector('p');

// 3. Insert the new element into the parent element content
firstParagraph.append(newAnchorElement);

// Remove Element
// 1. Select the element u want to remove

let firstH1Element = document.querySelector('h1');

// 2. Remove it!

// firstH1Element.remove();
firstH1Element.parentElement.removeChild(firstH1Element);

// Move elements
// switch order of two paragraphs;

firstParagraph.parentElement.append(firstParagraph);

// InnerHtML properties
console.log(firstParagraph.innerHTML);

firstParagraph.innerHTML = 'hi ! This is <strong>important</strong>';