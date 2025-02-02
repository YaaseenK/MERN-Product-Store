import express from 'express';

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server started at http://localhost:3000")
})