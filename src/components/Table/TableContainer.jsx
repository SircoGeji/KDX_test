import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import Table from "./Table";
import {deleteStringAC, setTableDataAC} from "../redux/table-reducer";

let mapStateToProps = (state) => {
    return {
        tablePage: state.tablePage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setTableData: (dataTable) => {
            dispatch(setTableDataAC(dataTable));
        },
        deleteString: (index) => {
            dispatch(deleteStringAC(index));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(Table);