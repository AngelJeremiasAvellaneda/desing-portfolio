// Scroll hacia la sección "Conóceme" con efecto smooth
const scrollBtn = document.querySelector('.scroll-down');
if (scrollBtn) {
    scrollBtn.addEventListener('click', () => {
        const target = document.getElementById('conoceme');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
}
// Scroll suave al hacer click en scroll-down
document.querySelector('.scroll-down').addEventListener('click', () => {
    document.querySelector('#conoceme').scrollIntoView({ behavior: 'smooth' });
});
