// Инициализация EmailJS с вашим public key
emailjs.init('H63GdWf3b0oZmdYVl');

document.getElementById('contactForm').addEventListener('submit', function (e) {
    console.log('onclick14');

    e.preventDefault(); // Предотвращение отправки формы

    // Отправка формы через EmailJS
    emailjs.sendForm('service_juhc04a', 'template_jiuoqve', this)
        .then(function (response) {
            showPopup('Сообщение успешно отправлено!', true);
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            showPopup('Ошибка при отправке сообщения. Пожалуйста, попробуйте позже.', false);
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



/**
 * showPopup
 * 
 * @function
 * @name showPopup
 * @kind function
 * @param {any} message
 * @param {boolean} isSuccess?
 * @returns {void}
 */
function showPopup(message, isSuccess = true) {
    const popup = document.getElementById('popupMessage');
    const popupText = document.getElementById('popupText');

    popupText.textContent = message;
    popupText.style.color = isSuccess ? 'green' : 'red';
    popup.classList.add('show');

    // Закрытие попапа через несколько секунд
    setTimeout(() => {
        closePopup();
    }, 3000);
}

function closePopup() {
    const popup = document.getElementById('popupMessage');
    popup.classList.remove('show');
}

