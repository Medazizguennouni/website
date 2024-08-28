document.addEventListener('DOMContentLoaded', () => {

    function updateTotal() {
        let totalPrice = 0;
        const slides = document.querySelectorAll('.slide');

        slides.forEach(slide => {
            const quantity = parseInt(slide.querySelector('.quantity').textContent);
            const priceText = slide.querySelector('h1.text').textContent;
            const price = parseFloat(priceText.match(/(\d+(\.\d+)?)/)[0]);
            totalPrice += quantity * price;
        });

        document.querySelector('.total').textContent = totalPrice + ' dt';
    }

    const slides = document.querySelectorAll('.slide');

    slides.forEach(slide => {
        const increaseBtn = slide.querySelector('.increase');
        const decreaseBtn = slide.querySelector('.decrease');
        const quantitySpan = slide.querySelector('.quantity');

        increaseBtn.addEventListener('click', () => {
            let quantity = parseInt(quantitySpan.textContent);
            quantity++;
            quantitySpan.textContent = quantity;
            updateTotal();
        });

        decreaseBtn.addEventListener('click', () => {
            let quantity = parseInt(quantitySpan.textContent);
            if (quantity > 0) {
                quantity--;
                quantitySpan.textContent = quantity;
                updateTotal();
            }
        });
    });

    updateTotal();
});

document.addEventListener('DOMContentLoaded', () => {
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach(heart => {
        heart.addEventListener('click', () => {
            heart.style.color = heart.style.color === 'red' ? 'black' : 'red';
        });
    });
});

