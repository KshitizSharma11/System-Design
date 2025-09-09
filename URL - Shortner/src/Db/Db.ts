import { DataSource } from "../../node_modules/typeorm/index.js";
import path from "path";
export const Db = new DataSource({
    type: "postgres",
    url : "postgresql://neondb_owner:npg_fpm9bjU5KMgc@ep-shy-field-a1ejdoqw-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
    synchronize: true,
    logging: false,
    entities: [path.join(process.cwd() , "dist/**/model/*.{js,ts}")]
});