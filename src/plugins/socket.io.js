import store from '../store';
import VueSocketIO from 'vue-3-socket.io';
import SocketIO from 'socket.io-client';

export default new VueSocketIO({
  debug: true,
  connection: SocketIO('https://as-api.sebastian-manrique.me/logs'),
  vuex: {
    store,
    actionPrefix: 'SOCKET_LOGS_',
    mutationPrefix: 'SOCKET_LOGS_',
  },
});
