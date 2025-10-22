const thumbnails = document.querySelectorAll('.thumbnail');
const preview = document.getElementById('preview');


const originalText = preview.textContent;

thumbnails.forEach(img => {

    img.addEventListener('mouseover', () => {
        preview.style.backgroundImage = `url(${img.src})`;
        preview.textContent = img.alt;
    });


    img.addEventListener('mouseout', () => {
        preview.style.backgroundImage = '';
        preview.textContent = originalText;
    });

    img.addEventListener('click', () => {
        preview.style.backgroundImage = `url(${img.src})`;
        preview.textContent = img.alt;
    });
});

