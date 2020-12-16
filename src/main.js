import { createApp } from 'vue';

import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import App from './App.vue';

createApp(App)
  .component('base-card', BaseCard)
  .component('base-button', BaseButton)
  .mount('#app');
