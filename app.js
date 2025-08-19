const express = require('express');
const ejs = require('ejs');

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.listen(3009);

app.get('/', (req,res) => {
    const menuResponsivo = [
        {titulo: 'Inicio', conteudo: 'Aqui eu coloquei o conteúdo do inicio do projeto parciais-nodejs utilizando biblioteca express + ejs'},
        {titulo: 'Projetos', conteudo: 'Aqui eu coloco os projetos que eu estou aprendendo utilizando nodejs com as bibliotecas express + ejs'},
        {titulo: 'Sobre', conteudo: 'Aqui eu coloco algo sobre meu projeto utilizano nodejs com as bibliotecas express + ejs'},
    ];
    res.render('index', { titulo: 'inicio', menuResponsivo});
});

app.get('/inicio', (req,res) => {
    res.render('inicio', { titulo: 'inicio'});
});

app.get('/projetos', (req,res) => {
    res.render('projetos', { titulo: 'Projetos'});
});

app.get('/sobre', (req,res) => {
    res.render('sobre', { titulo: 'Sobre'});
});

app.use((req,res) => {
    res.status(404).render('404', { titulo: '404'});
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