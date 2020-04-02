// as soon as JS file loads, we run this function to get 
// all the items for the sidebar
function getUserChats() {
    fetch('http://demo.codingnomads.co:8080/muttsapp/users/3/chats')
        //  info retrieved in the fetch request returns a response
        //  object. The response object is assigned to parameter in 
        //  the following method as "response"
        .then(response => response.json())
         // response object needs to be turned into JS object for parsing 
         // that process is above, then result passed to next '.then' method
        
        //  The object created in the last step is assigned to "dataObj", 
        //  then the data object is passed to a function that handles 
        //  preview box creation
         .then(dataObj => createPreviewBoxes(dataObj))
};

getUserChats();

function previewBoxClick(event) {
    // gets value of "data-chat_id" attribute on clicked element
    let chatID = event.target.dataset.chat_id;
    // value of "chatID" passed to this url, to create dynamically 
    // generated API based on which preview box is clicked
    fetch('http://demo.codingnomads.co:8080/muttsapp/users/3/chats/' + chatID)
        // info retrieved in fetch request returns response object.
        // response object assigned to parameter in following method as "response"
        .then(response => response.json())
        .then(dataObj => createChatBubbles(dataObj))

}

const createChatBubble = (msg) => {

    let chatBubble = document.createElement('div');
    
    chatBubble.classList.add("chat-bubble", "out")

    let paragraph = document.createElement('p');
    paragraph.innerHTML = msg;

    chatBubble.appendChild(paragraph);

    let wrapper = document.getElementById('chat-bubble-wrapper');
    wrapper.appendChild(chatBubble)
}

// Create an event listener for when the form is submitted  

let sendMessage = document.getElementById("send-message");
sendMessage.addEventListener('submit', function(event){
    event.preventDefault();
    // always use for form submission
    var msg = document.getElementById("new-message").value;
    console.log(msg)
    createChatBubble (msg)
    document.getElementById("new-message").value = "";
    // resets value in form submission
    // next step: figure out to send via http request to database to populate database and persist data 
})



getUserChats();

//


// then, save the user input
// then, call (invoke) the createChatBubble function
// pass the user input to the chatbubble creation

(function getUsers(){
    fetch('url')
        .then(response => { 
            return response.json()
        })
        .then( dataObj => {
            console.log(dataObj)
            let chatsArr = dataObj.data;
            chatsArr.forEach( (chat) => {
                createPreviewBox(chat)
            })
        })
    })();

function createChatBubbles(dataObj) {
    let messageArr = dataObj.data;
    messageArr.forEach(chat => createChatBubble(chat))
}

function createPreviewBoxes(dataObj){
    let chatsArr = dataObj.data;
    chatsArr.forEach(chat => createPreviewBox(chat))
}

function previewBoxClick(event) {
    let chatID = event.target.dataset.chat_id;
    fetch('http://demo.codingnomads.co:8080/muttsapp/users/3/chats/' + chatID)
        .then(ressponse => ressponse.json())
        .then(dataObj => createChatBubbles(dataObj))
}

function createPreviewBox() {

    console.log("hi");

    //Create a div element and assign it to a variable called previewBox
    let previewBox = document.createElement('div');
    // add a class of "message-preview-box" to the previewBox element you jsut created
    previewBox.classList.add('message-preview-box');

    // Create a div element and assign it to a variable called imageWrap

    let imageWrap = document.createElement('div');

    // add a class of "img-wrap" to the imageWrap element you just created

    imageWrap.classList.add('img-wrap');

    // Create an img element and assign it to a variable called image

    let image = document.createElement('img');

    // add a src attribute and alt attribute to the image element you just created 
    //(hint: google for reference the JS method 'setAttribute')
    // example: document.getElementsByTagName("H1")[0].setAttribute("class", "democlass");

    image.setAttribute("src", "dataObj.photo_url");
    image.setAttribute("alt","muy caliente");

    // <img src="./daniel_henney.jpg" alt="hawt">

    // append the image to the imageWrap

    imageWrap.appendChild(image);

    // append the imageWrap to the previewBox
    previewBox.appendChild(imageWrap);

    // Create a div element and assign it to a variable called textWrap
    let textWrap = document.createElement('div');

    // add a class of "message-text-wrap" to the textWrap element you just created

    textWrap.classList.add('message-text-wrap');    

    // Create a paragraph element and assign it to a variable called p1

    let p1 = document.createElement('p');

    // set the innerHTML of p1 equal to the name "Mcgruff the Crime Dog"

    p1.innerHTML = dataObj.chat_name;

    // Create a second paragraph element and assign it to a variable called p2

    let p2 = document.createElement('p');
 
    // set the innerHTML of p2 equal to the message "Take a Bite Out of Crime"

    p2.innerHTML = dataObj.last_message;

    // append p1 to the textWrap

    textWrap.appendChild(p1);

    // append p2 to the textWrap

    textWrap.appendChild(p2);

    // append the textWrap to the previewBox

    previewBox.appendChild(textWrap);

    // Create a div element and assign it to a variable called dateWrap

    let dateWrap = document.createElement('div');

    // add a class of "date-wrap" to the dateWrap element you just created

    dateWrap.classList.add("date-wrap");

    // Create a paragraph element and assign it to a variable called dateP

    let dateP = document.createElement('p');

    // set the innerHTML of dateP equal to the name "3/25/20"

    dateP.innerHTML = new Date(dataObj.date_sent).toLocaleDateString;

    // append dateP to the dateWrap

    dateWrap.appendChild(dateP)

    // append the dateWrap to the previewBox

    previewBox.appendChild(dateWrap);

    // Select the div with the id of "message-wrapper" (already on the HTML page)
    // and assign that to a new variable named "messageWrap".

    let messageWrap = document.getElementById("message-wrapper")

    // append the previewBox element to the messageWrap

    messageWrap.appendChild(previewBox);

 }

//  createPreviewBox(dataObj)

 //Invoke the createPreviewBox function to see it work!

//  1. styling messed up after applying js 
//  2. createPreviewBox() not working
//  3. createChatBubble() not working
/// html file for login, include css and js : form 
// date object analog clock on codpen.io

//setinterval method 
/// put together from idea to creation 
// 

function createPreviewBox(chat) {
    //Make Wrapper Div and attach Click listener
    let previewBox = document.createElement('div');
    previewBox.classList.add('message-preview-box');
    previewBox.setAttribute('data-chat_id', chat.sender_id)
    previewBox.addEventListener('click', previewBoxClick)

    // make Image wrap, image element, and append to previewWrap
    let imageWrap = document.createElement('div');
    imageWrap.setAttribute('data-chat_id', chat.sender_id)
    imageWrap.classList.add('img-wrap');
    let image = document.createElement('img');
    image.setAttribute('data-chat_id', chat.sender_id)
    image.setAttribute('src', chat.photo_url)
    image.setAttribute('alt', 'default icon')
    imageWrap.appendChild(image)
    previewBox.appendChild(imageWrap)

    //Make text wrap and paragraphs with chat name and last message, and append them to the previewWrap 
    let textWrap = document.createElement('div')
    textWrap.setAttribute('data-chat_id', chat.sender_id)
    textWrap.classList.add("message-text-wrap")
    let p1 = document.createElement('p')
    p1.setAttribute('data-chat_id', chat.sender_id)
    p1.innerHTML = chat.chat_name;
    let p2 = document.createElement('p');
    p2.setAttribute('data-chat_id', chat.sender_id)
    p2.innerHTML = chat.last_message
    textWrap.appendChild(p1)
    textWrap.appendChild(p2)
    previewBox.appendChild(textWrap)

    //Make date wrap, paragraph with date, and append them to the preview Wrap
    let dateWrap = document.createElement("div");
    dateWrap.setAttribute('data-chat_id', chat.sender_id);
    dateWrap.classList.add("date-wrap");
    let dateP = document.createElement('p')
    dateP.setAttribute('data-chat_id', chat.sender_id)
    dateP.innerHTML = new Date(chat.date_sent).toLocaleDateString();
    dateWrap.appendChild(dateP)
    previewBox.appendChild(dateWrap)

    //append all element we just create to the div with the id "message-wrapper" already on the page
    let messageWrap = document.getElementById("message-wrapper")
    messageWrap.appendChild(previewBox)
 }

function newUser() {
    let postData = {
        first_name: "",
        last_name: "",
        username: "",
        photo_url: ""
    }
    let postParams = {
       method: 'POST', // *GET, POST, PUT, DELETE, etc.
       headers: {
           'Content-Type': 'application/json; charset=UTF-8'
       },
       body: JSON.stringify(postData)
    }
    fetch('http://demo.codingnomads.co:8080/muttsapp/users/', postParams)
        .then(res => res.json())
        .then(res => console.log(res))
};