function gerarNumero(){
    let nota = parseInt(Math.random() * 10 + 1);
    return nota;
}

function mostrarNumero(){
    let nome = document.querySelector('input').value;
    let verNota = gerarNumero();
    console.log(`${nome} viu a nota ${verNota}`);
    console.log("Será que alguém vai acreditar que a nota é real?");
    alert(`${nome} viu a nota ${verNota}`);
}

function limpar(){
    nome = document.querySelector('input');
    nome.value = '';
}