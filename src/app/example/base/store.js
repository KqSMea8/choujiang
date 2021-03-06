/**
 * @file api.js, all data from server function here
 * @author aosyang<yangyanzhao@baidu.com>
 */
import Vue from 'vue';
import vuex from 'vuex';
import api from './api';
Vue.use(vuex);

const STATUS = window.__INITIAL_STATE__;

export const ACTIONS = {
    'HINT': 'HINT'
};

let match = {
    state: {
        list: STATUS.list,
        salt: STATUS.salt,
        hint: {
            show: false,
            title: '网络请求错误',
            text: '确定'
        }
    },
    mutations: {
        [ACTIONS.HINT](state, hint) {
            state.hint = {...state.hint, ...hint};
        }
    },
    actions: {
        [ACTIONS.CHECK_SETTLE]({commit}) {
            // return api.cc().checkSettle().then(rsp => {
            //     commit(ACTIONS.CHECK_SETTLE, rsp);
            // }).catch(err => {
            //     commit('HINT', {show: true, title: err.toString()});
            // });
        }
    }
};

export default new vuex.Store({
    modules: {
        match
    }
});

