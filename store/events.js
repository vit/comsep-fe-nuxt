
import axios from 'axios';

const GET_ALL_EVENTS_URL = "https://comsep-wp-vit2.c9users.io/wp-json/tribe/events/v1/events/?page=1&per_page=50&start_date=1999-01-01%2000:00:00&end_date=2099-12-31";

export const state = () => ({
//    all: [
//    ]
    all: null
});

export const mutations = {
    SET_EVENTS(state, data) {
        state.all = data;
    }
};

export const actions = {
/*
    async nuxtServerInit({ commit }) {
        console.log("events/nuxtServerInit()");
        const resConfs = await axios.get(GET_ALL_EVENTS_URL).catch(e => {
            console.log("ERROR: Can't get the events list from WP API");
        });
        if(resConfs) {
            console.log(resConfs.data);
            const dataConfs = resConfs.data.events.map( e => e );
            commit('events/SET_EVENTS', dataConfs);
            commit('SET_EVENTS', dataConfs);
        }
    },
*/
///*
    async loadAllEvents({commit, dispatch, state}, {type, id}) {
//        console.log("events/loadAllEvents()");
        if(!state.all) {
            const resConfs = await axios.get(GET_ALL_EVENTS_URL).catch(e => {
                console.log("ERROR: Can't get the events list from WP API");
            });
            if(resConfs) {
//                console.log(resConfs.data);
                const dataConfs = resConfs.data.events.map( e => e );
    //            commit('events/SET_EVENTS', dataConfs);
                commit('SET_EVENTS', dataConfs);
            }
        }
    },
//*/
};

export const getters = {
/*
    allCached(state) {
        console.log("allCached(state)");
//        let res = state.all;
//        if(!res) {
//            res = [];
//        }
//        return res;
        return state.all;
    }
*/
};
