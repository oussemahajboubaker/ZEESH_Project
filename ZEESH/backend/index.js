import express from 'express';
import cors from 'cors';

const app =express();
app.use((cors()));

app.listen(5000,()=>console.log('app is runnig'));


const express = require("express");
const app = express();
app.use(express.json());

// Assurez-vous d'ajuster le chemin vers connection.js si nécessaire
const connectDB = require("./db/connection");

const User = require("./db/Models/user");
a
// Appel de la fonction pour établir la connexion à la base de données
connectDB();

app.post("/", async (req, res) => {
    let user = new User(req.body);
    let result = await user.save();
    res.send(result);
}); 

app.listen(4000, () => {
    console.log('Serveur écoutant sur le port 4000');
});
