alert("Seja bem-vindo à SETIF 2025!");
document.addEventListener('DOMContentLoaded', (event)=>{
    buscarInscritos();
}) 
function alterarTema() {
    //DOM -> Document Object Model
    const tema = document.body.getAttribute('data-theme');
    const novoTema = tema == 'dark' ? 'light' : 'dark' ;
    document.body.setAttribute('data-theme', novoTema);
    const btAlterarTema = document.getElementById('btAlterarTema');
    btAlterarTema.textContent = novoTema == 'dark' ? 'Modo Claro' : 'Modo Escuro';
    
}
function buscarInscritos() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res =>  res.json())
    .then(res => {
        const divInscritos = document.getElementById('inscritos');
        res.forEach(user => {
            const novoParagrago = document.createElement("p");
            novoParagrago.textContent =`Nome: ${user.name}`;
            divInscritos.appendChild(novoParagrago);
    });

    }).catch(e=>console.log(e));
}