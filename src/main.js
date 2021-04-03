import { createApp } from 'vue'
import { store } from './store'
import App from './components/App.vue'

const app = createApp(App).mount('#app')

// Install the store instance as a plugin
app.use(store)
