const express = require('express');
const ejs = require('ejs');

const app = express();

app.set('view engine', ejs);

app.listen(3009);

/*
acesso a rota index - COM EXPRESS
app.get('/',(req,res) => {
     res.sendFile('./views/index.html', { root: __dirname });
 });
 */

/*
 acesso a rota inicio - COM EXPRESS
app.get('/inicio',(req,res) => {
    res.sendFile('./views/inicio.html', { root: __dirname });
});
*/

/*
acesso a rota projetos - COM EXPRESS
app.get('/projetos', (req,res) => {
    res.sendFile('./views/projetos.html', { root: __dirname });
});
*/

/*
acesso a rota sobre - COM EXPRESS
app.get('/sobre', (req,res) => {
    res.sendFile('./views/sobre.html', { root: __dirname });
});
*/

/*
acesso a rota ERRO - COM EXPRESS
app.use((req,res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
})
*/

app.get('/',(req,res) => {
    const menuResponsivo = [
        {titulo: 'Inicio', conteudo: 'Aqui eu coloquei o conteúdo do inicio do projeto parciais-nodejs utilizando biblioteca express + ejs'},
        {titulo: 'Projetos', conteudo: 'Aqui eu coloco os projetos que eu estou aprendendo utilizando nodejs com as bibliotecas express + ejs'},
        {titulo: 'Sobre', conteudo: 'Aqui eu coloco algo sobre meu projeto utilizano nodejs com as bibliotecas express + ejs'},
    ];
    res.render('index', {titulo: 'inicio', menuResponsivo})
});






















function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src= "assets/img/menu_white_36dp.svg";
    }else {
        menuMobile.classList.add(open);
        document.querySelector('.icon').src= "assets/img/close_white_36dp.svg";
    }
}