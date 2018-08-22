
import axios from 'axios';

      const getPageItemData = e => {
        {
//          return {id: e.id, link: e.link.replace("https://acanud.ru", ""), title: e.title.rendered};
          return {id: e.id, link: e.link.replace("https://comsep-wp-vit2.c9users.io", ""), title: e.title.rendered};
        }
      };

const GET_ALL_EVENTS_URL = "https://comsep-wp-vit2.c9users.io/wp-json/tribe/events/v1/events/?page=1&per_page=50&start_date=1999-01-01%2000:00:00&end_date=2099-12-31";


export const state = () => ({
    pages: [
//    ],
//    events: [
    ]
});

export const mutations = {
    SET_PAGES(state, pages) {
        state.pages = pages;
//    },
//    SET_EVENTS(state, data) {
//        state.events = data;
    }
};

export const actions = {
    async nuxtServerInit({ commit }) {
//        console.log("index/nuxtServerInit()");
        const res = await axios.get('https://comsep-wp-vit2.c9users.io/wp-json/wp/v2/pages').catch(e => {
            console.log("ERROR: Can't get the pages list from WP API");
        });
        if(res) {
            const data = res.data.map( e => getPageItemData(e) );
            commit('SET_PAGES', data);
        }
/*
        const resConfs = await axios.get(GET_ALL_EVENTS_URL).catch(e => {
            console.log("ERROR: Can't get the events list from WP API");
        });
        if(resConfs) {
//            console.log(resConfs.data);
            const dataConfs = resConfs.data.events.map( e => e );
            commit('SET_EVENTS', dataConfs);
        }
*/
    }
};

export const getters = {
};

