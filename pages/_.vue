<template>

  <div class="wp-post">
    <v-layout column justify-center align-center>
      <h1 class="display-1" v-html="item.title.rendered"></h1>
      <v-flex xs12 sm8 md6>
          <WPContent :content="item.content.rendered"></WPContent>
      </v-flex>
    </v-layout>
  </div>

</template>

<script>
import axios from 'axios';

import WPContent from '~/components/common/WPContent.vue';

export default {
    components: {
      WPContent
    },
    data() {
      return {
        item: { title: {}, content: {} }
      }
    },
    asyncData(context) {

      const path = context.route.path;
      const slug = path.split('/').filter( s => s!="" ).reverse()[0];

        return axios
            .get('https://comsep-wp-vit2.c9users.io/wp-json/wp/v2/pages/?slug='+slug)
            .then(response => {
                return {
                    item: response.data.map(item => {
                      item.content.rendered = item.content.rendered.replace(/comsep-wp-vit2.c9users.io/g, 'nuxt-vit2.c9users.io');
                      return item;
                    })[0] || ({ title: {}, content: {} })
                }
            }).catch(e => {
              console.log("ERROR: Can't get the page from WP API");
            });
    }
}
</script>
