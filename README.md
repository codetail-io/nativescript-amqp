
# tns-amqp
Este es una implementación basica de cliente para rabbitmq.
Esta disponible para android, para ios no esta.

use de la siguiente forma:

    import { RabbitmqClient } from 'tns-amqp';

    export class ItemsComponent {
      client:any;
      channel: any;
      queueName:any;
      constructor() {
        this.client = new RabbitmqClient();
        let factory = new this.client.ConnectionFactory();
        factory.setUsername("test");
        factory.setPassword("test");
        factory.setVirtualHost("/");
        factory.setHost("192.168.0.105");
        factory.setPort(5672);
        let connection = factory.newConnection();
        this.channel = connection.createChannel();
        this.channel.queueDeclare("hello", true, false, false, null);
        this.channel.exchangeDeclare("hello", 'direct');
        this.queueName = this.channel.queueDeclare().getQueue();
        this.channel.queueBind(this.queueName, "hello-exchange", "");
        this.recevieMessage();
      }
      recevieMessage() {
        let body: any;
        const envelope = new this.client.Envelope(1000, false, "hello-exchange", "routingKey");
        const amqpBP = new this.client.AMQP.BasicProperties();
        this.consumer = new ConsumerDefault(this.channel);
        this.consumer.handleDelivery(this.queueName, envelope, amqpBP, body);
        this.channel.basicConsume(this.queueName, true, this.consumer);
      }
    }

cree una classe llamada ConsumerDefault que se hereda de DefaultConsumer


    import { DefaultConsumer } from 'tns-amqp';
    declare const java: any;

    export class ConsumerDefault extends DefaultConsumer {
      constructor(channel) {
        super(channel);
        return global.__native(this);
      }
      handleDelivery(consumerTag, envelope, properties, body) {       // no work to do
        if (body != null) {
          let message = new java.lang.String(body, "UTF-8");
          console.log(" [x] Received message ... " + message);
        }
      }
    }


