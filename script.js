document.addEventListener('DOMContentLoaded', function () {
    const coffeeLink = document.getElementById('coffee-link');
    if (coffeeLink) coffeeLink.href = 'menu.html';
    const menuLink = document.getElementById('menu-link');
    if (menuLink) menuLink.href = 'menu.html';
    const phoneNumber = '37498029920';
    const orderButtons = document.querySelectorAll('.coffee-btn');
    orderButtons.forEach(function (btn) {
        const drinkName = btn.dataset.name || 'напиток';
        const message = encodeURIComponent(`Здравствуйте! Хочу заказать: ${drinkName}`);
        btn.addEventListener('click', function () {
            window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
        });
    });
});