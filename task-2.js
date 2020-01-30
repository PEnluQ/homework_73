const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;

const app = express();

const port = 8001;

const password = 'cat';

app.get('/encode/:word', (req, res) => {
    res.send(Vigenere.Cipher(password).crypt(req.params.word));
});

app.get('/decode/:word', (req, res) => {
   res.send(Vigenere.Decipher(password).crypt(req.params.word));
});

app.listen(port);