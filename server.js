const express = require('express');
const app = express();
const sendMail = require('./public/js/contact.js');
const path = require('path');
const log = console.log;

app.set('view engine', 'ejs');

app.listen(process.env.PORT || 3000);

//static files
app.use(express.static('public'));

//Data parse
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

 //routes
app.get('/', (req, res) => {
    res.render('index', {title: 'Home'});
});
app.get('/contact', (req, res) => {
    res.render('contact', {title: 'Contact'});
});
app.get('/blog', (req, res) => {
    res.render('blog', {title: 'Blog'});
});
app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
});
app.get('/projects', (req, res) => {
    res.render('projects', {title: 'Projects'});
});

app.post('/email', (req, res) => {
    // res.sendFile(path.join(__dirname + '/contact-us.html'));
    //TODO
    //send email here
    const { name, subject, email, text } = req.body;
    console.log('Data: ', req.body);

    sendMail(name, email, subject, text, function(err, data) {
        if (err) {
            res.status(500).json({ message: 'Internal Error' });
        } else {
            res.status({ message: 'Email sent!!!' });
        }
    });
    // res.json({ message: 'Message received!!!' })
});

app.use((req, res) => {
    res.status(404).render('404', {title: '404'});
});