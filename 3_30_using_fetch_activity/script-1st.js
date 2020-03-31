getUserChats();

const createChatBubble = (msg) => {

    let chatBubble = document.createElement('div');

    chatBubble.classList.add("chat-bubble", "out");

    let paragraph = document.createElement('p');
    paragraph.innerText = msg;

    chatBubble.appendChild(paragraph);

    let wrapper = document.getElementById('chat-bubble-wrapper');
    wrapper.appendChild(chatBubble);
}


let newMessageForm = document.getElementById('send-message')

newMessageForm.addEventListener('submit', function(e){
    e.preventDefault();
    let msg = document.getElementById('new-message').value;
    createChatBubble(msg);
    document.getElementById('new-message').value = "";
});


function getUserChats() {

    fetch('http://demo.codingnomads.co:8080/muttsapp/users/3/chats')
        .then(res => res.json())
        .then( dataObj => createPreviewBoxes(dataObj))
};
// populate chat bubbles with things from dataObj

// for every new bu


// nums.forEach(num => createChatBubble(msg))

function createPreviewBoxes(dataObj){
    let chatsArr = dataObj.data;
    chatsArr.forEach(chat => createPreviewBox(chat))
}

function createMessage(dataObj){
    let msgArr = dataObj.data;
    msgArr.forEach(message => createChatBubble(message))
}


 function createPreviewBox(chat) {
    //Make Wrapper Div
    let previewBox = document.createElement('div');
    previewBox.classList.add('message-preview-box');
    previewBox.setAttribute('data-chat_id', chat.sender_id)
    previewBox.addEventListener('click', previewBoxClick)

    let imageWrap = document.createElement('div');
    imageWrap.setAttribute('data-chat_id', chat.sender_id)
    imageWrap.classList.add('img-wrap');
    let image = document.createElement('img');
    image.setAttribute('data-chat_id', chat.sender_id)
    image.setAttribute('src', chat.photo_url)
    image.setAttribute('alt', 'default icon')
    imageWrap.appendChild(image)
    previewBox.appendChild(imageWrap)

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

    let dateWrap = document.createElement("div");
    dateWrap.setAttribute('data-chat_id', chat.sender_id);
    dateWrap.classList.add("date-wrap");
    let dateP = document.createElement('p')
    dateP.setAttribute('data-chat_id', chat.sender_id)
    dateP.innerHTML = new Date(chat.date_sent).toLocaleDateString();
    dateWrap.appendChild(dateP)
    previewBox.appendChild(dateWrap)

    let messageWrap = document.getElementById("message-wrapper")
    messageWrap.appendChild(previewBox)
 }

 function previewBoxClick(event){
    // console.log(event.target.dataset.chat_id)
    let chatID = event.target.dataset.chat_id;
    fetch('http://demo.codingnomads.co:8080/muttsapp/users/3/chats/' + chatID)
        .then(res => res.json())
        .then(dataObj => console.log(dataObj))

 }
 


 function newUser() {
     let postData = {
         "first_name": "Amber",
         "last_name": "Vauthier",
         "username": "amberV",
         "photo_url": ""
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