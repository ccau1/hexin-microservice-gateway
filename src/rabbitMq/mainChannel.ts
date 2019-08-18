import amqp from 'amqplib/callback_api';
import ChannelBase from '../core/RabbitMQChannel';

export default class MainChannel extends ChannelBase {
  protected onLoad(channel: amqp.Channel): void {
    var msg = 'Hello world';
    this.sendMessage('hello1', Buffer.from(msg));
    console.log(" [x] Sent %s", msg);
  }
}
