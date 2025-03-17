let amigos = [];

function agregarAmigo() {
    const entradaAmigo = document.querySelector('#amigo');
    let amigo = entradaAmigo.value.trim();
    if (amigo.length === 0) {
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(amigo);
        entradaAmigo.value = '';
        actualizarAmigos();
    }
}

function actualizarAmigos() {
    const listaAmigos = document.querySelector('#listaAmigos');
    listaAmigos.innerHTML = '';
    for (const amigo of amigos) {
        const amigoLi = document.createElement('li');
        amigoLi.innerText = `${amigo}`;
        listaAmigos.appendChild(amigoLi);
    }
    const resultado = document.querySelector('#resultado');
    resultado.style.display = 'none';
    resultado.innerHTML= '';
    listaAmigos.style.display = 'initial';
}

function sortearAmigo(){
    const listaAmigos = document.querySelector('#listaAmigos');
    if (amigos.length === 0) {
        alert("Por favor, inserta tu lista de amigos.");
    }else{
        const amigoRandom = Math.floor((Math.random()*amigos.length));
        const resultado = document.querySelector('#resultado');
        resultado.style.display = 'initial';
        resultado.innerHTML=`El amigo secreto sorteado es: <b>${amigos[amigoRandom]}</b>`;
        listaAmigos.style.display = 'none';
    }
}
