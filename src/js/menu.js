// Находим элементы
const menuToggle = document.querySelector('.menu-toggle'); // Кнопка
const sidebar = document.querySelector('.sidebar'); // Меню

// Флаг для отслеживания состояния меню
let isMenuOpen = false;

// Добавляем обработчик события на кнопку
menuToggle.addEventListener('click', function (event) {
  event.preventDefault(); // Отменяем стандартное поведение ссылки

  // Переключаем состояние меню
  if (isMenuOpen) {
    sidebar.style.left = '-300px'; // Скрываем меню
    isMenuOpen = false;
  } else {
    sidebar.style.left = '0'; // Показываем меню
    isMenuOpen = true;
  }
});