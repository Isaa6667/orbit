import 'dotenv/config';
import { defineConfig } from 'prisma/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  datasource: {
    url:
      process.env.DATABASE_URL ??
      'postgres://f80e789f78b4a5118833385deeaef9dbdc787d1d9305394cfce7aadfd7368099:sk_1r5lvkQbX6d9DVzFXhHV7@pooled.db.prisma.io:5432/postgres?sslmode=require',
  },
});
