import express, { json } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import session from 'express-session';

// Importando rutas
import autorRoutes from './routes/autores';
import editorialRoutes from './routes/editoriales'
import libroRoutes from './routes/libros';
import ejemplarRoutes from './routes/ejemplares';
import autorLibroRoutes from './routes/autoresLibros';
import areaRoutes from './routes/areas';
import nomenclaturaRoutes from './routes/nomenclaturas';
import subareaRoutes from './routes/subareas';
import subsubtemaRoutes from './routes/subsubtemas';
import subtemaRoutes from './routes/subtemas';
import temaRoutes from './routes/temas';
import rolRoutes from './routes/rol';
import usuarioRoutes from './routes/usuario';
import menuRoutes from './routes/menus'

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(json()); // Para entender los datos que vengan en formato JSON

app.use('/api/autores', autorRoutes);
app.use('/api/libros', libroRoutes);
app.use('/api/editoriales', editorialRoutes);
app.use('/api/ejemplares', ejemplarRoutes);
app.use('/api/autoresLibros', autorLibroRoutes);

app.use('/api/areas', areaRoutes);
app.use('/api/subareas', subareaRoutes);
app.use('/api/temas', temaRoutes);
app.use('/api/subtemas', subtemaRoutes);
app.use('/api/subsubtemas', subsubtemaRoutes);
app.use('/api/nomenclaturas', nomenclaturaRoutes);

app.use('/api/roles', rolRoutes);
app.use('/api/usuarios', usuarioRoutes);

app.use('/api/menus', menuRoutes);  

export default app;