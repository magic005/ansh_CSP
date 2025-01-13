// Example data for key players
const players = [
    "Marcus Rashford",
    "Rasmus Højlund",
    "Diogo Dalot",
    "Lisandro Martínez",
    "Antony Aura 😈"
];

function loadPlayers() {
    const playersList = document.getElementById('players-list');
    if (playersList) {
        players.forEach(player => {
            const listItem = document.createElement('li');
            listItem.textContent = player;
            playersList.appendChild(listItem);
        });
    }
}

const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); 
        document.getElementById('confirmation').style.display = 'block'; 
        contactForm.reset();
    });
}

document.addEventListener('DOMContentLoaded', loadPlayers);