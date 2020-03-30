let myForm = document.getElementById("my-js-form");


myForm.addEventListener('submit', function (event) {
    event.preventDefault();
    
    // data being taken from form
    let name = document.getElementById("user-name").value;
    let age = document.getElementById("user-age").value;
    let icecream = document.getElementById("ice-cream").value;

    // checking to see if input was logged 
    console.log(name, age, icecream)

    // document keyword 
    // grabbing input and displaying 
    // document.getElementById('name').innerText = name;
    // document.getElementById('age').innerText = age;
    // document.getElementById('ice-cream').innerText = icecream;

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

