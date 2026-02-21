import express from 'express';
import dotenv from 'dotenv';
import routes from './routes';
import { connectDatabase } from './config/database';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDatabase();
});
console.log('🔁 App reloaded at', new Date().toLocaleTimeString());