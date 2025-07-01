display = document.querySelector('#display');

function calcular(valor, tipo) {
    if (tipo === 'acao') {

        if (valor === 'c') {
            display.value = '';

        } else if (valor === '<') {
            display.value = display.value.slice(0, -1);

        } else if (valor === '=') {
            try {
                display.value = eval(display.value);
            } catch (e) {
                display.value = 'Error';
            }

        } else {
            display.value += valor;
        }

    } else if (tipo === 'num') {
        display.value += valor;
    }
}