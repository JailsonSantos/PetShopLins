import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import mainRoutes from './routes/index';

dotenv.config();

// inicia o server
const server = express();

// Acessar a pasta public com os arquivos css
server.use(express.static(path.join(__dirname, '../public')));

// Rotas
server.use(mainRoutes);

server.use((req, res) => {
  res.send('Página não encotrada!');
});

// Executa os server, na port 4000
server.listen(process.env.PORT);