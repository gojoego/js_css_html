const HTTP = new XMLHttpRequest();
const url = 'http://demo.codingnomads.co:8080/muttsapp/users/'
HTTP.open("GET", url);
HTTP.send();

HTTP.onreadystatechange = () => {
    console.log(HTTP.responseText)
}

function getUserChats()
fetch('http://demo.codingnomads.co:8080/muttsapp/users/')
    .then(res => res.json())
    .then(data => console.log(data.json))
        let chatsArr = 