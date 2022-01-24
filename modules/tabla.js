exports.multiplicar = function() {
    var salida = '';
    for (i = 0; i <= 10; i++) {
        salida += '<h2>Tabla del ' + i + '</h2>';
        for (z = 0; z <= 10; z++) {
            salida += i + ' x ' + z + ' = ' + i * z + '<br />';
        }
    }
    return salida
}