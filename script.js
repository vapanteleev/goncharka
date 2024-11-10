// Инициализация EmailJS с вашим public key
emailjs.init('H63GdWf3b0oZmdYVl');

document.getElementById('contactForm').addEventListener('submit', function (e) {
    console.log('onclick14');

    e.preventDefault(); // Предотвращение отправки формы

    // Отправка формы через EmailJS
    emailjs.sendForm('service_juhc04a', 'template_jiuoqve', this)
        .then(function (response) {
            alert('Сообщение успешно отправлено!');
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            alert('Ошибка при отправке сообщения. Проверьте консоль для подробностей.');
            console.error('Ошибка отправки:', error);
        });
});



// Открыть модальное окно при клике на кнопку "Записаться"
document.querySelector('.cta-button').addEventListener('click', function () {
    document.getElementById('modal').style.display = 'flex';
    document.getElementById('modal').style.visibility = 'initial';

});

// Закрыть модальное окно при клике на крестик
function closeModal() {
    // document.getElementById('modal').style.display = 'none';
    document.getElementById('modal').style.visibility = 'hidden';

}

// Закрыть модальное окно при клике за его пределы
window.onclick = function (event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}