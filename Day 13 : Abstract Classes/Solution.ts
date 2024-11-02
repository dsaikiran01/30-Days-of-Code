abstract class Book {
    title: string
    author: string
    price: number

    constructor(title: string, author: string, price: number) {
        this.title = title;
        this.author = author;
        this.price = price;
    }

    abstract display(): void
}

class MyBook extends Book {
    constructor(title: string, author: string, price: number) {
        super(title, author, price);
    }

    display(): void {
        console.log("Title:", this.title);
        console.log("Author:", this.author);
        console.log("Price:", this.price);
    }
}

function main() {
    let title: string = readLine();
    let author: string = readLine();
    let price: number = +readLine();
    let book: MyBook = new MyBook(title, author, price);
    book.display();
}


