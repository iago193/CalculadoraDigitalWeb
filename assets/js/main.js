display = document.querySelector('#display');

function calcular(valor, tipo) {
    const calculadora = new Calculadora(valor, tipo);
}

// Classe Calculadora que manipula o display da calculadora

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
                alert('Erro na expressão:'+ ' ' + e.message);
            }   

        } else {
            display.value += this.valor;
        }

    } else if (this.tipo === 'num') {
        display.value += this.valor;
    }
}


/*

// Versão alternativa da função Calculadora usando uma classe

function Calculadora() {
  this.display = document.querySelector('.display');

  this.inicia = () => {
    this.capturaCliques();
    this.capturaEnter();
  };

  this.capturaEnter = () => {
    document.addEventListener('keyup', e => {
      if (e.keyCode === 13) {
        this.realizaConta();
      }
    });
  };

  this.capturaCliques = () => {
    document.addEventListener('click', event => {
      const el = event.target;
      if (el.classList.contains('btn-num')) this.addNumDisplay(el);
      if (el.classList.contains('btn-clear')) this.clear();
      if (el.classList.contains('btn-del')) this.del();
      if (el.classList.contains('btn-eq')) this.realizaConta();
    });
  };

  this.realizaConta = () => {
    try {
      const conta = eval(this.display.value);

      if(!conta) {
        alert('Conta inválida');
        return;
      }

      this.display.value = conta;
    } catch(e) {
      alert('Conta inválida');
      return;
    }
  };

  this.addNumDisplay = el => {
    this.display.value += el.innerText;
    this.display.focus();
  };

  this.clear = () => this.display.value = '';
  this.del = () => this.display.value = this.display.value.slice(0, -1);
}

const calculadora = new Calculadora();
calculadora.inicia();





// Versão alternativa da função calcular usando functional programming

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