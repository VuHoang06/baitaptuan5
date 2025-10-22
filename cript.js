// Chọn div preview
const preview = document.getElementById('preview');

// Chọn tất cả ảnh thumbnail
const thumbnails = document.querySelectorAll('.thumbnail');

// Lặp qua từng ảnh
thumbnails.forEach(img => {
    img.addEventListener('mouseover', function() {
        // Khi di chuột vào, thay đổi background của div preview
        preview.style.backgroundImage = `url('${img.src}')`;
        preview.textContent = img.alt; // Hiển thị alt
    });

    img.addEventListener('mouseout', function() {
        // Khi rời chuột, trả về trạng thái ban đầu
        preview.style.backgroundImage = '';
        preview.textContent = 'Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.';
    });
});
