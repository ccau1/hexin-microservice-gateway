import express from 'express';
import RabbitMQ from './rabbitMq';
import mainController from './controllers/main.controller';

const app = express();
app.use('/', mainController);

app.get('/health', function (
  req: express.Request,
  res: express.Response
): void {
  res.send('healthy');
});

app.listen(process.env.PORT, (): void => {
  console.log(`Server running on PORT ${
    process.env.PORT as string
  }`);
});

new RabbitMQ();

export default app;
