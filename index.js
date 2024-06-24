let cards = document.getElementById("cards")

let url = 'https://jsonplaceholder.typicode.com/comments';




async function getData(url){
    try{
        let response = await fetch(url);
        let data = await response.json();
        showData(data);
    }
    catch(err){
        console.log(err);
    }
}

function showData(data) {
    for (const iterator of data) {
        let card = document.createElement('div')
        let name = document.createElement('p')
        let email = document.createElement('p')
        let body = document.createElement('p')

        name.innerHTML = `<strong>Имя:</strong> ${iterator.name}`;
        email.innerHTML = `<strong>Email:</strong> ${iterator.email}`;
        body.innerHTML = `<strong>Комментарий:</strong> ${iterator.body}`;  

        card.classList.add('card')

        card.appendChild(name)
        card.appendChild(email)
        card.appendChild(body)

        cards.appendChild(card)
    }
}
getData(url)


