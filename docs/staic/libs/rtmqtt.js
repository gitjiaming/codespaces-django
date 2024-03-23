function mqttProps(){
    return  {
        protocol: 'wss',
        host: 'v25c7ec1.ala.cn-hangzhou.emqxsl.cn',
        // ws: 8083; wss: 8084
        port: 8084,
        endpoint: '/mqtt',
        // for more options, please refer to https://github.com/mqttjs/MQTT.js#mqttclientstreambuilder-options
        clean: true,
        connectTimeout: 30 * 1000, // ms
        reconnectPeriod: 4000, // ms
        clientId:
          'emqx_vue_' +
          Math.random()
            .toString(16)
            .substring(2, 8),
        // auth
        username: 'rtlive',
        password: 'Rtlive@138',
      }
}