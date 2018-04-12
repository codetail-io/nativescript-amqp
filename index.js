"use strict";
var application = require("application");
var context = application.android.context;
var util = require("utils/utils");
// import * as utils from "utils/utils";
var RabbitmqClient = (function () {
    function RabbitmqClient() {
        this.AMQP = com.rabbitmq.client.AMQP;
        this.MessageProperties = com.rabbitmq.client.MessageProperties;
        this.Channel = com.rabbitmq.client.Channel;
        this.Connection = com.rabbitmq.client.Connection;
        this.ConnectionFactory = com.rabbitmq.client.ConnectionFactory;
        this.Consumer = com.rabbitmq.client.Consumer;
        this.DefaultConsumer = com.rabbitmq.client.DefaultConsumer;
        this.Envelope = com.rabbitmq.client.Envelope;
        this.QueueingConsumer = com.rabbitmq.client.QueueingConsumer;
    }
    return RabbitmqClient;
}());

exports.RabbitmqClient = RabbitmqClient;
exports.DefaultConsumer = com.rabbitmq.client.DefaultConsumer;
