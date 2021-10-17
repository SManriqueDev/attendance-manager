import store from '../store';
import VueSocketIO from 'vue-3-socket.io';
import SocketIO from 'socket.io-client';

export default new VueSocketIO({
  debug: true,
  connection: SocketIO('http://localhost:3000/logs'),
  vuex: {
    store,
    actionPrefix: 'SOCKET_LOGS_',
    mutationPrefix: 'SOCKET_LOGS_',
  },
});
