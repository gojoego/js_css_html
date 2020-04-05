let userID = parseInt("3");

// as soon as JS file loads, we run this function to get 
// all the items for the sidebar
function getUserChats() {
    //document.getElementById("message-preview-wrapper").innerHTML = "";
    fetch("http://demo.codingnomads.co:8080/muttsapp/users/" + userId + "/chats/")
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
    console.log(event.target.dataset)
    let chatID = event.target.dataset.chat_id;
    let senderID = event.target.dataset.sender_id;
    document.getElementById('send-message').dataset.chat_id = chatID;
    // value of "chatID" passed to this url, to create dynamically 
    // generated API based on which preview box is clicked
    fetch('http://demo.codingnomads.co:8080/muttsapp/users/3/chats/' + senderID)
        // info retrieved in fetch request returns response object.
        // response object assigned to parameter in following method as "response"
        .then(response => response.json())
        .then(dataObj => createChatBubbles(dataObj))
        // response object needs to be turned into JS object for parsing
        // that process is above, then result is passed to next '.then' method

        // object created in last step assigned to "dataObj"
        // then data object passed to function that handles creation of 
        // chat message bubble
        
    }

// attach "submit" listener to message form 
let sendMessage = document.getElementById('send-message');
sendMessage.addEventListener('submit', function(event){
    event.preventDefault();
    // always use for form submission
    var msg = document.getElementById('new-message').value;
    // console.log(msg);
    var messageObj = {
        message:msg,
        sender_id:userID,
        chat_id:event.target.dataset.chat,
    } 
    createChatBubble (messageObj);
    document.getElementById("new-message").value = "";
    // resets value in form submission
    // next step: figure out to send via http request to database to 
    // populate database and persist data 
});

/*  ===============
    These next two functions iterate over array of objects, 
    and pass objects to the functions that create elements 
================= */

function createChatBubbles(dataObj) {
    document.getElementById('chat-bubble-wrapper').innerHTML="";
    let messageArr = dataObj.data;
    messageArr.forEach(chat => createChatBubble(chat))
}

function createPreviewBoxes(dataObj){
    let chatsArr = dataObj.data;
    chatsArr.forEach(chat => createPreviewBox(chat))
}

/*  ===============
    These next two functions create elements on the page
================= */

/*
* This function creates a single "chat bubble" 
* (an individual message element in the chat)
* and adds it to the page this function takes 
* in one parameter, a message object
*/ 

const createChatBubble = (msg) => {
    // create chat bubble wrap and the 
    // paragraph that holds the chat message
    let chatBubble = document.createElement('div');
    
    let sentClassName;
    if(msg.sender_id === userID){
        sentClassName = "out";
    } else {
        sentClassName = "in"
    }

    chatBubble.classList.add("chat-bubble", sentClassName)

    let paragraph = document.createElement('p');
    console.log(msg)
    paragraph.innerText = msg.message;

    //Append the created elements to the page
    chatBubble.appendChild(paragraph);

    let wrapper = document.getElementById('chat-bubble-wrapper');
    wrapper.prepend(chatBubble)
}

/*
* This function creates a single "Chat Preview Box" 
* (an individual sidebar item and its children) and 
* adds it to the page this function takes in one 
* parameter, a chat object
*/ 

 
function createPreviewBox(chat) {

    console.log("logged");

    //Create a div element and assign it to a variable called previewBox
    let previewBox = document.createElement('div');
    // add a class of "message-preview-box" to the previewBox element you jsut created
    previewBox.classList.add('message-preview-box');

    previewBox.setAttribute('data-chat_id', chat.chat_id)
    previewBox.setAttribute('data-sender_id', chat.sender_id)
    previewBox.addEventListener('click', previewBoxClick)

    // make Image wrap, image element, and append to previewWrap

    // Create a div element and assign it to a variable called imageWrap

    let imageWrap = document.createElement('div');

    imageWrap.setAttribute('data-chat_id', chat.chat_id)
    imageWrap.setAttribute('data-sender_id', chat.sender_id)

    // add a class of "img-wrap" to the imageWrap element you just created

    imageWrap.classList.add('img-wrap');

    // Create an img element and assign it to a variable called image

    let image = document.createElement('img');

    image.setAttribute('data-chat_id', chat.chat_id)
    image.setAttribute('data-sender_id', chat.sender_id)

    // add a src attribute and alt attribute to the image element you just created 
    //(hint: google for reference the JS method 'setAttribute')
    // example: document.getElementsByTagName("H1")[0].setAttribute("class", "democlass");

    image.setAttribute('src', chat.photo_url)
    image.setAttribute('alt', 'default icon')

    // <img src="./daniel_henney.jpg" alt="hawt">

    // append the image to the imageWrap

    imageWrap.appendChild(image);

    // append the imageWrap to the previewBox
    previewBox.appendChild(imageWrap);

    //Make text wrap and paragraphs with chat name 
    //and last message, and append them to the previewWrap 

    // Create a div element and assign it to a variable called textWrap
    let textWrap = document.createElement('div');

    textWrap.setAttribute('data-chat_id', chat.chat_id);
    textWrap.setAttribute('data-sender_id', chat.sender_id)

    // add a class of "message-text-wrap" to the textWrap element you just created

    textWrap.classList.add('message-text-wrap');    

    // Create a paragraph element and assign it to a variable called p1

    let p1 = document.createElement('p');

    p1.setAttribute('data-chat_id', chat.chat_id);
    p1.setAttribute('data-sender_id', chat.sender_id)

    // set the innerHTML of p1 equal to the name "Mcgruff the Crime Dog"

    p1.innerHTML = chat.chat_name;

    // Create a second paragraph element and assign it to a variable called p2

    let p2 = document.createElement('p');

    p2.setAttribute('data-chat_id', chat.chat_id);
    p2.setAttribute('data-sender_id', chat.sender_id)
 
    // set the innerHTML of p2 equal to the message "Take a Bite Out of Crime"

    p2.innerHTML = chat.last_message;

    // append p1 to the textWrap

    textWrap.appendChild(p1);

    // append p2 to the textWrap

    textWrap.appendChild(p2);

    // append the textWrap to the previewBox

    previewBox.appendChild(textWrap);

    //Make date wrap, paragraph with date, and append them to the preview Wrap

    // Create a div element and assign it to a variable called dateWrap

    let dateWrap = document.createElement('div');

    dateWrap.setAttribute('data-chat_id', chat.chat_id);
    dateWrap.setAttribute('data-sender_id', chat.sender_id);

    // add a class of "date-wrap" to the dateWrap element you just created

    dateWrap.classList.add("date-wrap");

    // Create a paragraph element and assign it to a variable called dateP

    let dateP = document.createElement('p');

    dateP.setAttribute('data-chat_id', chat.chat_id);
    dateP.setAttribute('data-sender_id', chat.sender_id);

    // set the innerHTML of dateP equal to the name "3/25/20"

    dateP.innerHTML = new Date(chat.date_sent).toLocaleDateString();

    // append dateP to the dateWrap

    dateWrap.appendChild(dateP)

    // append the dateWrap to the previewBox

    previewBox.appendChild(dateWrap);

    // append all element we just create to the div with the id "message-wrapper" 
    // already on the page


    // Select the div with the id of "message-wrapper" (already on the HTML page)
    // and assign that to a new variable named "messageWrap".

    let messageWrap = document.getElementById("message-wrapper")

    // append the previewBox element to the messageWrap

    messageWrap.appendChild(previewBox);

 }


// then, save the user input
// then, call (invoke) the createChatBubble function
// pass the user input to the chatbubble creation

// (function getUsers(){
//     fetch('http://demo.codingnomads.co:8080/muttsapp/users/')
//         .then(response => { 
//             return response.json()
//         })
//         .then( dataObj => {
//             console.log(dataObj)
//             let chatsArr = dataObj.data;
//             chatsArr.forEach( (chat) => {
//                 createPreviewBox(chat)
//             })
//         })
//     })();


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

/*
 * Our first post request example
 */
function sendNewMessage(msgObj) {
    let postParams = {
       method: 'POST', // *GET, POST, PUT, DELETE, etc.
       headers: {
           'Content-Type': 'application/json; charset=UTF-8',
           "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
           "Access-Control-Allow-Origin": "*"
       },
       body: JSON.stringify(msgObj)
    }
    fetch('http://demo.codingnomads.co:8080/muttsapp/users/' + userID+ "/chat", postParams)
        .then(res => res.json())
        .then(res => console.log(res))
};


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