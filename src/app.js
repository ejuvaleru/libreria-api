import express, {json} from 'express';
import morgan from 'morgan';

// Importando rutas
import autorRoutes from './routes/autores';
import libroRoutes from './routes/libros';

import ejemplarRoutes from './routes/ejemplares';

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(json()); // Para entender los datos que vengan en formato JSON

app.use('/api/autores', autorRoutes);
app.use('/api/libros', libroRoutes);

app.use('/api/ejemplares', ejemplarRoutes);

export default app;