
function declaracionVariables() {
    const nombre = document.getElementById('nombre').value;
    const edad = parseInt(document.getElementById('edadVar').value);
    const esEstudiante = JSON.parse(document.getElementById('esEstudiante').value);
    
    const mensaje = 
    `¡Hola ${nombre}! Es un gusto conocerte. ¿Tienes ${edad}? ¡Fantástico! ` +
    `\n¿Te encuentras estudiando? ${esEstudiante ? '¡Eso es genial! La mejor de las suertes.' : '¿No? Qué lástima.'}`;
    
    document.getElementById('resultadoFase1').innerText = mensaje;
}

function operacionesMatematicas() {
    const a = parseInt(document.getElementById('numeroA').value);
    const b = parseInt(document.getElementById('numeroB').value);
    const suma = a + b;
    const resta1 = a - b;
    const resta2 = b - a;
    const multip = a * b;
    const divide1 = a / b;
    const divide2 = b / a;

    const mensaje = `Suma: ${suma}, \nResta (A - B): ${resta1}, \nResta (B - A): ${resta2}, \nMultiplicación: ${multip}, \nDivisión (A / B): ${divide1}, \nDivisión (B / A): ${divide2}`;
    
    document.getElementById('resultadoFase2').innerText = mensaje; 
}

function operadoresLogicos() {
    const esMayordeEdad = JSON.parse(document.getElementById('edad').value);
    const tieneLicencia = JSON.parse(document.getElementById('licencia').value);
    
    const puedeConducir = esMayordeEdad && tieneLicencia;
    const mensaje = puedeConducir 
        ? `¡Bienvenido! Puedes conducir porque eres mayor de edad y tienes licencia.`
        : `Lo siento, no puedes conducir. ${esMayordeEdad ? 'No tienes licencia.' : 'No eres mayor de edad.'}`;
    
    document.getElementById('resultadoFase3').innerText = mensaje;
}
