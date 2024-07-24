function Calcular() {
    try {
        // Obtener los valores del primer grupo de inputs
        var garantiaAportaciones1 = parseFloat(document.getElementById("campo1-1").value) || 0;
        var garantiaCertificado1_1 = parseFloat(document.getElementById("campo1-2").value) || 0;
        var garantiaCertificado2_1 = parseFloat(document.getElementById("campo1-3").value) || 0;
        var garantiaAhorros1 = parseFloat(document.getElementById("campo1-4").value) || 0;
        var garantiaCosechaOro1 = parseFloat(document.getElementById("campo1-5").value) || 0;
        var garantiaAhorrosVacaciones1 = parseFloat(document.getElementById("campo1-6").value) || 0;
        var garantiaAhorrosNavidenos1 = parseFloat(document.getElementById("campo1-7").value) || 0;

        // Calcular el total del primer grupo
        var resultado = garantiaAportaciones1 + garantiaCertificado1_1 + garantiaCertificado2_1 
        + garantiaAhorros1 + garantiaCosechaOro1 + garantiaAhorrosVacaciones1 + garantiaAhorrosNavidenos1;

        // Formatear el resultado con separadores de miles y decimales
        var resultadoFormateado = resultado.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

        // Mostrar el resultado en el campo de Monto de Préstamo del primer grupo
        document.getElementById("campo1-8").innerHTML = "TOTAL: $" + resultadoFormateado;

        // Llamar a la función para actualizar los colores de los campos
        actualizarColorCampos();

        // Obtener los valores del segundo grupo de inputs (tasas)
        var tasaAportaciones = parseFloat(document.getElementById("campo7-1").value) || 0;
        var tasaCertificado1 = parseFloat(document.getElementById("campo7-2").value) || 0;
        var tasaCertificado2 = parseFloat(document.getElementById("campo7-3").value) || 0;
        var tasaAhorros = parseFloat(document.getElementById("campo7-4").value) || 0;
        var tasaCosechaOro = parseFloat(document.getElementById("campo7-5").value) || 0;
        var tasaAhorrosVacaciones = parseFloat(document.getElementById("campo7-6").value) || 0;
        var tasaAhorrosNavidenos = parseFloat(document.getElementById("campo7-7").value) || 0;

        // Calcular los resultados del segundo grupo de inputs si el resultado no es cero
        if (resultado !== 0) {
            var aportaciones = (tasaAportaciones + 6) / 12;
            var certificado1 = (tasaCertificado1 + 6) / 12;
            var certificado2 = (tasaCertificado2 + 6) / 12;
            var ahorros = (tasaAhorros+ 6) / 12;
            var cosechaOro = ( tasaCosechaOro + 6) / 12;
            var ahorrosVacaciones = (tasaAhorrosVacaciones + 5.5) / 12;
            var ahorrosNavidenos = (tasaAhorrosNavidenos + 5.5) / 12;

            var aportaciones1 = (garantiaAportaciones1 / resultado) * aportaciones;
            var certificado11 = (garantiaCertificado1_1 / resultado) * certificado1;
            var certificado12 = (garantiaCertificado2_1  / resultado) * certificado2;
            var ahorros1 = (garantiaAhorros1 / resultado) * ahorros;
            var acosechaOro1 = (garantiaCosechaOro1  / resultado) * cosechaOro;
            var ahorrosVacaciones1 = (garantiaAhorrosVacaciones1  / resultado) * ahorrosVacaciones;
            var ahorrosNavidenos1 = (garantiaAhorrosNavidenos1  / resultado) * ahorrosNavidenos;

            // Mostrar los resultados en el segundo grupo de inputs
            document.getElementById("campo2-1").value = aportaciones.toFixed(2).replace(/\.?0+$/, '');
            document.getElementById("campo2-2").value = certificado1.toFixed(2).replace(/\.?0+$/, '');
            document.getElementById("campo2-3").value = certificado2.toFixed(2).replace(/\.?0+$/, '');
            document.getElementById("campo2-4").value = ahorros.toFixed(2).replace(/\.?0+$/, '');
            document.getElementById("campo2-5").value = cosechaOro.toFixed(2).replace(/\.?0+$/, '');
            document.getElementById("campo2-6").value = ahorrosVacaciones.toFixed(2).replace(/\.?0+$/, '');
            document.getElementById("campo2-7").value = ahorrosNavidenos.toFixed(2).replace(/\.?0+$/, '');

            document.getElementById("campo8-1").value = aportaciones1.toFixed(2).replace(/\.?0+$/, '');
            document.getElementById("campo8-2").value = certificado11.toFixed(2).replace(/\.?0+$/, '');
            document.getElementById("campo8-3").value = certificado12.toFixed(2).replace(/\.?0+$/, '');
            document.getElementById("campo8-4").value = ahorros1.toFixed(2).replace(/\.?0+$/, '');
            document.getElementById("campo8-5").value = acosechaOro1.toFixed(2).replace(/\.?0+$/, '');
            document.getElementById("campo8-6").value = ahorrosVacaciones1.toFixed(2).replace(/\.?0+$/, '');
            document.getElementById("campo8-7").value = ahorrosNavidenos1.toFixed(2).replace(/\.?0+$/, '');

            // Calcular la Tasa de Préstamo y mostrar en el campo correspondiente del segundo grupo
            var total_tasaPrestamo = aportaciones1 + certificado11+ certificado12 + ahorros1 + acosechaOro1 + ahorrosVacaciones1 + ahorrosNavidenos1;
            document.getElementById("campo8-8").value = total_tasaPrestamo.toFixed(2).replace(/\.?0+$/, '');
        } else {
            console.warn('El resultado del primer cálculo es cero, no se puede dividir por cero.');
        }
    } catch (e) {
        console.error('Error en la función Calcular:', e);
    }
}

function Plazo_fijos_a_combinar() {
    try {
     
        var garantiaCertificado1 = parseFloat(document.getElementById("campo4-1").value) || 0;
        var garantiaCertificado2 = parseFloat(document.getElementById("campo4-2").value) || 0;
        var garantiaCertificado3 = parseFloat(document.getElementById("campo4-3").value) || 0;
        var garantiaCertificado4 = parseFloat(document.getElementById("campo4-4").value) || 0;
        var garantiaCertificado5 = parseFloat(document.getElementById("campo4-5").value) || 0;

     
        var resultado = garantiaCertificado1 + garantiaCertificado2 + garantiaCertificado3 + garantiaCertificado4 + garantiaCertificado5;

      
        var resultadoFormateado = resultado.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

        document.getElementById("campo4-8").innerHTML = "TOTAL: $" + resultadoFormateado;
       
        actualizarColorCampos();

        // Obtener los valores del segundo grupo de inputs (tasas)
        var tasaCertificado1 = parseFloat(document.getElementById("campo10-1").value) || 0;
        var tasaCertificado2 = parseFloat(document.getElementById("campo10-2").value) || 0;
        var tasaCertificado3 = parseFloat(document.getElementById("campo10-3").value) || 0;
        var tasaCertificado4 = parseFloat(document.getElementById("campo10-4").value) || 0;
        var tasaCertificado5 = parseFloat(document.getElementById("campo10-5").value) || 0;

        // Calcular los resultados del segundo grupo de inputs si el resultado no es cero
        if (resultado !== 0) {
            var certificado1 = (tasaCertificado1 + 6) / 12;
            var certificado2 = (tasaCertificado2 + 6) / 12;
            var certificado3 = (tasaCertificado3 + 6) / 12;
            var certificado4 = (tasaCertificado4 + 6) / 12;
            var certificado5 = (tasaCertificado5 + 6) / 12;

            var certificado1Contrib = (garantiaCertificado1 / resultado) * certificado1;
            var certificado2Contrib = (garantiaCertificado2 / resultado) * certificado2;
            var certificado3Contrib = (garantiaCertificado3 / resultado) * certificado3;
            var certificado4Contrib = (garantiaCertificado4 / resultado) * certificado4;
            var certificado5Contrib = (garantiaCertificado5 / resultado) * certificado5;

            // Mostrar los resultados en los campos de tasa de certificados combinadas
            document.getElementById("campo5-1").value = certificado1.toFixed(2).replace(/\.?0+$/, '');
            document.getElementById("campo5-2").value = certificado2.toFixed(2).replace(/\.?0+$/, '');
            document.getElementById("campo5-3").value = certificado3.toFixed(2).replace(/\.?0+$/, '');
            document.getElementById("campo5-4").value = certificado4.toFixed(2).replace(/\.?0+$/, '');
            document.getElementById("campo5-5").value = certificado5.toFixed(2).replace(/\.?0+$/, '');

            // Mostrar las contribuciones en los campos de tasa de certificados anual
            document.getElementById("campo9-1").value = certificado1Contrib.toFixed(2).replace(/\.?0+$/, '');
            document.getElementById("campo9-2").value = certificado2Contrib.toFixed(2).replace(/\.?0+$/, '');
            document.getElementById("campo9-3").value = certificado3Contrib.toFixed(2).replace(/\.?0+$/, '');
            document.getElementById("campo9-4").value = certificado4Contrib.toFixed(2).replace(/\.?0+$/, '');
            document.getElementById("campo9-5").value = certificado5Contrib.toFixed(2).replace(/\.?0+$/, '');

            // Calcular la Tasa de Préstamo y mostrar en el campo correspondiente del tercer grupo
            var totalTasaPrestamo = certificado1Contrib + certificado2Contrib + certificado3Contrib + certificado4Contrib + certificado5Contrib;
            document.getElementById("campo5-8").value = totalTasaPrestamo.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        } else {
            console.warn('El resultado del primer cálculo es cero, no se puede dividir por cero.');
        }
    } catch (e) {
        console.error('Error en la función Plazo_fijos_a_combinar:', e);
    }
}

function calcularTotal() {
    var Aportaciones5 = parseFloat(document.getElementById("campo3-1").value) || 0;
    var Certificado_1 = parseFloat(document.getElementById("campo3-2").value) || 0;
    var Certificado_2 = parseFloat(document.getElementById("campo3-3").value) || 0;
    var Ahorros = parseFloat(document.getElementById("campo3-4").value) || 0;
    var Cosecha_de_Oro = parseFloat(document.getElementById("campo3-5").value) || 0;
    var Ahorros_Vacaciones = parseFloat(document.getElementById("campo3-6").value) || 0;
    var Ahorros_Navideños = parseFloat(document.getElementById("campo3-7").value) || 0;

    var resultado = Aportaciones5 + Certificado_1 + Certificado_2 
        + Ahorros + Cosecha_de_Oro + Ahorros_Vacaciones + Ahorros_Navideños;

    // Formatear el resultado con separadores de miles y decimales
    var resultadoFormateado = resultado.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

     document.getElementById("campo3-8").innerHTML = "TOTAL: $" + resultadoFormateado;
       
        actualizarColorCampos();
   

   
}

function calcularMontosMultiplicados() {
    var garantiaCertificado1 = parseFloat(document.getElementById("campo4-1").value) || 0;
    var garantiaCertificado2 = parseFloat(document.getElementById("campo4-2").value) || 0;
    var garantiaCertificado3 = parseFloat(document.getElementById("campo4-3").value) || 0;
    var garantiaCertificado4 = parseFloat(document.getElementById("campo4-4").value) || 0;
    var garantiaCertificado5 = parseFloat(document.getElementById("campo4-5").value) || 0;

    var resultadoCertificado1 = (garantiaCertificado1 * 1.1).toFixed(2);
    var resultadoCertificado2 = (garantiaCertificado2 * 1.1).toFixed(2);
    var resultadoCertificado3 = (garantiaCertificado3 * 1.1).toFixed(2);
    var resultadoCertificado4 = (garantiaCertificado4 * 1.1).toFixed(2);
    var resultadoCertificado5 = (garantiaCertificado5 * 1.1).toFixed(2);

    document.getElementById("campo6-1").value = resultadoCertificado1;
    document.getElementById("campo6-2").value = resultadoCertificado2;
    document.getElementById("campo6-3").value = resultadoCertificado3;
    document.getElementById("campo6-4").value = resultadoCertificado4;
    document.getElementById("campo6-5").value = resultadoCertificado5;

    // Calcular y mostrar el total a pignorar
    var totalPignorar = parseFloat(resultadoCertificado1) +
                        parseFloat(resultadoCertificado2) +
                        parseFloat(resultadoCertificado3) +
                        parseFloat(resultadoCertificado4) +
                        parseFloat(resultadoCertificado5);
    
    document.getElementById("campo6-8").value = totalPignorar.toFixed(2);
    actualizarColorCampos();
}

function actualizarColorCampos() {
    // Seleccionar todos los campos de entrada en el contenedor
    var inputs = document.querySelectorAll('.input-group input');
    inputs.forEach(function(input) {
        if (input.value) {
            input.classList.add('input-lleno');
        } else {
            input.classList.remove('input-lleno');
        }
    });
}

function confirmarYLimpiarCampos(metodo) {
    if (confirm("¿Estás seguro de que quieres borrar los campos?")) {
        metodo();
    }
}

function limpiarCampos() {
    document.getElementById('campo1-1').value = '';
    document.getElementById('campo1-2').value = '';
    document.getElementById('campo1-3').value = '';
    document.getElementById('campo1-4').value = '';
    document.getElementById('campo1-5').value = '';
    document.getElementById('campo1-6').value = '';
    document.getElementById('campo1-7').value = '';
    document.getElementById('campo1-8').value = '';

    actualizarColorCampos();
}

function limpiarCampos2() {
    document.getElementById('campo3-1').value = '';
    document.getElementById('campo3-2').value = '';
    document.getElementById('campo3-3').value = '';
    document.getElementById('campo3-4').value = '';
    document.getElementById('campo3-5').value = '';
    document.getElementById('campo3-6').value = '';
    document.getElementById('campo3-7').value = '';
    document.getElementById('campo3-8').value = '';

    actualizarColorCampos();
}

function limpiarCampos3() {
    document.getElementById('campo4-1').value = '';
    document.getElementById('campo4-2').value = '';
    document.getElementById('campo4-3').value = '';
    document.getElementById('campo4-4').value = '';
    document.getElementById('campo4-5').value = '';
    document.getElementById('campo4-6').value = '';
    document.getElementById('campo4-8').value = '';

    actualizarColorCampos();
}


document.addEventListener('DOMContentLoaded', function() {
    const inputs = Array.from(document.querySelectorAll('.input-group input'));
    
    // Añadir evento 'keydown' a cada campo de entrada se utiliza para los salto de input con tecla enter 
    inputs.forEach((input, index) => {
        input.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault(); 
                // Evitar el comportamiento predeterminado del Enter
                // Mover al siguiente campo si no es el último
                if (index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            }
        });
    });
});
