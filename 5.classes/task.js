// task 1

class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        return this.state *= 1.5;
    }

    get state() {
        return this._state;
    }

    set state(value) {
        if (value < 0) {
            return this._state = 0;
        } else if (value > 100) {
            return this._state = 100;
        } else {
            return this._state = value;
        }
    }
}

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);  
        this.type = "detective";
    }
}

// task 2

class Library {
    constructor (name) {
        this.name = name;
        this.books = [];
    }

    addBook (book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy (type, value) {
        let result = this.books.find(book => book[type] === value);
        if (result == undefined) {
            return null;
        } else {
            return result;
        }
    }

    giveBookByName (bookName) {
        let result = this.books.find(book => book.name === bookName);
        let index = this.books.indexOf(result);
        if (result == undefined) {
            return null;
        } else {
            this.books.splice(index, 1);
            return result;
        }
    }
}

// test

const library = new Library("Test Library");

library.addBook(
    new DetectiveBook(
        "Артур Конан Дойл",
        "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
        2019,
        1008
      )
);
library.addBook(
    new FantasticBook(
        "Аркадий и Борис Стругацкие",
        "Пикник на обочине",
        1972,
        168
      )
);
library.addBook(
    new NovelBook(
        "Герберт Уэллс", 
        "Машина времени", 
        1895, 
        138)
);
library.addBook(
    new Magazine("Мурзилка", 
        1924, 
        60)
);
library.addBook(
    new NovelBook(
        "Джонстон Маккалли",
        "Проклятие Капистрано",
        1919,
        136
    )
);

console.log("Количество книг в библиотеке: " + library.books.length);
console.log("Найденная книга: " + library.findBookBy("releaseDate", 1919).name);
let givenBook = library.giveBookByName("Мурзилка");
console.log("Состояние отданной книги при выдаче: " + givenBook.state);
console.log("Отданная книга: " + givenBook.name);
console.log("Количество книг в библиотеке после выдачи: " + library.books.length);
givenBook.state = 25;
console.log("Состояние отданной книги после повреждения: " + givenBook.state);
givenBook.fix();
console.log("Состояние отданной книги после ремонта: " + givenBook.state);
library.addBook(givenBook);
console.log("Количество книг в библиотеке после возврата: " + library.books.length);

//task 3 

class Student {
    constructor (name) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subject) {
        if (mark < 2 || mark > 5) {
            return;
        } else {
            if (!this.marks.hasOwnProperty(subject)) {
            this.marks[subject] = [];
            }
            this.marks[subject].push(mark);
        }
    }
    
    getAverageBySubject(subject) {
        const initialValue = 0;
        if (!this.marks.hasOwnProperty(subject)){
            return 0;
        } else {
            return this.marks[subject].reduce((accumulator, currentValue) => accumulator + currentValue / this.marks[subject].length, initialValue);
        }
    }

    getAverage() {
        const initialValue = 0;
        const subjects = Object.keys(this.marks);
        if (!this.marks) {
            return 0;
        } else {
            return subjects.reduce((accumulator, index) => accumulator + this.getAverageBySubject(index) / subjects.length, initialValue);
        }
    }
}