alert("Seja bem-vindo à SETIF 2025!");
document.addEventListener('DOMContentLoaded', (event)=>{
    buscarInscritos();
    construirModal();
    const temaLocal = localStorage.getItem('tema');
    document.body.setAttribute('data-theme', temaLocal);
}) 

function construirModal() {
    const botaoSaibaMais = document.getElementById('btSaibaMais');
    const modal = document.getElementById('modal');
    const botaoFechar = document.getElementById('fecharModal');

    botaoFechar.addEventListener('click', () => {
        modal.classList.add('hidden');

    });
    botaoSaibaMais.addEventListener('click', () => {
        modal.classList.remove('hidden');
    });
    window.addEventListener("click", (e) => {
        console.log(e.target);
        if(e.target == modal) {
            modal.classList.add('hidden');
        }
    });

};

function alterarTema() {
    //DOM -> Document Object Model
    const tema = document.body.getAttribute('data-theme');
    const novoTema = tema == 'dark' ? 'light' : 'dark' ;
    localStorage.setItem('tema', novoTema);
    document.body.setAttribute('data-theme', novoTema);
    const btAlterarTema = document.getElementById('btAlterarTema');
    btAlterarTema.textContent = novoTema == 'dark' ? 'Modo Claro' : 'Modo Escuro';
    
}
function buscarInscritos() {
    fetch("json/inscritos.json")
    .then(res =>  res.json())
    .then(res => {
        const divInscritos = document.getElementById('inscritos');
        res.forEach(user => {
            const novoParagrago = document.createElement("p");
            novoParagrago.textContent =`Nome: ${user.nome}`;
            divInscritos.appendChild(novoParagrago);
    });

    }).catch(e=>console.log(e));
}