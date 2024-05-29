document.addEventListener("DOMContentLoaded", function() {
    var rutInput = document.getElementById("rut");

    rutInput.addEventListener("input", function() {
        var rut = rutInput.value;

        // Eliminar caracteres no numéricos del RUT
        rut = rut.replace(/\D/g, "");

        // Formatear el RUT con guiones y puntos
        var rutFormatted = rut.replace(/^(\d{2})(\d{3})(\d{3})(\w{1})$/, "$1.$2.$3-$4");

        rutInput.value = rutFormatted;
    });
    
    var formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar el envío del formulario

        // Obtener los valores del formulario
        var rut = document.getElementById("rut").value;
        var nombre = document.getElementById("nombre").value;
        var apellidoPaterno = document.getElementById("apellido-paterno").value;
        var apellidoMaterno = document.getElementById("apellido-materno").value;
        var edad = document.getElementById("edad").value;
        var email = document.getElementById("email").value;
        var fono = document.getElementById("fono").value;

        // Construir el mensaje de resumen
        var resumen = `
            Resumen de Postulación:
            - RUT: ${rut}
            - Nombre: ${nombre}
            - Apellido Paterno: ${apellidoPaterno}
            - Apellido Materno: ${apellidoMaterno}
            - Edad: ${edad}
            - Correo Electrónico: ${email}
            - Fono de Contacto: ${fono}
        `;

        // Mostrar el mensaje de resumen en una alerta
        alert(resumen);
    });
});
