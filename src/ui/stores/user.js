import {action, observable} from 'mobx/lib/mobx';
import * as fetchStatus from '../constants/fetch-status-enum';

const store = observable({
    user: {
        loggedIn: false,
        status: fetchStatus.UNFETCHED,
        values: observable.map({})
    }
});

function startLoading() {
    return action(() => {
        store.user.status = fetchStatus.FETCHING;
    });
}

function addArrayToMap() {
    return action((array) => {
        store.user.status = fetchStatus.FETCHED;
        array.forEach((value) => {
            store.user.values.set(value.user_id, value);
        });
    })
}

function addObjToMap() {
    return action((obj) => {
        store.user.status = fetchStatus.FETCHED;
        store.user.values.merge(obj);
        store.user.loggedIn = true;
    })
}

const reset = action (() => {
    Object.keys(store).forEach((key) => {
        store[key].status = fetchStatus.UNFETCHED;
        store[key].values = observable.map({});
    })
});

export const actions = {
    startLoading: startLoading(),
    finishLoading: addObjToMap(),
    reset
};

export const select = {
    user: () => store.user.values,
    userLoggedIn: () => store.user.loggedIn
};
