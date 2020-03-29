const createChatBubble = (outIn) => {
    let chatBubble = document.createElement('div');
    chatBubble.classList.add("chat-bubble", outIn)

    let paragraph = document.createElement('p');
    paragraph.innerHTML = "ni hao";

    chatBubble.appendChild(paragraph);

    let wrapper = document.getElementById('chat-bubble-wrapper');
    wrapper.appendChild(chatBubble)
}

/*  this loop will create 10 chat bubbles, with 
    alternating out and in class added to the bubble */
for(let idx = 0; idx < 10;idx++){
   if (idx % 2 === 0){
        createChatBubble('out')
   } else {
       createChatBubble('in')
   }
}

