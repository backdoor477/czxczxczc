document.addEventListener('DOMContentLoaded', () => {
    // Enter screen functionality
    const enterScreen = document.getElementById('enter-screen');
    enterScreen.addEventListener('click', () => {
        enterScreen.classList.add('hidden');
        // Start playing music when entering
        const audio = document.getElementById('background-music');
        audio.play();
    });

    const discordTags = {
        'fangs': '@niggerzoid',  // Replace with actual Discord tag
        'quan': '@y_n_w'   // Replace with actual Discord tag
    };

    const showNotification = () => {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = 'Copied Discord tag';
        document.body.appendChild(notification);

        // Trigger animation
        setTimeout(() => notification.classList.add('show'), 10);

        // Remove notification after animation
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    };

    document.querySelectorAll('.discord-tag').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const username = button.closest('.profile').querySelector('.username').textContent;
            const discordTag = discordTags[username];
            
            navigator.clipboard.writeText(discordTag)
                .then(() => {
                    showNotification();
                })
                .catch(err => {
                    console.error('Failed to copy:', err);
                });
        });
    });

    // Audio functionality
    const audio = document.getElementById('background-music');
    const audioToggle = document.getElementById('audio-toggle');
    let isPlaying = false;

    const playAudio = () => {
        audio.play();
        isPlaying = true;
        audioToggle.classList.remove('muted');
    };

    const pauseAudio = () => {
        audio.pause();
        isPlaying = false;
        audioToggle.classList.add('muted');
    };

    audioToggle.addEventListener('click', () => {
        if (isPlaying) {
            pauseAudio();
        } else {
            playAudio();
        }
    });

    // Start playing when user interacts with the page
    document.addEventListener('click', () => {
        if (!isPlaying) {
            playAudio();
        }
    }, { once: true });
});
