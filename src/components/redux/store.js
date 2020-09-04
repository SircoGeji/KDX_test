import * as axios from "axios";
import {tableReducer} from "./table-reducer";

let store = {
    _state: {
        id: null,
        title: "",
        description: "",
        year: null,
        color: "",
        status: "",
        price: null,
    },
    _callSubscriber() {

    },
    subscribe(observer) {
        this._callSubscriber = observer; // паттерн observer
    },
    dispatch(action) {
        this._state = tableReducer(this._state, action);
        this._callSubscriber(this._state)
    },
    getState() {
        return this._state;
    }
}

export const tableAPI = {
    getTableData() {
        return axios.create.get(`https://rawgit.com/Varinetz/e6cbadec972e76a340c41a65fcc2a6b3/raw/90191826a3bac2ff0761040ed1d95c59f14eaf26/frontend_test_table.json`)
            .then(response => response.data);
    }
}

export const getTableData = () => async (dispatch) => {
    let response = await tableAPI.getTableData();

    console.log(response.data);
}

export default store;
window.store = store;