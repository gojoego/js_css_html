let myForm = document.getElementById("my-js-form");



myForm.addEventListener('submit', function (event) {
    event.preventDefault();
    
    // data being taken from form
    let username = document.getElementById("user-name").value;
    let userage = document.getElementById("user-age").value;
    let icecream = document.getElementById("ice-cream").value;

    // checking to see if input was logged 
    console.log(username, userage, icecream)

    // document keyword 
    // grabbing input and displaying 
    // document.getElementById('name').innerHTML = username;
    // document.getElementById('age').innerHTML = usernage;
    // document.getElementById('ice-cream').innerHTML = icecream;

    let newDiv = document.createElement("div")

    let usernameparagraph = document.createElement("p")
    usernameparagraph.innerHTML = username;
    newDiv.appendChild(paragraph);
    
    let userageparagraph = document.createElement("p")
    userageparagraph.innerHTML = username;
    newDiv.appendChild(paragraph);

    let icecreamparagraph = document.createElement("p")
    icecreamparagraph.innerHTML = username;
    newDiv.appendChild(paragraph);

    document.getElementsByTagName("body")[0].prepend(newDiv);




/*
    let newDiv = document.createElement("div");

    let newP = document.createElement("p");
    newP.innerText = username;
    newDiv.appendChild(newP)

    newP = document.createElement("p");
    newP.innerText = userage;
    newDiv.appendChild(newP)

    newP = document.createElement("p");
    newP.innerText = icecream;
    newDiv.appendChild(newP)
    document.getElementById("my-js-form").appendChild(newDiv);

*/
})

