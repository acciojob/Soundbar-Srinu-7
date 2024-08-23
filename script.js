//your JS code here. If required.
// Array to hold audio elements
const sounds = [
    new Audio('sounds/sound1.mp3'),
    new Audio('sounds/sound2.mp3'),
    new Audio('sounds/sound3.mp3'),
    new Audio('sounds/sound4.mp3')
];

// Function to play a specific sound
function playSound(index) {
    // Stop all sounds first
    stopAllSounds();
    // Play the selected sound
    sounds[index].play();
}

// Function to stop all sounds
function stopAllSounds() {
    sounds.forEach(sound => {
        sound.pause();
        sound.currentTime = 0;
    });
}

// Add event listeners to each button
document.getElementById('sound1').addEventListener('click', () => playSound(0));
document.getElementById('sound2').addEventListener('click', () => playSound(1));
document.getElementById('sound3').addEventListener('click', () => playSound(2));
document.getElementById('sound4').addEventListener('click', () => playSound(3));
document.getElementById('stop').addEventListener('click', stopAllSounds);
