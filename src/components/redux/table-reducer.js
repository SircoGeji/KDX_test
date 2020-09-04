const SET_TABLE_DATA = "SET_TABLE_DATA";
const DELETE_STRING = "DELETE_STRING";

let initialState ={
    tData: [],
    checkData: false,
}

export const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TABLE_DATA:
            return {
                ...state,
                tData: action.tableData,
                checkData: true,
            }
        case DELETE_STRING:
            for(let j = 0; j < state.tData.length; j++){
                if(state.tData[j].id === action.id){
                    state.tData.splice(j, 1);
                }
            }
            return {
                ...state,
                tData: state.tData,
            }
        default:
            return {
                ...state
            }
    }
}

export const setTableDataAC = (tableData) => {
    return {type: SET_TABLE_DATA, tableData}
}
export const deleteStringAC = (id) => {
    return {type: DELETE_STRING, id}
}
