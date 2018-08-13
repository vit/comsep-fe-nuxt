
import {connect} from '@billypilgrim/dspace-rest-js';
const libConn = connect(process.env.libServerURL, process.env.libServerPath);

export const state = () => ({
    item: null,
    found: []
});

export const mutations = {
    SET_LIB_ITEM(state, item) {
        state.item = item;
        state.item.favorite = false;
    },
    SET_FOUND_LIB_ITEMS(state, items) {
        state.found = items;
    },
    TOGGLE_LIB_ITEM_FAV(state) {
        state.item.favorite = !state.item.favorite;
//        state.item = state.item;
    }
};

export const actions = {
        async nuxtServerInit({ commit }) {
        },
        async setLibItem(vuexContext, item) {
            vuexContext.commit('SET_LIB_ITEM', item);
        },
        findLibItems({commit}, query) {
            console.log("library/findLibItems()", query);
//            return libConn.findItems(query)
//                .then( items => {
//                    commit('SET_FOUND_LIB_ITEMS', items);
//                });
        },
        loadLibItemData({commit, dispatch}, {type, id}) {
            //console.log("library/loadLibItemData()");
            dispatch('setLibItemPreviewData', {type, id});
            return libConn.getItem(type, id)
                .then( item => {
                    commit('SET_LIB_ITEM', item);
                });
        },
        setLibItemPreviewData({commit, state}, {type, id}) {
            const oldItem = state.libItem;
            const previewItem = libConn.getLinkedPreview(oldItem, type, id);
            if( previewItem )
                commit('SET_LIB_ITEM', previewItem);
        }
};

export const getters = {
    item(state) {
        return state.item;
    }
};
