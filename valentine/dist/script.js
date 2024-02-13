let yesButtonScale = 1; // Initial scale of the Yes button
let noButtonScale = 1; // Initial scale of the No button
let buttonsVisible = true; // Variable to track button visibility

function handleYes() {
    document.getElementById('kittenImg').src = 'https://via.placeholder.com/400?text=Happy+Kitten';
    document.querySelector('h1').innerText = 'I love you';
    // Hide the buttons only if they are currently visible
    if (buttonsVisible) {
        document.getElementById('yesButton').style.display = 'none';
        document.getElementById('noButton').style.display = 'none';
        buttonsVisible = false;
    }
}

function handleNo() {
    document.getElementById('kittenImg').src = 'https://via.placeholder.com/400?text=Sad+Kitten';
    document.querySelector('h1').innerText = 'Are you sure?';
    // Adjust button scales
    document.getElementById('yesButton').style.transform = `scale(${yesButtonScale})`;
    document.getElementById('noButton').style.transform = `scale(${noButtonScale})`;
    // Update button scales
    yesButtonScale += 0.1;
    noButtonScale -= 0.1;
}