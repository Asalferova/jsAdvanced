// Задание 1
// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

// Реализуйте геттер allBooks, который возвращает текущий список книг.

// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

// class Library {
//   #books = [];
//   get allBooks() {
//     return this.#books;
//   }
//   addBook(title) {
//     if (this.hasBook(title))
//       throw new Error("Такая книга уже есть в библиотеке");
//     if (title === "") throw new Error("Некорректное название книги");
//     this.#books.push(title);
//   }
//   removeBook(title) {
//     if (!this.hasBook(title)) {
//       throw new Error("Такой книги нет в библиотеке");
//     }
//     const index = this.#books.indexOf(title);
//     this.#books.splice(index, 1);
//   }
//   hasBook(title) {
//     return this.#books.includes(title);
//   }
//   constructor(books) {
//     const uniqueBooks = [...new Set(books)];
//     if (uniqueBooks.length !== books.length) {
//       throw new Error("Начальный список книг содержит дубликаты");
//     }
//     this.#books = uniqueBooks;
//   }
// }

// // Проверки

// const books = new Library(["Братья Карамазовы", "Капитанская дочка"]);

// console.log(books.allBooks); // Выводит: ['Братья Карамазовы', 'Капитанская дочка']

// books.addBook("Преступление и наказание");
// console.log(books.allBooks); // Выводит: ['Братья Карамазовы', 'Капитанская дочка', 'Преступление и наказание']

// books.removeBook("Капитанская дочка");
// console.log(books.allBooks); // Выводит: ['Братья Карамазовы', 'Преступление и наказание']

// console.log(books.hasBook("Братья Карамазовы")); // Выводит: true
// console.log(books.hasBook("Преступление и наказание")); // Выводит: true
// console.log(books.hasBook("Капитанская дочка")); // Выводит: false

// books.addBook(""); // Генерирует ошибку "Некорректное название книги"
// books.addBook("Преступление и наказание"); // Генерирует ошибку "Такая книга уже есть в библиотеке"
// books.removeBook("Война и мир"); // Генерирует ошибку "Такой книги нет в библиотеке"

// Задание 2
// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

function addReview() {
  const reviewInput = document.getElementById("review");
  const reviewText = reviewInput.value;

  if (reviewText.length < 50 || reviewText.length > 500) {
    throw new Error("Длина отзыва должна быть от 50 до 500 символов");
  }

  const reviewElement = document.createElement("div");
  reviewElement.classList.add("REW");
  reviewElement.textContent = reviewText;

  const reviewsContainer = document.getElementById("reviewsContainer");

  reviewsContainer.appendChild(reviewElement);

  reviewInput.value = "";
}

const submitButton = document.getElementById("submitReview");
submitButton.addEventListener("click", addReview);
