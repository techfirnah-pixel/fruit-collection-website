// script.js

document.querySelectorAll('.fruit-item button').forEach(button => {
    button.addEventListener('click', function() {
        alert('Added to cart!');
    });
});