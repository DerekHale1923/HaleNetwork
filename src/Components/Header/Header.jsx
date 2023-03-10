import React from 'react';
import style from './Header.module.css'
import item from '../../img/1627015268_12-p-rozovii-fon-dlya-logotipa-12.png'

const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.headerImgDiv}>
                <img src={item} alt={'logo'}/>
            </div>
            <div className={style.headerText}>Красивый текст</div>
        </div>
    );
};

export default Header;