const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.listen(3000);

//static files
app.use(express.static('public'));
 //routes
app.get('/', (req, res) => {
    res.render('index', {title: 'Home'});
});
app.get('/contact', (req, res) => {
    res.render('contact', {title: 'Contact'});
});
app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
});
app.get('/projects', (req, res) => {
    res.render('projects', {title: 'Projects'});
});

app.use((req, res) => {
    res.status(404).render('404', {title: '404'});
});