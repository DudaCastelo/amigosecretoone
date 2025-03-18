// Array para armazenar 
let amigos = [];

// adiciona nome
function adicionarAmigo() {
    const nomeAmigo = document.getElementById('amigo').value.trim();

    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nomeAmigo);
    document.getElementById('amigo').value = ""; // Limpa 
    atualizarListaAmigos(); // Atualiza
}

// Função para atualizar 
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; 

    
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

// Função para sortea
function sortearAmigo() {
    // Verifica se o array amigos não ta vazio
    if (amigos.length === 0) {
        alert("Não há amigos para sortear.");
        return;
    }

    //GERANDO (MESMA COISA DO NUMERO ALEATRIO)
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    //  nome sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Atualiza o conteúdo 
    document.getElementById('resultadoSorteio').innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}
