const preview = document.getElementById('preview');

const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach(img => {
    img.addEventListener('mouseover', function() {
        preview.style.backgroundImage = `url('${img.src}')`;
        preview.textContent = img.alt; 
    });

    img.addEventListener('mouseout', function() {
        preview.style.backgroundImage = '';
        preview.textContent = 'Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.';
    });
});
