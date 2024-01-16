// Создайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах. Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.

// Страница добавления отзыва:

// Поле для ввода названия продукта.
// Текстовое поле для самого отзыва.
// Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.

// Страница просмотра отзывов:

// Показывает список всех продуктов, о которых были оставлены отзывы.
// При клике на название продукта отображается список всех отзывов по этому продукту.
// Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage).


reviewForm = document.getElementById("review-form");

if(reviewForm){
    reviewForm.addEventListener("submit", function(event) {
        event.preventDefault();
        let productName = document.getElementById("product-name").value;
        let reviewText = document.getElementById("review-text").value;
    
        // Получаем текущий список отзывов из LocalStorage
        let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    
        // Добавляем новый отзыв в список
        reviews.push({ productName: productName, reviewText: reviewText });
    
        // Сохраняем обновленный список отзывов в LocalStorage
        localStorage.setItem("reviews", JSON.stringify(reviews));
    
        // Очищаем форму
        document.getElementById("review-form").reset();
    
        // Перенаправляем пользователя на страницу просмотра отзывов
        window.location.href = "view-reviews.html";
      });
    
      
}

let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    
      // Отображаем список продуктов
      let productList = document.getElementById("product-list");
      reviews.forEach(function(review) {
        let listItem = document.createElement("li");
        let productName = document.createElement("h2");
        productName.textContent = review.productName;
        listItem.appendChild(productName);
    
        // Добавляем обработчик события для отображения отзывов по клику на название продукта
        productName.addEventListener("click", function() {
          showReviews(review.productName);
        });
    
        productList.appendChild(listItem);
      });



  // Функция для отображения отзывов по выбранному продукту
  function showReviews(productName) {
    // Очищаем список продуктов
    productList.innerHTML = "";

    // Находим отзывы по выбранному продукту
    let selectedReviews = reviews.filter(function(review) {
      return review.productName === productName;
    });

    // Отображаем отзывы
    selectedReviews.forEach(function(review) {
      let listItem = document.createElement("li");
      let reviewText = document.createElement("p");
      reviewText.textContent = review.reviewText;
      listItem.appendChild(reviewText);

      // Добавляем кнопку "Удалить" для удаления отзыва
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Удалить";
      deleteButton.addEventListener("click", function() {
        deleteReview(review);
      });
      listItem.appendChild(deleteButton);

      productList.appendChild(listItem);
    });
  }

  // Функция для удаления отзыва
  function deleteReview(review) {
    // Находим индекс отзыва в списке
    let index = reviews.findIndex(function(item) {
      return item.productName === review.productName && item.reviewText === review.reviewText;
    });

    // Удаляем отзыв из списка
    if (index !== -1) {
      reviews.splice(index, 1);
    }

    // Обновляем список отзывов в LocalStorage
    localStorage.setItem("reviews", JSON.stringify(reviews));

    // Перезагружаем страницу для обновления списка отзывов
    window.location.reload();
  }