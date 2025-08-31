let amigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    if (amigos.includes(nomeAmigo)) {
        alert(`O nome ${nomeAmigo} ja está na lista.`);
        return;
    }

    if (nomeAmigo === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    if (nomeAmigo.length < 3) {
        alert('O nome deve conter pelo menos 3 caracteres.');
        return;
    }

    if (/^\d+$/.test(nomeAmigo)) {
        alert('O nome não pode conter apenas números.');
        return;
    }
    
    amigos.push(nomeAmigo);
    
    inputAmigo.value = '';
    
    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    
    listaAmigos.innerHTML = '';
    
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear!');
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    const amigoSorteado = amigos[indiceAleatorio];
    
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>`;
}

function reiniciarJogo() {
    amigos = [];
    
    document.getElementById('amigo').value = '';
    
    document.getElementById('listaAmigos').innerHTML = '';
    
    document.getElementById('resultado').innerHTML = '';
    
    alert('Jogo reiniciado! Você pode adicionar novos amigos.');
}

document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        adicionarAmigo();
    }
});