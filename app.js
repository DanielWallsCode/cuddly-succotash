import  express  from "express";
import './database.js';
import votacionesRoutes from "./router/votaciones.js";
import cors from "cors";
import path from 'path';
const __dirname = path.resolve();

const app = express();

app.set('views', path.join(__dirname, './views'));
app.set('view engine','ejs');

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors())


// RUTAS
app.use(votacionesRoutes)


app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo correctamente');
});