import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/socket.io';
import './css/main.css';
import socketIo from './plugins/socket.io';

/* Fetch sample data */
store.dispatch('fetch', 'clients');
store.dispatch('fetch', 'employees');
store.dispatch('fetch', 'history');

/* Dark mode */
// store.dispatch('darkMode')

/* Default title tag */
const defaultDocumentTitle = 'Admin - Attendance System';

/* Collapse mobile aside menu on route change & set document title from route meta */
router.beforeEach((to) => {
  store.dispatch('asideMobileToggle', false);
  store.dispatch('asideLgToggle', false);

  store.dispatch('fullScreenToggle', !!to.meta.fullScreen);
});

router.afterEach((to) => {
  if (to.meta && to.meta.title) {
    document.title = `${to.meta.title} — ${defaultDocumentTitle}`;
  } else {
    document.title = defaultDocumentTitle;
  }
});

createApp(App).use(socketIo).use(store).use(router).mount('#app');
