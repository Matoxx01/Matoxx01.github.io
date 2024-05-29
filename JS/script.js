document.addEventListener('DOMContentLoaded', () => {
    const url = 'https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=qcKI5vO7PI0h4oFNwnhsiXrGMU6kmoxH';  // Reemplaza con la URL de tu API

    const contenidoDiv = document.getElementById('contenidoapi');
    fetch(url)
        .then(response => response.json())
        .then(data => {
        })
});