import React from 'react';
import './App.css'
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import SideBar from "./Components/SideBar/SideBar";



const App = () => {
    return (
        <div className={'wrapper'}>
            <Header className={'header'}/>
            <SideBar className={'sidebar'}/>
            <Profile className={'content'}/>
        </div>
    );
};

export default App;


