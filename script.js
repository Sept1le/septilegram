const lightblock = document.createElement('div');
const lightbox = document.createElement('div');
lightbox.classList.add('lightbox');
lightblock.classList.add('lightblock');
lightblock.appendChild(lightbox);
document.body.appendChild(lightblock);
const images = document.querySelectorAll('.photo');
const gallery = document.querySelector('.septilegram');
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
        const content = document.querySelector('.lightbox-content');
        content.classList.add('active');
        block.appendChild(img);
        gallery.classList.add('hidden');
        lightbox.appendChild(block);
        lightbox.appendChild(content);
    });
    
});
lightbox.addEventListener('click', x => {
    if (x.target !== x.currentTarget) {
        return;
    }
    gallery.classList.remove('hidden');
    lightbox.classList.remove('active');
})
