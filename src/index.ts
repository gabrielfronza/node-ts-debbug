import express from 'express';
export const app = express();

const PORT = 8080;

app.get('/', (req, res) => {
  res.send('Hello from App Engine!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});