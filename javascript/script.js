 document.addEventListener('DOMContentLoaded', function() {
  
    const subscribeForm = document.querySelector('.subscribe_form');
    subscribeForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const nickname = document.getElementById('nickname').value;
      const email = document.getElementById('email').value;
      console.log('Логин:', nickname);
      console.log('Почта:', email);
      console.log('данные введены успешно.');
      });
      
    });

    // тёмная тема

// script.js

// Функция переключения темы
function toggleTheme() {
    const body = document.body;
    const button = document.querySelector('.light-night-mode');
    
    // Переключаем класс темы на body
    body.classList.toggle('dark-theme');
    
    // Обновляем состояние кнопки (иконку)
    if (body.classList.contains('dark-theme')) {
        button.innerHTML = '<img src="./icons/dark-mode.png" alt="кнопка изменения темы">';
        localStorage.setItem('theme', 'dark');
    } else {
        button.innerHTML = '<img src="./icons/light-mode.png" alt="кнопка изменения темы">';
        localStorage.setItem('theme', 'light');
    }
}

// Устанавливаем тему при загрузке страницы
function applyStoredTheme() {
    const body = document.body;
    const button = document.querySelector('.light-night-mode');
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        button.innerHTML = '<img src="./icons/dark-mode.png" alt="кнопка изменения темы">';
    } else if (savedTheme === 'light') {
        body.classList.remove('dark-theme');
        button.innerHTML = '<img src="./icons/light-mode.png" alt="кнопка изменения темы">';
    } else {
        // Если тема не сохранена, используем системные настройки
        if (systemPrefersDark) {
            body.classList.add('dark-theme');
            button.innerHTML = '<img src="./icons/dark-mode.png" alt="кнопка изменения темы">';
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-theme');
            button.innerHTML = '<img src="./icons/light-mode.png" alt="кнопка изменения темы">';
            localStorage.setItem('theme', 'light');
        }
    }
}

// Обработчик для кнопки переключения темы
document.addEventListener('DOMContentLoaded', () => {
    applyStoredTheme();
    
    const themeButton = document.querySelector('.light-night-mode');
    if (themeButton) {
        themeButton.addEventListener('click', toggleTheme);
    }
    
    // Отслеживаем изменение системных настроек темы
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) { // Применяем только если пользователь не выбирал тему сам
            if (e.matches) {
                document.body.classList.add('dark-theme');
                themeButton.innerHTML = '<img src="./icons/dark-mode.png" alt="переключить на светлую тему">';
            } else {
                document.body.classList.remove('dark-theme');
                themeButton.innerHTML = '<img src="./icons/light-mode.png" alt="переключить на тёмную тему">';
            }
        }
    });
});
