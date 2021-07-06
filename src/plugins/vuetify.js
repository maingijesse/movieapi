import Vue from "vue"
import Vuetify from "vuetify/lib/framework"

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#f83745",
        secondary: "#ff424f",
        accent: "#222b31",
        darker: "#191c1f",
      },
    },
  },
})
