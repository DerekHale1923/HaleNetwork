import React from 'react';
import style from './SideBar.module.css';

const SideBar = () => {
    return (
        <div className={style.sideBar}>
            <a href={"*"}>Profile</a>
            <a href={"*"}>Messages</a>
            <a href={"*"}>News</a>
            <a href={"*"}>Music</a>
            <a href={"*"}>Settings</a>
        </div>
    );
};

export default SideBar;