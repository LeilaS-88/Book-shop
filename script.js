// Body
// https://images.unsplash.com/photo-1590598687530-581406de2262?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGxpYnJhcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60

// header
let header = document.createElement('header');
header.className = 'header';
document.body.append(header);

let title = document.createElement('h1');
title.className = 'title';
header.prepend(title);
title.innerHTML = 'Book shop';

let greeting = document.createElement('h2');
greeting.className = 'greeting';
header.append(greeting);
greeting.innerHTML = 'Welcome to amazing book shop';

// main
let main = document.createElement('main');
main.className = 'main';
document.body.append(main);

let main_div = document.createElement('div');
main_div.className = 'main_div';
main.append(main_div);

let book_catalog = document.createElement('div');
book_catalog.className = 'book_catalog';
main_div.prepend(book_catalog);
book_catalog.innerHTML = 'Book catalog';

let order_books = document.createElement('div');
order_books.className = 'order_books';
main_div.append(order_books);
order_books.innerHTML = 'Order books';

let book_card = document.createElement('div');
book_card.id = 'book_card';
book_catalog.append(book_card);

let book_name = document.createElement('div');

/*
fetch('books.json') //path to the file with json data
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
        });

function appendData (data) {
    let mainContainer = document.getElementById('book-card');
    for ( let i = 0; i < data.length; i++) {
        let image = document.createElement()
    } 
} 
*/       

// footer
let footer = document.createElement('footer');
footer.className = 'footer';
document.body.append(footer);

let designer = document.createElement('a');
designer.className = 'designer';
designer.innerHTML = 'LeilaS-88';
footer.append(designer);
