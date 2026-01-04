const overlay = document.getElementById('overlay')
const btnClose = document.getElementById('closeBtn')
const btnOpen = document.getElementById('reopenBtn')

btnClose.addEventListener('click', () => {
    overlay.classList.remove('active');
});

btnOpen.addEventListener('click', () => {
    overlay.classList.add('active');
} );

