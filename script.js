// Инициализация EmailJS с вашим public key
emailjs.init('H63GdWf3b0oZmdYVl');

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Предотвращение отправки формы

    // Отправка формы через EmailJS
    emailjs.sendForm('service_juhc04a', 'template_jiuoqveы', this)
        .then(function (response) {
            alert('Сообщение успешно отправлено!');
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            alert('Ошибка при отправке сообщения. Проверьте консоль для подробностей.');
            console.error('Ошибка отправки:', error);
        });
});
