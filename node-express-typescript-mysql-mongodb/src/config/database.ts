import mongoose from 'mongoose';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

export async function connectDatabase(retries = 5) {
  const dbEngine = process.env.DB_ENGINE;
  const dbPort = process.env.DB_PORT;

  if (dbEngine === 'mongo') {
    const mongoUri = `mongodb://root:root@db:${dbPort}`;
    await mongoose.connect(mongoUri);
    console.log('✅ MongoDB connected sucessfully! ');
  } else if (dbEngine === 'mysql:8.0') {
    while (retries) {
      try {
        const connection = await mysql.createConnection({
          host: 'db',
          user: 'root',
          password: 'root',
          database: 'app',
          port: Number(process.env.DB_PORT),
        });
        console.log('✅ MySQL connected!');
        break;
      } catch (err) {
        console.log(`⏳ MySQL not ready yet (${retries} retries left)...`);
        retries--;
        await new Promise((res) => setTimeout(res, 3000)); // espera 3 segundos
      }
    }

    if (!retries) {
      console.error('❌ MySQL failed to connect after several retries');
      process.exit(1);
    }
  } else {
    console.error('❌ DB_ENGINE its not supported. Use "MongoDB" or "MySQL".');
  }
}
