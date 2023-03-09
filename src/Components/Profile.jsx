import React from 'react';
import style from './Profile.module.css';
import userBg from '../img/backgroundMainUser.jpg'
import userAvatar from '../img/userAvatar.jpg'


const Profile = () => {
    return (
        <div className={style.contentWrapper}>
            <div className={style.contentUserBg}>
                <img src={userBg} alt={'logo'}></img>
            </div>
            <div className={style.contentUserDesc}>
                <img className={style.userImg} src={userAvatar} alt={"avatarUser"}/>
                <div className={style.userDesc}>
                    <span>вырос там</span>
                    <span>учился тут</span>
                    <span>лет столько</span>
                    <span>работаю как попало</span>
                </div>
            </div>
            <div>MyPosts</div>
            <div>NewPosts</div>
            <div>Posts1</div>
            <div>Posts2</div>
        </div>
    );
};

export default Profile;