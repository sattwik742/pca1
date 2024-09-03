function calculateDaysUntilDurgaPuja() {
    const today = new Date();
    const durgaPujaDate = new Date('2024-10-10'); // Durga Puja 2024 date (for Maha Saptami)

    // Calculate the difference in milliseconds
    const diffInMilliseconds = durgaPujaDate - today;

    // Convert milliseconds to days
    const daysLeft = Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24));

    return daysLeft;
}

function displayCountdown() {
    const daysLeft = calculateDaysUntilDurgaPuja();
    const countdownElement = document.getElementById('countdown');

    if (daysLeft > 0) {
        countdownElement.innerText = `${daysLeft} days left until Durga Puja 2024!`;
    } else if (daysLeft === 0) {
        countdownElement.innerText = "Today is Durga Puja 2024!";
    } else {
        countdownElement.innerText = "Durga Puja 2024 has already passed.";
    }
}

// Run the countdown on page load
displayCountdown();
