const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);
const images = document.querySelectorAll('.photo');
console.log(images)
images.forEach(image => {
    image.addEventListener('click', x => {
        lightbox.classList.add('active');
        const block = document.createElement('div');
        block.classList.add('lightbox-panel');
        const img = document.createElement('img'); 
        img.src = image.querySelector('img').src;
        if (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }
        block.appendChild(img);
        lightbox.appendChild(block);
    });
    
});
lightbox.addEventListener('click', x => {
    if (x.target !== x.currentTarget) {
        return;
    }
    lightbox.classList.remove('active')
})
