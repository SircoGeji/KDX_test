import React from 'react';
import styles from './Table.module.css';
import r_r from '../images/round_red.png';
import r_w from '../images/round_white.png';
import r_b from '../images/round_black.png';
import r_g from '../images/round_green.png';

const Table = (props) => {
    const axios = require('axios');

    if (!props.tablePage.checkData) {
        axios.get(`https://rawgit.com/Varinetz/e6cbadec972e76a340c41a65fcc2a6b3/raw/90191826a3bac2ff0761040ed1d95c59f14eaf26/frontend_test_table.json`)
            .then(response => {
                props.setTableData(response.data);
            });
    }

    const statusRus = (status) => {
        switch(status){
            case "pednding":
                return "Ожидается"
            case "out_of_stock":
                return "Нет в наличии"
            case "in_stock":
                return "В наличии"
        }
    }

    const colorImg = (color) => {
        switch(color){
            case "red":
                return <img src={r_r} className={styles.color_round} alt="round_red"/>
            case "white":
                return <img src={r_w} className={styles.color_round} alt="round_white"/>
            case "black":
                return <img src={r_b} className={styles.color_round} alt="round_black"/>
            case "green":
                return <img src={r_g} className={styles.color_round} alt="round_green"/>
        }
    }

    console.log(props.tablePage.tData);
    return <div className={styles.body}>
        <h2 className={styles.h2}>¡Ay caramba!</h2>
        <form className={styles.form}>
            <div className={styles.inp123_block}>
                <input className={styles.inp1} placeholder="Название"/>
                <div className={styles.inp23_block}>
                    <input className={styles.inp2} placeholder="Год"/>
                    <input className={styles.inp3} placeholder="Цена"/>
                </div>
            </div>
            <input className={styles.inp4} placeholder="Описание"/>
        </form>
        <div className={styles.auto}>Автомобиль в наличии</div>
        <table className={styles.table}>
            <thead className={styles.table_head}>
            <tr>
                <th>Название</th>
                <th>Год</th>
                <th>Цвет</th>
                <th>Статус</th>
                <th>Цена</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {
                props.tablePage.tData.map((i) =>
                    <tr className={styles.table_row}>
                        <td className={styles.table_text}>
                            <div className={styles.title}>
                                {(i.title).substr(0, 29)}
                            </div>
                            <div className={styles.description}>
                                {(i.description)}
                            </div>
                        </td>
                        <td className={styles.table_text}>
                            {i.year}
                        </td>
                        <td className={styles.table_text}>
                            {colorImg(i.color)}
                        </td>
                        <td className={styles.table_text}>
                            {statusRus(i.status)}
                        </td>
                        <td className={styles.table_text}>{i.price + " руб."}</td>
                        <button className={styles.button} onClick={() => {
                            props.deleteString(i.id)
                        }}>
                            <div className={styles.button_text}>Удалить</div>
                        </button>
                    </tr>
                )
            }
            </tbody>
        </table>
    </div>
}

export default Table