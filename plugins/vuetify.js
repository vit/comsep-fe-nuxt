import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: '#121212', // a color that is not in the material colors palette
//    primary: '#aa1212', // a color that is not in the material colors palette
    accent: colors.grey.darken3,
//    accent: "#11aa11",
//    accent: colors.teal.darken1,

//    secondary: colors.amber.darken3,
    secondary: colors.indigo.darken2,

    info: colors.teal.lighten1,
    warning: colors.amber.base,
    error: colors.deepOrange.accent4,
    success: colors.green.accent3
  }
})
