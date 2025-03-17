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
}

function sortearAmigo(){
    if (amigos.length === 0) {
        alert("Por favor, inserta tu lista de amigos.");
    }else{
        const amigoRandom = Math.floor((Math.random()*amigos.length))
        const resultado = document.querySelector('#resultado');
        resultado.innerHTML=`${amigos[amigoRandom]}`
    }
}
