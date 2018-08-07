<template>

  <v-layout column justify-center align-center>
    <h1>Pages</h1>
    <v-flex xs12 sm8 md6>
        <ul
          v-for="(item, i) in $store.state.pages"
        >
            <!--li><nuxt-link :to="'/?page_id='+item.id">{{ item.title }}</nuxt-link></li-->
            <li>
              <a v-if="isUrl(item.link)" :href="item.link">a: {{ item.title }} | {{ item.link }}</a>
              <nuxt-link v-else :to="item.link">n: {{ item.title }} | {{ item.link }}</nuxt-link>
            </li>
        </ul>

    </v-flex>
  </v-layout>

</template>

<script>
import axios from 'axios';
import isUrl from 'is-url';

export default {
    data() {
      return {
        items: [
        ],
        page_id: null
      }
    },
    methods: {
      isUrl(s) { return isUrl(s);  }
    },
/*
    asyncData(context) {
      
      const getItemData = e => {
        {
//          return {id: e.id, link: e.link.replace("https://acanud.ru", ""), title: e.title.rendered};
          return {id: e.id, link: e.link.replace("https://comsep-wp-vit2.c9users.io", ""), title: e.title.rendered};
        }
      };
//      console.log(context);

      const page_id = context.query.page_id;
      if( page_id )
        return axios
//            .get('https://next.acanud.ru/wp-json/wp/v2/pages/'+page_id)
            .get('https://comsep-wp-vit2.c9users.io/wp-json/wp/v2/pages/'+page_id)
            .then(response => {
              return {
                items: [ response.data ],
                page_id: page_id
              };
            });
      else
        return axios
//            .get('https://next.acanud.ru/wp-json/wp/v2/pages')
            .get('https://comsep-wp-vit2.c9users.io/wp-json/wp/v2/pages')
            .then(response => {
                return {
                    items: response.data.map( e => getItemData(e) ),
                    page_id: page_id
                }
            });
    }
*/

}
</script>
