const submitButton = document.querySelector('.submit-btn');
const thankYou =document.querySelector('.second');
const firstRate = document.querySelector('.first')
const btns = Array.from(document.querySelectorAll('.btn'));
const span = document.querySelector('span')



// Add event listener 
submitButton.addEventListener('click', () => {
    if ( thankYou.classList.contains('second')) {
        thankYou.classList.add('active');
        firstRate.classList.remove('active')
    }
});

Array.from(btns).forEach(btn => {
    btn.addEventListener('click', e => {
        console.log(e)
        const rating = e.target.textContent
        span.textContent = rating
    })
})



btns.forEach((button) => {
  btns.addEventListener('click', (e) => {
    console.log(button.innerHTML);
  });
});

