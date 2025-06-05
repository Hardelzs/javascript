let slider = document.querySelector('.slider')
let nextBtn = document.getElementById('next')
let prevBtn = document.getElementById('prev')

nextBtn.onclick = () => {
   slider.append( slider.querySelector('img:first-child'));
   console.log('slider', slider);
   
}
prevBtn.onclick = () => {
   slider.prepend( slider.querySelector('img:last-child'));
   console.log('slider', slider);
   
}