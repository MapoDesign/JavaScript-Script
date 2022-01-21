let library=[
    new book('I Promessi Sposi','Manzoni',1827,true),
    new book('Harry Potter','Rowling',1997,true),
    new book('La tua seconda vita comincia quando capisci di averne una sola','Raphaell Giordano',2015,false),
    new book('La vita è come una medusa non puoi prenderla a badilate','Guy Browning',2004,false),
    new book('La Divina Commedia','Dante Alighieri',1472,true)
]

function book(title,author,year,pages) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
}

console.log(library);

function createLibrary() {
    let background = true;
    let table = document.getElementById('libreria');
    table.innerHTML = '';
    table.setAttribute('class','table');
    for (const book of library) {
        let item = document.createElement('div');
        if (!!background) {
            item.setAttribute('class','book flex bgGrey');
            background = false;
        } else {
            item.setAttribute('class','book flex');
            background = true;
        }
        let authorDiv = document.createElement('div');
        authorDiv.append(book.author);
        let titleDiv = document.createElement('div');
        titleDiv.setAttribute('class','width50')
        titleDiv.append(book.title);
        let yearDiv = document.createElement('div');
        yearDiv.append(book.year);
        item.appendChild(titleDiv);
        item.appendChild(authorDiv);
        item.appendChild(yearDiv);
        console.log(item);
        table.appendChild(item);
        //row +='<div><div>'+book.title+'</div><div>'+book.author+'</div><div>'+book.year+'</div><div>'+book.pages+'</div></div>';
    }
}

createLibrary();