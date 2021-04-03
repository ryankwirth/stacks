import { createStore } from 'vuex'
import { test } from './modules/test'

export const store = createStore({
    modules: {
        test
    }
})
