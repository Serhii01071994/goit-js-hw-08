import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const text = document.querySelector('textarea[name="message"]');

const LOCALSTORAGE_KEY = 'feedback-form-state';
const formData = {};

form.addEventListener('input', throttle(savedForm, 500));
textArea();
// сохранение в LocalStorage
function savedForm(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

// отправка формы
form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  if (email.value === '' || text.value === '') {
    alert('Все поля должні быть заполнены!');
  } else {
    console.log(formData);
    form.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
  }
}

// функция на загрузку страницы
function textArea() {
  const savedText = localStorage.getItem(LOCALSTORAGE_KEY);
  if (savedText) {
    const formDataInput = JSON.parse(savedText);
    email.value = formDataInput.email ?? '';
    text.value = formDataInput.message ?? '';
    formData.email = email.value;
    formData.message = text.value;
  }
}