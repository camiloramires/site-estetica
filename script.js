console.log("O JavaScript está vivo!");
const btnMenu = document.querySelector('.btn-menu');
const menuLista = document.querySelector('.menu-lista');

btnMenu.addEventListener('click', () => {
    menuLista.classList.toggle('ativo');
});