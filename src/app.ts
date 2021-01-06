import express from 'express';
import routes from './app.routes';
import swaggerUi from 'swagger-ui-express';
const swaggerDocument = require('../swagger.json');
const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(routes);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});