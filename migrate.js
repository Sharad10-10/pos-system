import { connection, db } from "./db/dbConfig";
import { migrate } from 'drizzle-orm/postgres-js/migrator'

(
    async ()=>{
        console.log("Awaiting to migrate");
        await migrate(db, {migrationsFolder:'./drizzle'})
        await connection.end()
        console.log("Migration applied...");
    }
)()