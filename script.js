function showPopup() {
const popupWindow = document.getElementById('popupWindow');
popupWindow.classList.add('show');
}

function closePopup() {
const popupWindow = document.getElementById('popupWindow');
popupWindow.classList.remove('show');
}

function toDaDiscord() {
    window.open('https://discord.com/invite/sBT8WbAH', '_blank');
}