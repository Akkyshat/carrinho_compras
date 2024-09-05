let totalGeral = 0; // Inicializa a variável com valor 0
limpar();

function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0].trim(); // Remover espaços extras
    let valorUnitario = parseFloat(produto.split('R$')[1]); // Converte para número
    let quantidade = parseInt(document.getElementById('quantidade').value); // Converte para número

    // Calcula o subtotal
    let subtotal = quantidade * valorUnitario;

    // Adiciona o item ao carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subtotal.toFixed(2)}</span>
        </section>`;

    // Atualiza o total geral
    totalGeral += subtotal;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral.toFixed(2)}`; // Formata o valor com duas casas decimais

    // Reinicia o campo de quantidade para 1
    document.getElementById('quantidade').value = 1;
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0.00';
}
