function makeParagraphsPurple (){
     createDivElementAndAppend()
     createQuote()
     const paragraphArray = document.querySelectorAll('p');
     console.log(paragraphArray);
     Array.from(paragraphArray).forEach(p => p.style.color = 'green')
     let diffP = document.querySelector(".paragraph-wrap.not-ariel > p");
     diffP.style.fontFamily = '"Ariel", serif'
 }

var createDivElementAndAppend = () => {
    let divElement = document.createElement('div');
    divElement.classList.add("paragraph-wrap", "not-arial");
    let paragraphElement = document.createElement('p');
    // paragraphElement.setAttribute('id', "dif-p")
    paragraphElement.innerHTML = "keep your head up and sit up straight and smile";
    divElement.appendChild(paragraphElement);
    let bodyElements = document.getElementsByTagName('body');
    bodyElements[0].appendChild(divElement)
}

var createQuote = () => {
    let divElement = document.createElement('div');
    divElement.classList.add('paragraph-wrap');
    let paragraphElement = document.createElement('p');
    paragraphElement.innerHTML = "all things are difficult before they're";
    divElement.appendChild(paragraphElement);
    let bodyElements = document.getElementsByTagName('body');
    bodyElements[0].appendChild(divElement)
}

makeParagraphsPurple()