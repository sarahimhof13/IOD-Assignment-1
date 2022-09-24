// Collapsable sidebar
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('main');
const menuBtn = document.querySelector('#menu-btn');
const header = document.querySelector('header')

menuBtn.onclick = function (){
    sidebar.classList.toggle('no-sidebar');
    mainContent.classList.toggle('main-large');
    header.classList.toggle('header-full');
}