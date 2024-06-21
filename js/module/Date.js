
const dateTimeParagraph = document.querySelector('#Time');

function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true};
    const formattedDateTime = now.toLocaleDateString('es-CO', options);

    dateTimeParagraph.textContent = formattedDateTime;
}

updateDateTime();

setInterval(updateDateTime, 1000);