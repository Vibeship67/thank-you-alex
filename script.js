document.getElementById('gratitudeBtn').addEventListener('click', function() {
    createStars();
    this.textContent = 'Gratitude Expressed! ✨';
    this.disabled = true;
    setTimeout(() => {
        this.textContent = 'Express Gratitude';
        this.disabled = false;
    }, 3000);
});

function createStars() {
    const container = document.getElementById('starsContainer');
    const starEmojis = ['⭐', '✨', '💫', '🌟'];
    
    for (let i = 0; i < 8; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.textContent = starEmojis[Math.floor(Math.random() * starEmojis.length)];
        star.style.left = Math.random() * 100 + '%';
        star.style.animationDelay = i * 0.2 + 's';
        container.appendChild(star);
        
        setTimeout(() => {
            star.remove();
        }, 3000 + i * 200);
    }
}

// Animate on page load
window.addEventListener('load', function() {
    document.querySelector('.card').style.opacity = '1';
});