<template>

  <v-layout column justify-center align-center>
    <h1>{{ item.title.rendered }}</h1>
    <v-flex xs12 sm8 md6>
      <!-- div v-html="item.content.rendered"></div-->
        <WPContent :content="item.content.rendered"></WPContent>
    </v-flex>
  </v-layout>

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
      
//      const getItemData = e => {
//        {
//          return {id: e.id, link: e.link.replace("https://acanud.ru", ""), title: e.title.rendered};
//        }
//      };

//      console.log(context);

      const path = context.route.path;
      const slug = path.split('/').filter( s => s!="" ).reverse()[0];

//      console.log(path);
//      console.log(slug);

        return axios
//            .get('https://next.acanud.ru/wp-json/wp/v2/pages/?slug='+slug)
            .get('https://comsep-wp-vit2.c9users.io/wp-json/wp/v2/pages/?slug='+slug)
//            .get('https://next.acanud.ru/wp-json/wp/v2/pages/?slug=home')
            .then(response => {
//                console.log(response.data);
                return {
                    item: response.data.map(item => {
//                      item.content.rendered = item.content.rendered.replace(/acanud.ru/g, 'nuxt-vit2.c9users.io');
                      item.content.rendered = item.content.rendered.replace(/comsep-wp-vit2.c9users.io/g, 'nuxt-vit2.c9users.io');
                      //item.content.rendered = "erq werqwr qwt qwrt qewr t"
//                      console.log(item.content.rendered);
                      return item;
                    })[0] || ({ title: {}, content: {} })
                }
            });
    }
}
</script>
