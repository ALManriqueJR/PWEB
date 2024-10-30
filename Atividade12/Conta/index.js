class Conta {
    constructor(nome, correntista, banco, numConta, saldo) {
        this.nome = nome;
        this.correntista = correntista;
        this.banco = banco;
        this.numConta = numConta;
        this.saldo = saldo;
    }

    get nome() {
        return this._nome;
    }

    set nome(novoNome) {
        if (typeof novoNome !== 'string') {
            throw new Error('O nome deve ser uma string');
        }
        this._nome = novoNome;
    }

    get correntista() {
        return this._correntista;
    }

    set correntista(char) {
        if (typeof char !== 'string') {
            throw new Error('O nome deve ser uma string');
        }
        this._correntista = char;
    }

    get banco() {
        return this._banco;
    }

    set banco(nomeBanco) {
        if (typeof nomeBanco !== 'string') {
            throw new Error('O nome deve ser uma string');
        }
        this._banco = nomeBanco;
    }

    get numConta() {
        return this._numConta;
    }

    set numConta(num) {
        if (typeof num !== 'string') {
            throw new Error('O nome deve ser uma string');
        }
        this._numConta = num;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(novoSaldo) {
        if (novoSaldo < 0) {
            throw new Error('Saldo não pode ser negativo');
        }
        this._saldo = novoSaldo;
    }

}

class ContaCorrente extends Conta {
    constructor(nome, correntista, banco, numConta, saldo) {
        super(nome, correntista, banco, numConta, saldo);
        this.saldoEsp = '1000';
    }

    get saldoEsp() {
        return this._saldoEsp;
    }

    set saldoEsp(s) {
        if (s < 0) {
            throw new Error('Saldo não pode ser negativo');
        }
        this._saldoEsp = s;
    }
}

class ContaPoupanca extends Conta {
    constructor(nome, correntista, banco, numConta, saldo) {
        super(nome, correntista, banco, numConta, saldo);
        this.juros = '10%';
        this.dataVenc = 'Todo dia 20';
    }

    get juros() {
        return this._juros;
    }

    set juros(j) {
        if (j < 0) {
            throw new Error('Saldo não pode ser negativo');
        }
        this._juros = j;
    }

    get dataVenc() {
        return this._dataVenc;
    }

    set dataVenc(dt) {
        if (typeof dt !== 'string') {
            throw new Error('O nome deve ser uma string');
        }
        this._dataVenc = dt;
    }
}



let objConta = new Conta('', '', '', '', '')

objConta.nome = prompt('Nome:')
objConta.correntista = prompt('Correntista:')
objConta.banco = prompt('Banco:')
objConta.numConta = prompt('Nº Conta:')
objConta.saldo = prompt('Saldo:')

alert(`Nome: ${objConta.nome} Correntista: ${objConta.correntista} Banco: ${objConta.banco} Nº Conta ${objConta.numConta} Saldo: ${objConta.saldo}`)


let objContaC = new ContaCorrente('', '', '', '', '')

objContaC.nome = prompt('Nome:')
objContaC.correntista = prompt('Correntista:')
objContaC.banco = prompt('Banco:')
objContaC.numConta = prompt('Nº Conta:')
objContaC.saldo = prompt('Saldo:')

alert(`Nome: ${objContaC.nome} Correntista: ${objContaC.correntista} Banco: ${objContaC.banco} Nº Conta ${objContaC.numConta} Saldo: ${objContaC.saldo} Saldo Esp.: ${objContaC.saldoEsp}`)


let objContaP = new ContaPoupanca('', '', '', '', '')

objContaP.nome = prompt('Nome:')
objContaP.correntista = prompt('Correntista:')
objContaP.banco = prompt('Banco:')
objContaP.numConta = prompt('Nº Conta:')
objContaP.saldo = prompt('Saldo:')

alert(`Nome: ${objContaP.nome} Correntista: ${objContaP.correntista} Banco: ${objContaP.banco} Nº Conta ${objContaP.numConta} Saldo: ${objContaP.saldo} Juros: ${objContaP.juros} Dt Venc.: ${objContaP.dataVenc}`)


