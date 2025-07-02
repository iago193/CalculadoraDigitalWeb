display = document.querySelector('#display');

function calcular(valor, tipo) {
    const calculadora = new Calculadora(valor, tipo);
}

function Calculadora(valor, tipo) {
    this.valor = valor;
    this.tipo = tipo;

    if (this.tipo === 'acao') {

        if(this.valor === 'c') {
            display.value = '';

        } else if(this.valor === '<') {
            display.value = display.value.slice(0, -1);

        } else if(this.valor === '=') {

            try {  
                display.value = eval(display.value);
            } catch (e) {
                display.value = '';
                alert('Erro na expressão');
            }   

        } else {
            display.value += this.valor;
        }

    } else if (this.tipo === 'num') {
        display.value += this.valor;
    }
}









/*
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
} */