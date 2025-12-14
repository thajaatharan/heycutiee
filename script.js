// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {
    // Show surprise message after 5 seconds
    setTimeout(function() {
        const surpriseMessage = document.getElementById('surpriseMessage');
        if (surpriseMessage) {
            surpriseMessage.classList.remove('hidden');
            // Smoothly scroll to the surprise message
            setTimeout(function() {
                surpriseMessage.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center' 
                });
            }, 100);
        }
    }, 5000); // 5 seconds delay
});

