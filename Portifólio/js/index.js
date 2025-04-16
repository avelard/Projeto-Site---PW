
function alterarTema() {
    //DOM -> Document Object Model
    const tema = document.body.getAttribute('data-theme');
    const novoTema = tema == 'dark' ? 'light' : 'dark' ;
    localStorage.setItem('tema', novoTema);
    document.body.setAttribute('data-theme', novoTema);
    const btAlterarTema = document.getElementById('alterarTema');
    btAlterarTema.textContent = novoTema == 'dark' ? '☀️' : '🌙';
    
}