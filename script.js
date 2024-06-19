document.addEventListener("DOMContentLoaded", function () {
    const backToTop = document.getElementById("back-to-top");
   
    // Показать/скрыть кнопку при прокрутке страницы
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 300) {
        backToTop.style.display = "block";
      } else {
        backToTop.style.display = "none";
      }
    });
   
    // Плавная прокрутка при клике на кнопку
    backToTop.addEventListener("click", function (event) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  document.addEventListener('DOMContentLoaded', (event) => {
    const images = document.querySelectorAll('.images-container img');

    images.forEach((image) => {
        image.addEventListener('mouseover', () => {
            image.classList.add('highlight');
        });

        image.addEventListener('mouseout', () => {
            image.classList.remove('highlight');
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
  const loginButton = document.querySelector(".btn-small-green");
  const loginMessage = document.getElementById("login-message");

  loginButton.addEventListener("click", function() {
      // Отображаем сообщение
      loginMessage.style.display = "block";

      // Скрываем сообщение через 3 секунды (например)
      setTimeout(function() {
          loginMessage.style.display = "none";
      }, 3000); // 3000 миллисекунд = 3 секунды
  });
});

document.addEventListener("DOMContentLoaded", function() {
  // Получаем текущий год
  const currentYear = new Date().getFullYear();

  // Находим элемент с id "year" и устанавливаем его текст
  const yearElement = document.getElementById("year");
  yearElement.textContent = currentYear;
});

document.addEventListener("DOMContentLoaded", function() {
  // Функция для обновления времени
  function updateTime() {
      const timeDisplay = document.getElementById("time-display");
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
  }

  // Обновляем время сразу при загрузке страницы
  updateTime();

  // Обновляем время каждую секунду
  setInterval(updateTime, 1000);
});

// Функция для отображения рекламного сообщения
function showAdMessage(message) {
  alert(message);
}

// Массив рекламных сообщений
const adMessages = [
  "Покупайте наши товары со скидкой 20%! Акция действует до конца месяца.",
  "Закажите услуги нашего партнера и получите бонус!",
  "Посетите наш сайт для получения эксклюзивных предложений."
];

// Настройки
const interval = 100000; // Интервал между сообщениями (в миллисекундах)
let showOnce = false; // Показывать сообщения однократно или многократно

// Функция для показа рекламных сообщений
function startAdMessages() {
  let currentMessageIndex = 0;

  const adInterval = setInterval(() => {
      showAdMessage(adMessages[currentMessageIndex]);

      currentMessageIndex++;
      if (currentMessageIndex >= adMessages.length) {
          if (showOnce) {
              clearInterval(adInterval);
          }
          currentMessageIndex = 0;
      }
  }, interval);
}

// Запуск показа рекламных сообщений при загрузке страницы
window.onload = startAdMessages;
document.addEventListener("DOMContentLoaded", function() {
  const cookieConsent = document.getElementById("cookie-consent");
  const acceptCookiesBtn = document.getElementById("accept-cookies");

  // Проверка, приняты ли cookies
  if (!localStorage.getItem("cookiesAccepted")) {
      cookieConsent.style.display = "flex";
  }

  // Обработчик нажатия на кнопку "Принять"
  acceptCookiesBtn.addEventListener("click", function() {
      localStorage.setItem("cookiesAccepted", "true");
      cookieConsent.style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", function() {
  // Получаем элементы модального окна
  var modal = document.getElementById("imageModal");
  var modalImg = document.getElementById("modalImg");
  var span = document.getElementsByClassName("modal__close")[0];

  // Добавляем обработчик события для всех изображений с классом card__img
  var images = document.querySelectorAll(".card__img");
  images.forEach(function(image) {
      image.addEventListener("click", function() {
          modal.style.display = "block";
          modalImg.src = this.src;
      });
  });

  // Обработчик для закрытия модального окна
  span.onclick = function() {
      modal.style.display = "none";
  };

  // Закрытие модального окна при клике вне изображения
  modal.onclick = function(event) {
      if (event.target === modal) {
          modal.style.display = "none";
      }
  };
});
