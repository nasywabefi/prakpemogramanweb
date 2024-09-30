const spinnerWrapperE1 = document.querySelector('.spinner-wrapper');

// setTimeout(() => {
//     spinnerWrapperE1.computedStyleMap.opacity = '0';
// }, 1000);

window.addEventListener('load', () => {
    spinnerWrapperE1.style.opacity = '0';

    setTimeout(() => {
        spinnerWrapperE1.style.display = 'none';
    }, 10000);
})