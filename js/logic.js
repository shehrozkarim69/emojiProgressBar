const progressText = document.querySelector('#progress');
const emojiText = document.querySelector('#emoji');
const loader = document.querySelector('#loader');

const emojis = ["😴", "😪", "😕", "😐", "🙂", "😊", "😀", "😃", "😄", "😁", "🥳"];
let progress = 0;
let lastUpdateTime = null;

function updateProgress(timestamp) {
    if (!lastUpdateTime) {
        lastUpdateTime = timestamp;
    }

    const deltaTime = timestamp - lastUpdateTime;

    if (deltaTime >= 120) {
        progress += 1;
        progressText.textContent = `${progress}%`;
        
        if (progress % 10 === 0 && progress <= 100) {
            const emojiIndex = progress / 10;
            emojiText.textContent = emojis[emojiIndex];
            emojiText.classList.add("active");

            setTimeout(() => {
                emojiText.classList.remove("active");
            }, 500);
        }

        lastUpdateTime = timestamp;
    }

    if (progress < 100) {
        requestAnimationFrame(updateProgress);
    }
}
requestAnimationFrame(updateProgress);