import amqp from 'amqplib/callback_api';

export default class RabbitMQ {
  protected connection: amqp.Connection;
  public constructor() {
    this.connect().then((connection: amqp.Connection): void => {
      this.connection = connection;
      this.onLoad(connection);
    })
  }
  protected async connect(): Promise<amqp.Connection> {
    return new Promise((resolve, reject): void => {
      amqp.connect('amqp://rabbitmq', (error0, connection): void => {
        if (error0) {
          reject(error0);
        }
        console.log('rabbitMQ connected');
        resolve(connection);
      })

    })
  }
  protected async onLoad(connection: amqp.Connection): Promise<void> {
  }
}
