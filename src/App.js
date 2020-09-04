import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import TableContainer from "./components/Table/TableContainer";

class App extends React.Component {

    render() {
        return <div className="App">
            <Header/>
            <TableContainer
                store={this.props.store}
                className="body"
            />
            <Footer/>
        </div>
    }
}

const mapStateToProps = (state) => ({})

export default compose(
    withRouter,
    connect(mapStateToProps, {}))(App);
