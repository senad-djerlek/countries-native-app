const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

const usersFilePath = './users.json';

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // Učitajte podatke o korisnicima
      const usersData = await fs.readFile(usersFilePath, 'utf-8');
      const users = JSON.parse(usersData);
  
      // Proverite da li korisnik postoji i da li se lozinke poklapaju
      if (users[username] && users[username].password === password) {
        // Ako je autentifikacija uspešna, ovde možete generisati JWT token i vratiti ga korisniku
        res.json({ success: true, message: 'Uspešna prijava' });
      } else {
        res.status(401).json({ error: 'Pogrešno korisničko ime ili lozinka' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  

app.post('/signup', async (req, res) => {
  try {
    const { firstName, lastName, username, password } = req.body;

    // Provera da li korisničko ime već postoji
    const usersData = await fs.readFile(usersFilePath, 'utf-8');
    const users = JSON.parse(usersData);

    if (users[username]) {
      return res.status(400).json({ error: 'Korisničko ime već postoji.' });
    }

    // Dodavanje novog korisnika
    users[username] = { firstName, lastName, password };
    await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2));

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});