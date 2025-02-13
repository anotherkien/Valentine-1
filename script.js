const messages = [
    "Are you sure?",
    "Really really sure??",
    "Are you positive Daisy?",
    "Baby please...",
    "Just think about it!",
    "If you say no, I will be really sad...😢😢😢",
    "I will be very sad...",
    "I will be craving for your marshmallows...",
    "10 rounds for your yes my daisy 🥺...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}