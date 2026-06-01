document.addEventListener('DOMContentLoaded', function () {
    // Seleciona todos os botões com a classe 'btn-proximo'
    const avanca = document.querySelectorAll('.btn-proximo');

    avanca.forEach(button => {
        button.addEventListener("click", function () {
            // Encontra o passo atual, que é o que tem a classe 'ativo'
            const atual = document.querySelector('.ativo');

            if (atual) {
                // Pega o valor de 'data-proximo' para montar o ID do próximo passo
                const proximoPasso = "passo-" + this.getAttribute('data-proximo');
                const nextStep = document.getElementById(proximoPasso); // Busca o próximo passo

                // Se o próximo passo for encontrado, faz a transição
                if (nextStep) {
                    // Remove a classe 'ativo' do passo atual
                    atual.classList.remove('ativo');
                    // Adiciona a classe 'ativo' ao próximo passo, tornando-o visível
                    nextStep.classList.add('ativo');
                }
            }
        });
    });
});
